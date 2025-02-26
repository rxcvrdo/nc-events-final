// import NextAuth, { User } from "next-auth"
// import CredentialsProvider from 'next-auth/providers/credentials' 
// import { db } from "./database/drizzle"
// import { users } from "./database/schema"
// import { eq, or } from "drizzle-orm"
// import {compare} from "bcryptjs"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//     session:{
//         strategy:"jwt"
//     },
//   providers: [
//     CredentialsProvider({
//         async authorize(credentials){
//             if(!credentials?.email || !credentials.password || !credentials.username) {
//                 return null
//             }
//             const user = await db
//             .select()
//             .from(users)
//             .where(
//                 eq(users.email, credentials.email?.toString()),
                   
                
//             )
//             .limit(1);

//             if(user.length === 0) return null

//             const isPasswordValid = await compare(
//                 credentials.password.toString(),
//                 user[0].password,
//             )

//             if(!isPasswordValid) return null

//             return{
//                 id: user[0].id.toString(),
//                 email: user[0].email,
//                 name: user[0].fullName,
//                 username: user[0].username,
//             } as User
//         }
//     })
//   ],
//   pages:{
//     signIn: '/sign-in'
//   },
//   callbacks: {
//     async jwt({token, user}) {
//         if (user) {
//             token.id = user.id
//             token.name = user.name
            
//         }

//         return token},
//         async session({session, token}) {
//             if(session.user) {
//                 session.user.id = token.id as string
//                 session.user.name = token.name as string
//             }

//             return session
//         },
//   }
// })

import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./database/drizzle";
import { users } from "./database/schema";
import { eq, or } from "drizzle-orm";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        username: { label: "Username", type: "text", optional: true },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await db
          .select()
          .from(users)
          .where(
            or(
              eq(users.email, credentials.email.toString()),
              eq(users.username, credentials.username?.toString() || "")
            )
          )
          .limit(1);

        if (user.length === 0) return null;

        const isPasswordValid = await compare(credentials.password.toString(), user[0].password);
        if (!isPasswordValid) return null;

        return {
          id: user[0].id.toString(),
          email: user[0].email,
          name: user[0].fullName,
          username: user[0].username,
        } as User;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          name: token.name as string,
        },
      };
    },
  },
});
