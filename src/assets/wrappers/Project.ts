import styled from "styled-components"

const Wrapper = styled.aside`
  .project-card {
    display: flex;
    position: relative;
    align-items: center;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    border-color: #c7d0d9;
    margin-bottom: 30px;
    padding-bottom: 30px;
  }

  .line {
    border: 1px solid black;
  }

  .project-card div {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .project-card div h1 {
    font-size: 60px;
    font-weight: 400;
    line-height: 72.61px;
    text-align: left;
    color: #0b0c0e;
  }

  .project-card div h6 {
    font-size: 18px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: left;
    color: #3c3d3e;
  }

  .project-card button {
    background-color: transparent;
    border-radius: 180px;
    border-width: 1px;
    border-color: #3c3d3e;
    opacity: 80%;
    position: absolute;
    right: 0px;
    padding: 20px;
  }

  .project-card button:hover {
    background-color: #0b0c0e;
    color: #f4f7fa;
  }

  .project-card button:hover {
    background-color: #0b0c0e;
    color: #f4f7fa;
  }
`

export default Wrapper
