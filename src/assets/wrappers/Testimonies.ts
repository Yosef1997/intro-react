import styled from "styled-components"

const Wrapper = styled.aside`
  .testimony-card {
    margin-bottom: 64px;
  }
  .testimony-card p {
    font-size: 27px;
    font-weight: 400;
    line-height: 37.8px;
    text-align: left;
  }

  .testimony-card figure {
    display: flex;
    margin-top: 28px;
    gap: 12px;
  }

  .testimony-card figure figcaption h5 {
    font-size: 18px;
    font-weight: 500;
    line-height: 28.8px;
    text-align: left;
    color: #0b0c0e;
  }

  .testimony-card figure figcaption h6 {
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
    text-align: left;
    color: #0b0c0e;
  }
`
export default Wrapper
