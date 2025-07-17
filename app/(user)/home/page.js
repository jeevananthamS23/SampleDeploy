"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); 
    }
  }, [status]);

  return (
    <>
      <h1>Welcome to the Dashboard</h1>
      <p>Signed in as: {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
