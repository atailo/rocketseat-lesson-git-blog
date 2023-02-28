import { SearchContainer, SearchTitle } from './styles'

import { useContext } from 'react'
import { UseInfoContext } from '../../../../contexts/useInfoContext'

export function Search() {
  const { issuesInformation } = useContext(UseInfoContext)
  const { setQuerySearch } = useContext(UseInfoContext)

  return (
    <SearchContainer>
      <SearchTitle>
        <h4>Publicações</h4>
        <h3>
          {issuesInformation?.total_count < 10
            ? `0${issuesInformation?.total_count} publicações `
            : `${issuesInformation?.total_count} publicações `}
        </h3>
      </SearchTitle>
      <div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(e) => setQuerySearch(e.target.value)}
        />
      </div>
    </SearchContainer>
  )
}
