import { getServerSession } from "next-auth/next";

export async function getCurrentUser() {
  const session = await getServerSession();
  console.log(session);

  return session?.user;
}
