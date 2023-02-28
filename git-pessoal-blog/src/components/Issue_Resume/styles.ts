import styled from 'styled-components'

export const ResumeContainer = styled.section`
  position: absolute;
  width: 864px;
  left: calc(50% - 864px / 2);
  top: 208px;
  color: ${(props) => props.theme.text};
  gap: 2rem;
  /* Base/Profile */

  background: #0b1b2b;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem;
`

export const ResumeInformations = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;

  p {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  img {
    height: 18px;
    width: 18px;
    border-radius: 0;
  }
`
export const ResumeDescription = styled.div`
  text-align: justify;
  font-size: 1.2rem;
`
export const ResumeTitle = styled.div`
  a {
    text-decoration: none;
    display: flex;
    gap: 0.25rem;
    font-size: 0.75rem;
    align-items: center;
    color: ${(props) => props.theme.blue};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ResumeIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`
