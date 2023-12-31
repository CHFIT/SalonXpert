import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../NavBar/NavBar'

const Main = ({ children }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Salon Xpert</title>
        <link rel='icon' href="/logoNavBar.png" />
      </Head>
      <NavBar />
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
    </Box>

    
  )
}

export default Main
