import styled from "styled-components"

const Wrapper = styled.aside`
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 40px;
    width: 100%;
    overflow: auto;
    overflow-x: scroll;
  }

  div::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  div {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  div img {
    padding: 56px 48px 56px 48px;
    border-radius: 4px 0px 0px 0px;
    border: 1px 0px 0px 0px;
    margin-right: 40px;
    background-color: #c7d0d9;
  }
`

export default Wrapper
