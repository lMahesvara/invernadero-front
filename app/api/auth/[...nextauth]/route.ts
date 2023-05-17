import axios from 'axios'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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

    async signIn({ user }: { user: any }) {
      const API_URL = process.env.API_URL
      await axios.post(`${API_URL}/usuarios`, {
        email: user.email,
      })

      return true
    },
  },
  secret: process.env.SECRET,
})

export { handler as GET, handler as POST }
