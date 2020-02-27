import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Delius+Unicase&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f9f9fa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .header-fixed {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    font-size: 17px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    float: right;
    z-index: 1000;
    background-color: #fdf9f3; 
    height: 46px;
    display: flex;
    align-item: center;
  }

  .navbar {
    max-width: 100%;
    width: 1250px;
    margin: auto;
    position: relative;
    padding: 3px 2%;
    display: flex;
    justify-content: flex-end;
  }

  .login:hover {
    cursor: pointer;
    background: #6fd1c7;
  }

  .login {
    display: block;
    right: 165px;
    width: 118px;
    padding: 3px 0;
    height: auto;
    font-size: 15px;
    text-align: center;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.112em;
    border-radius: 3px;
    border: 2px solid #0a0a0a;
    color: #0a0a0a;
    background: #66e2d5;
    text-decoration: none
  }
  .section {
    // background-color: red;
    padding-top: 46px;
  }


`;

export default GlobalStyle;
