import type { HTMLProps, ReactNode, RefObject } from 'react'
import { Component, createRef } from 'react'
import { isDom } from '@jdion/dom/types'

interface Options {
  reverse: boolean; 
  max: number;
  perspective: number; 
  scale: number;
  speed: number;
  transition: boolean;
  axis: null;
  reset: boolean; 
  easing: string;
}

interface Props extends HTMLProps<HTMLDivElement> {
  angle?: number;
  children?: ReactNode;
  options?: Options;
}

interface State {
  style: React.CSSProperties;
}

export class Tilt extends Component<Props, State> {
  private ref: RefObject<HTMLDivElement>
  private width: number 
  private height: number
  private left: number
  private top: number
  private transitionTimeout: number | null
  private element: HTMLDivElement | null
  private reverse: number
  private updateCall: number | null
  private settings: Options

  constructor(props: Props) {
    super(props)
    this.ref = createRef()
    this.width = 0
    this.height = 0
    this.left = 0
    this.top = 0
    this.transitionTimeout = null
    this.updateCall = null
    this.element = null

    this.settings = {
      reverse: false,
      max: 35,
      perspective: 1000,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      scale: 1.1,
      speed: 1000,
      transition: true,
      axis: null,
      reset: true,
      ...props.options,
    }

    this.state = {
      style: {
        transition: `${this.settings.speed}ms ${this.settings.easing}`,
      },
    }

    this.reverse = this.settings.reverse ? -1 : 1
  }

  componentDidMount() {
    this.element = this.ref.current

    setTimeout(() => {
      if (this.element?.parentElement?.querySelector(':hover') === this.element) {
        this.onMouseEnter()
      }
    }, 0)
  }

  componentWillUnmount() {
    this.transitionTimeout && clearTimeout(this.transitionTimeout)
    this.updateCall && cancelAnimationFrame(this.updateCall)
  }

  onMouseEnter = () => {
    const { style } = this.state

    this.updateElementPosition()

    this.setState({
      ...this.state,
      style: {
        ...style,
        willChange: 'transform',
      },
    })
  }

  reset = () => {
    window.requestAnimationFrame(() => {
      this.setState({
        ...this.state,
        style: {
          transform: `perspective(${this.settings.perspective}px) ` + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'scale3d(1, 1, 1)',
        },
      })
    })
  }

  onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.persist()

    if (this.updateCall !== null) {
      window.cancelAnimationFrame(this.updateCall)
    }

    this.updateCall = requestAnimationFrame(this.update.bind(this, e))
  }

  onMouseLeave = () => {
    if (this.settings.reset) {
      this.reset()
    }
  }

  getValues = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = (e.nativeEvent.clientX - this.left) / this.width
    const y = (e.nativeEvent.clientY - this.top) / this.height
    const _x = Math.min(Math.max(x, 0), 1)
    const _y = Math.min(Math.max(y, 0), 1)
    const tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2)
    const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2)
    const percentageX = _x * 100
    const percentageY = _y * 100

    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY,
    }

  }

  updateElementPosition = () => {
    const rect = this.element?.getBoundingClientRect()

    this.width = this.element?.offsetWidth ?? 0
    this.height = this.element?.offsetHeight ?? 0
    this.left = rect?.left ?? 0
    this.top = rect?.top ?? 0
  }

  update = (e: React.MouseEvent<HTMLDivElement>) => {
    const values = this.getValues(e)
    const { style } = this.state

    this.setState({
      ...this.state,
      style: {
        ...style,
        transform: `perspective(${this.settings.perspective}px) `
          + `rotateX(${this.settings.axis === 'x' ? 0 : values.tiltY}deg) `
          + `rotateY(${this.settings.axis === 'y' ? 0 : values.tiltX}deg) `
          + `scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`,
      },
    })

    this.updateCall = null
  }

  render() {
    const { children, className } = this.props

    if (!isDom) return null

    return (
      <div 
        ref={this.ref}
        className={className}
        style={{
          // eslint-disable-next-line react/destructuring-assignment
          ...this.props.style, 
          // eslint-disable-next-line react/destructuring-assignment
          ...this.state.style,
          transition: `${this.settings.speed}ms ${this.settings.easing}`,
        }}
        onMouseEnter={this.onMouseEnter}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
      >
        {children}
      </div>
    )
  }
}
