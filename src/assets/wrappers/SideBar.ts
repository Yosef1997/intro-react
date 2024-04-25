import styled from "styled-components"

const Wrapper = styled.aside`
  .sidebar-container {
    display: grid;
    grid-template-columns: repeat(2, 5fr);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0px;
    right: 0px;
  }

  .sidebar-container .sidebar-left {
    background-color: #0b0c0e;
    opacity: 10%;
  }

  .sidebar-container .sidebar-right {
    background-color: #0b0c0e;
    padding: 57px 67px;
  }

  .sidebar-container .sidebar-right button {
    background-color: transparent;
    border-width: 0px;
    position: absolute;
    right: 67px;
    color: #f4f7fa;
  }

  .sidebar-menu {
    padding-top: 57px;
    padding-bottom: 121px;
    font-size: 60px;
    font-weight: 500;
    line-height: 72px;
    text-align: left;
    color: #f4f7fa;
  }

  .sidebar-menu .navlink {
    text-decoration: none;
  }

  .sidebar-footer {
    display: flex;
    font-size: 18px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: left;
    color: #f4f7fa;
    gap: 32px;
  }
`

export default Wrapper
