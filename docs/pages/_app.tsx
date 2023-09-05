import '../style.css'

const App = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

// eslint-disable-next-line import/no-default-export
export default App
