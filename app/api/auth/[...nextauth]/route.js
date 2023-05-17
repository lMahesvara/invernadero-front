import axios from 'axios'
import NextAuth, { Session } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

import https from 'https'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const agent = new https.Agent({
  rejectUnauthorized: false,
})

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token
      return session
    },

    async signIn({ user }) {
      const API_URL = process.env.API_URL
      try {
        await axios
          .post(
            `${API_URL}/usuarios`,
            {
              correo: user.email,
            },
            { httpsAgent: agent }
          )
          .then(res => {
            const token = res.headers['auth']
            user.token = token

            return true
          })
      } catch (error) {
        console.log(error)
      }

      return true
    },
  },
  secret: process.env.SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
