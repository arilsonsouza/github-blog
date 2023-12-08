import { ReactNode } from 'react'
import { PageInfoContainer } from './styles'

type PageInfoProps = {
  children: ReactNode
}

export function PageInfo({ children }: PageInfoProps) {
  return (
    <PageInfoContainer>
      { children }
    </PageInfoContainer>
  )
}
