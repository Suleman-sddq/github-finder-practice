import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import Alert from '../components/layouts/Alert'



function Home() {
  return (
    <>
      <Alert/>
      <UserSearch/>
      <UserResults/>
    </>
  )
}

export default Home