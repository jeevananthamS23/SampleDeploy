"use client";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/home"); 
    }
  }, [session]);

  return (
    <div className={styles.page}>
      <p>Please sign in</p>
      <button onClick={() => signIn()}>Sign in with GitHub</button>
    </div>
  );
}
