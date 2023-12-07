import styled from 'styled-components'
import backgroundImage from '../../assets/header-bg.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 18.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`
