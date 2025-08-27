import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/user";
import mongoose from "mongoose";
import payment from "@/models/payment";
const MONGODB_URI = process.env.MONGODB_URI;

async function connectDb() {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(MONGODB_URI);
  }
}

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDb();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) await User.create({
          email: user.email,
          username: user.email.split("@")[0],
        });
      }
      return true;
    },
    async session({ session }) {
      await connectDb();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) session.user.name = dbUser.username;
      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
