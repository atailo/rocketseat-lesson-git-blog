import styled from 'styled-components'

export const IssuesContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IssuesList = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 854px;
  color: white;
  margin-top: 10rem;
  gap: 2rem;
  text-align: justify;
`

export const IssuesCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 416px;
  height: 260px;
  left: calc(50% - 416px / 2 - 224px);
  top: 631px;
  padding: 2rem;
  background: #112131;
  border-radius: 10px;
  gap: 1rem;
  align-items: center;
`
export const IssuesCardTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  h2 {
    display: flex;
    padding: 0;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 160%;
    color: #e7edf4;
    height: 1.375rem;
  }

  h4 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    width: 90px;

    /* or 22px */

    /* Base/Span */

    color: #7b96b2;
  }
`

export const IssuesCardText = styled.p`
  width: 22rem;
  height: 8rem;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: #afc2d4;
  text-align: justify;
  text-overflow: ellipsis;
  overflow: hidden;
`
