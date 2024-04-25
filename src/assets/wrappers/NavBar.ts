import styled from "styled-components"

const Wrapper = styled.aside`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 29px;
    padding: 26px 80px;
  }

  h6 {
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    text-decoration: none;
  }

  .container .container-navlink {
    display: flex;
    align-items: center;
    gap: 40px;
    height: 29px;
  }

  .container .container-navlink .navlink {
    text-decoration: none;
  }
`

export default Wrapper
