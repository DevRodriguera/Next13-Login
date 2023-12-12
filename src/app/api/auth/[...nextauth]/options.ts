import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

export const options : NextAuthOptions = {
  providers:[
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Credentials({
      credentials: {
        email:{label:"email", type:"email",placeholder:"your best email"},
        password:{label:"password", type:"password"},
      },
      async authorize(credentials, req) {
        const user = {id:'1',name:'J Smith', email:'root@root.com', password:'root'}
        if(user && user?.email === credentials?.email && user?.password === credentials?.password){
          return user
        }
        return null
      },
    })
  ],pages:{
    signIn:'/auth/signin',
  }
}