import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { getGuest, createGuest } from "./data-service";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existGuest = await getGuest(user.email);
        if (!existGuest) {
          await createGuest({
            email: user.email,
            fullName: user.name,
          });
        }
        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
