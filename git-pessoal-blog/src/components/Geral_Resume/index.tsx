import {
  ResumeContainer,
  ResumeDescription,
  ResumeIcons,
  ResumeInformations,
  ResumeTitle,
} from './styles'
import { ArrowSquareOut } from 'phosphor-react'
import { useContext } from 'react'
import { UseInfoContext } from '../../contexts/useInfoContext'

export function Resume() {
  const { useInfomation } = useContext(UseInfoContext)

  return (
    <ResumeContainer>
      <div>
        <img src={useInfomation.avatar_url} alt="" />
      </div>
      <ResumeInformations>
        <ResumeTitle>
          <h1>{useInfomation.name}</h1>
          <a
            href={`https://github.com/${useInfomation.login}`}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <ArrowSquareOut size={12} weight="bold" color="#3294F8" />
          </a>
        </ResumeTitle>
        <ResumeDescription>
          <p>{useInfomation.bio}</p>
        </ResumeDescription>
        <ResumeIcons>
          <p>
            <img src="../src/assets/git-icon.svg" alt="" />
            {useInfomation.login}
          </p>
          <p>
            <img src="../src/assets/build.svg" alt="" />
            {useInfomation.company}
          </p>
          <p>
            <img src="../src/assets/people.svg" alt="" />
            {useInfomation.followers}
          </p>
        </ResumeIcons>
      </ResumeInformations>
    </ResumeContainer>
  )
}
