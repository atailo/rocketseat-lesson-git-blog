import { Resume } from '../../components/Geral_Resume'
import { Search } from './components/Search'
import { useNavigate } from 'react-router-dom'
import {
  IssuesCard,
  IssuesCardText,
  IssuesCardTitle,
  IssuesContainer,
  IssuesList,
} from './styles'
import { useContext } from 'react'
import { UseInfoContext } from '../../contexts/useInfoContext'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Issues() {
  const navigate = useNavigate()
  const routeChange = () => {
    const path = `detail`
    navigate(path)
  }

  const { issuesInformation } = useContext(UseInfoContext)
  console.log(issuesInformation)

  return (
    <IssuesContainer>
      <Resume />
      <Search />
      <IssuesList>
        {issuesInformation?.items?.map((post) => (
          <IssuesCard onClick={routeChange} key={post.id}>
            <IssuesCardTitle>
              <h2>
                {post.title.substring(0, 35)}
                {post.title.length > 30 ? '...' : ''}
              </h2>
              <h4>
                {format(new Date(post.created_at), 'P', {
                  locale: ptBR,
                })}
              </h4>
            </IssuesCardTitle>
            <IssuesCardText>
              {post.body.substring(0, 150)}
              {post.body.length > 150 ? '...' : ''}
            </IssuesCardText>
          </IssuesCard>
        ))}
      </IssuesList>
    </IssuesContainer>
  )
}
