import { Resume } from '../../components/Geral_Resume'
import { Search } from './components/Search'
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
  const { issuesInformation } = useContext(UseInfoContext)

  return (
    <IssuesContainer>
      <Resume />
      <Search />
      <IssuesList>
        {issuesInformation?.items?.map((post) => (
          <IssuesCard key={post.id}>
            <IssuesCardTitle>
              <a href={`detail/${post.number}`}>
                <h2>
                  {post.title.substring(0, 35)}
                  {post.title.length > 30 ? '...' : ''}
                </h2>
              </a>
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
