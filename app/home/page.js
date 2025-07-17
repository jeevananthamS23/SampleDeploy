"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return (
      <div>
        <h2>You are not signed in</h2>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
  console.log(session);

  return (
    <div>
      <h2>Hello, {session.user.name}!</h2>
      <p>You are signed in with GitHub.</p>
      <img src={session.user.image} alt="Jeevanantham"></img>
      <br>
      </br>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
