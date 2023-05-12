import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {

    user: {

      idx: number,
      id: string,
      name: string,
      email?: string | null,
      image?: string | null,
    }
  }
}