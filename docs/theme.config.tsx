import { Table } from './components/table'

// eslint-disable-next-line import/no-default-export
export default {
  darkMode: false,
  primaryHue: 48,
  logo() {
    return (
      <h1>
        jdion 
      </h1>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – jdion',
    }
  },
  components: {
    table: Table.Root,
    tr: Table.Row,
    td: Table.Cell,
    thead: Table.Head,
    th: Table.HeadCell,
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
  gitTimestamp: <></>,
  project: {
    link: 'https://github.com/jonathandion/mono',
  },
  feedback: {
    content: <></>,
  },
  footer: {
    component: <></>,
    text: <></>,
  },
  toc: {
    extraContent: <></>,
  },
}

