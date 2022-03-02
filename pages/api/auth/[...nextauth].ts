import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { User } from '../../../typings';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      const userSession: User | undefined = session?.user;

      if (userSession) {
        userSession.username = user.name!.split(' ').join('').toLowerCase();
        userSession.uid = token.sub;
        session.user = userSession;
        return session;
      }
      return session;

      // @ts-ignore
      // session.user.username = session.user
      //   .name!.split(' ')
      //   .join('')
      //   .toLowerCase();

      //@ts-ignore
      // session.user.uid = token.sub;

      // return session;
    },
  },
});
