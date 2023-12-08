import styled from 'styled-components'

export const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
`

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;

    span {
      color: ${({theme}) => theme['base-subtitle']};
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
    }

    small {
      color: ${({theme}) => theme['base-span']};
      text-align: right;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }

  input {
    display: flex;
    width: 100%;
    padding: 0.75rem 1rem;
    align-items: center;
    gap: 0.5rem;

    color:  ${({ theme }) => theme['base-label']};
    border-radius: 0.375rem;
    border: 1px solid ${({theme}) => theme['base-border']};
    background: ${({ theme }) => theme['base-input']};

    &:focus {
      color:  ${({ theme }) => theme['base-text']};
      border: 1px solid ${({ theme }) => theme.blue};
      box-shadow: none;
    }
  }
`
export const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`
