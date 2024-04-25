import styled from "styled-components"

const Wrapper = styled.section`
  div {
    background-color: #c7d0d9;
    height: 100vh;
    overflow: hidden;
  }

  div .hero-image {
    position: absolute;
    bottom: 0px;
    right: 50%;
    transform: translateX(50%);
  }

  div button {
    background-color: #0b0c0e;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    gap: 28px;
    padding: 30px;
    color: #fff;
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    bottom: 50%;
    right: 0;
    transform: translateY(50%);
    border-radius: 64.29px 0px 0px 64.29px;
  }

  div button:hover span {
    display: block;
  }

  div button span {
    display: none;
  }

  div .running-container h1 {
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    font-size: 150.38px;
    font-weight: 500;
    line-height: 180.45px;
    color: #f4f7fa;
    bottom: 100px;
    /* animation properties */
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);

    -moz-animation: my-animation 15s linear infinite;
    -webkit-animation: my-animation 15s linear infinite;
    animation: my-animation 15s linear infinite;
  }

  /* for Firefox */
  @-moz-keyframes my-animation {
    from {
      -moz-transform: translateX(-100%);
    }
    to {
      -moz-transform: translateX(100%);
    }
  }

  /* for Chrome */
  @-webkit-keyframes my-animation {
    from {
      -webkit-transform: translateX(-100%);
    }
    to {
      -webkit-transform: translateX(100%);
    }
  }

  @keyframes my-animation {
    from {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    to {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
`

export default Wrapper
