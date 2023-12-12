import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import UserInfo from '../components/UserInfo'

const Server = async () => {

  const session = await getServerSession()
  if (!session) {
    redirect('api/auth/signin?callbackUrl=/server')
  }

  return (
    <section className='flex flex-col items-center gap-4'>
      <h1 className='text-2x1 text-white'>Server page</h1>
      <UserInfo user={session?.user} />
    </section>
  )
}

export default Server