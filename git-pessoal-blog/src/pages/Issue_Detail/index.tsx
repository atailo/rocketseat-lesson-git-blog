import { useCallback, useEffect, useState } from 'react'
import { IssueResume } from '../../components/Issue_Resume'
import { IssuesContainer, IssuesList } from './styles'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

interface Issue {
  title: string
  body: string
}

export function IssueDetail() {
  const { id } = useParams()
  const [issue, setIssue] = useState<Issue>()

  // const IssuesDetail = useCallback(async (id?: number) => {
  //   const response = await api.get(
  //     `/repos/atailo/RocketSeat-DT-Money-Project/issues/${id}`,
  //   )

  //   console.log('oi')
  //   console.log(response.data)
  //   setIssue(response.data)
  // }, [])

  useEffect(() => {
    const load = async () => {
      const response = await api.get(
        `/repos/atailo/RocketSeat-DT-Money-Project/issues/${id}`,
      )
      setIssue(response.data)
    }
    load()
  }, [id])

  return (
    <>
      <IssuesContainer>
        <IssueResume />
        <IssuesList>
          <div>{issue?.body}</div>
        </IssuesList>
      </IssuesContainer>
    </>
  )
}
