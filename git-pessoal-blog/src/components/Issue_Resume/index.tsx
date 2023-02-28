import {
  ResumeContainer,
  ResumeDescription,
  ResumeIcons,
  ResumeInformations,
  ResumeTitle,
} from './styles'
import { ArrowSquareOut } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { UseInfoContext } from '../../contexts/useInfoContext'
import { useContext } from 'react'

export function IssueResume() {
  const { useInfomation } = useContext(UseInfoContext)
  return (
    <ResumeContainer>
      <ResumeInformations>
        <ResumeTitle>
          <NavLink to="/"> &lt; VOLTAR</NavLink>

          <a href="">
            VER NO GITHUB
            <ArrowSquareOut size={12} weight="bold" color="#3294F8" />
          </a>
        </ResumeTitle>
        <ResumeDescription>
          <h1>JavaScript data types and data structures</h1>
        </ResumeDescription>
        <ResumeIcons>
          <p>
            <img src="../src/assets/git-icon.svg" alt="" />
            {useInfomation.login}
          </p>
          <p>
            <img src="/../../src/assets/calendar.svg" alt="" />
            Há 1 dia
          </p>
          <p>
            <img src="/../../src/assets/speaker.svg" alt="" />5 Comentários
          </p>
        </ResumeIcons>
      </ResumeInformations>
    </ResumeContainer>
  )
}
