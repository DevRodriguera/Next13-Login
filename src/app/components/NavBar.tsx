import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const NavBar = async () => {
  const session = await getServerSession()

  if(!session){
    return<></>
  }
  
  return (
    <nav className='bg-slate-500 p-4'>
      <ul className="flex justify-evenly text-lg font-bold">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/api/auth/signin"}>Sign In</Link></li>
        <li><Link href={"/api/auth/signout"}>Sign Out</Link></li>
        <li><Link href={"/server"}>Server</Link></li>
        <li><Link href={"/client"}>Client</Link></li>
        <li><Link href={"/dashboard"}>Dashboard</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar