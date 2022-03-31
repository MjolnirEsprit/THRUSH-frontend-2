import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";
import Navbar from '@components/_App/Navbar';
import Footer from '@components/_App/Footer';

export default function MusicStreaming() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  // Loading animation...
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Thrush - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Dashboard />
       
    </div>
  );
}
