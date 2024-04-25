import styled from "styled-components"

const Wrapper = styled.aside`
  * {
    background-color: #0b0c0e;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px;
  }

  .container p {
    font-size: 60px;
    font-weight: 500;
    line-height: 72px;
    text-align: left;
    color: #f4f7fa;
  }

  .container button {
    font-size: 18px;
    font-weight: 500;
    line-height: 21.6px;
    color: #0b0c0e;
    background-color: #f4f7fa;
    padding: 24px 48px 24px 48px;
    border-radius: 170px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
  }

  .container p span {
    display: flex;
    gap: 12px;
  }

  .container p span img {
    height: 80px;
    width: 80px;
    border-radius: 50px;
  }
`

export default Wrapper
