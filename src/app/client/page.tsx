"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import UserInfo from "../components/UserInfo"


const Client = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    }
  })

  if (status !== 'authenticated') return

  return (
    <section className='flex flex-col items-center gap-4'>
      <h1 className='text-2x1 text-white'>Server page</h1>
      <UserInfo user={session?.user} />
    </section>
  )
}

export default Client