import { api } from '../lib/axios'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface useInfo {
  avatar_url: string
  name: string
  bio: string
  url: string
  login: string
  followers: number
  company: string
}

interface Posts {
  total_count: number
  items: {
    id: number
    number: number
    title: string
    body: string
    created_at: string
  }[]
}

interface UseInfoContextype {
  useInfomation: useInfo
  issuesInformation: Posts
  setQuerySearch: Dispatch<SetStateAction<string>>
}

interface UseInfoProviderProviderProps {
  children: ReactNode
}

export const UseInfoContext = createContext({} as UseInfoContextype)

export function UseInfoProvider({ children }: UseInfoProviderProviderProps) {
  const [useInfomation, setuseInfo] = useState({} as useInfo)
  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('users/atailo', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    console.log(response.data)

    setuseInfo(response.data)
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  const [issuesInformation, setissuesInformation] = useState<Posts>({} as Posts)
  const [querySearch, setQuerySearch] = useState('')
  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get(
      `/search/issues?q=${querySearch}%20repo:atailo/RocketSeat-DT-Money-Project`,
    )
    setissuesInformation(response.data)
    console.log(`o valor do response é ${response.data}`)
  }, [])

  useEffect(() => {
    fetchIssues()

    console.log(`o valor do querySearch é ${querySearch}`)
  }, [fetchIssues, querySearch])

  return (
    <UseInfoContext.Provider
      value={{ useInfomation, issuesInformation, setQuerySearch }}
    >
      {children}
    </UseInfoContext.Provider>
  )
}
