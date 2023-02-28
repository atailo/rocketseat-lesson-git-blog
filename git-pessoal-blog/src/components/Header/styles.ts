import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.profile};
  width: 100%;
  height: 296px;
  div {
    display: flex;
    justify-content: space-between;
  }
  img:first-child {
    margin-top: 4.375rem;
  }
  img:last-child {
    margin-top: 1.875rem;
  }
`
