import { getServerSession } from 'next-auth'
import React from 'react'
import UserInfo from './components/UserInfo'
import Link from 'next/link'

const Home = async () => {
  const session = await getServerSession()
  return (
    <div>
      {session ? <UserInfo user={session?.user} /> : <h1>Not logged in, <Link href="/api/auth/signin">Click here to Sign in</Link></h1>}
    </div>
  )
}

export default Home