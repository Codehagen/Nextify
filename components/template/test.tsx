"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../shadcn/button";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}

export default function CopyButton() {
    const { data: session } = useSession();

    return (
        <AuthButton />
    );
  }