import { injectGlobal } from 'styled-components'

injectGlobal`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-size: 16px;   
    height: 100%;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  body {
    background: #f3f3f3;
    font-family: 'Fira Sans', sans-serif;
    height: 100%;
  }

  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }

  button {
    outline: none;
  }
`
