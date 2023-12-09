import styled from 'styled-components'

export const PostDetailContainer = styled.div``


export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;

    a {
        text-decoration: none;
        background: transparent;
        color: ${(props) => props.theme.blue};
        transition: border 0.2s;
        border-bottom: 2px solid transparent;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-transform: uppercase;

        font-weight: 700;
        font-size: 0.75rem;
        line-height: 160%;

        &:hover {
          border-bottom: 2px solid ${({theme}) => theme.blue};
        }

        &:focus {
          box-shadow: none;
        }
    }

    div {
      padding: 1.25rem;

      h1 {
        color: ${({theme}) => theme['base-title']};
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
      }
    }
  }

  footer {
    display: inline-flex;
    align-items: center;
    gap: 2rem;
  }
`

export const PostInfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({theme}) => theme['base-span']};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`

export const PostDetailContent = styled.main`
  padding: 2.5rem 2rem;

  white-space: pre-wrap;
  overflow: hidden;
  div {
    overflow-x: auto;
    width: 100%;
    height: 100%;
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['base-profile']};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.blue};
    }

    h3 {
      color: ${(props) => props.theme.blue};
    }

    a {
      text-decoration: none;
      background: transparent;
      color: ${(props) => props.theme.blue};

      &:hover {
        transition: border 2s;
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }
    }

    img {
      max-width: 100%;
    }
  }
  @media (max-width: 680px) {
    padding: 1rem 0;
  }
`
