import styled from 'styled-components'

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  gap: 0.75rem;
  width: 54rem;

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    color: ${(props) => props.theme.subtitle};
    width: 864px;
    height: 50px;
    background: ${(props) => props.theme.input};
    border: 1px solid #1c2f41;
    border-radius: 6px;
  }
`

export const SearchTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  h4 {
    width: 99px;
    height: 29px;

    /* Title / Title S */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    /* identical to box height, or 29px */

    /* Base/Subtitle */

    color: ${(props) => props.theme.subtitle};
  }

  h3 {
    width: 100px;
    height: 22px;
    text-align: right;

    /* Text/Text S */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */

    /* Base/Span */

    color: ${(props) => props.theme.span};
  }
`
