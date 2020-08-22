import React from 'react'
import styled from 'styled-components'
import { Hello } from '@components/Hello'
import { NextPage } from 'next'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export const IndexPage: NextPage = () => {
  return (
    <>
      <Title>IndexPage</Title>
      <Hello name="marko" />
    </>
  )
}

export default IndexPage
