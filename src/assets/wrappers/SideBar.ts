import styled from "styled-components"

const Wrapper = styled.aside`
  .sidebar-container {
    height: 100vh;
    width: 50vw;
    top: 0px;
    right: 0px;
    padding: 67px;
    background-color: #0b0c0e;
    position: fixed;
  }

  .sidebar-menu {
    position: relative;
  }
  .sidebar-menu button {
    position: absolute;
    right: 0px;
    top: 0px;
    background-color: #0b0c0e;
    border-width: 0px;
    color: #fff;
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
