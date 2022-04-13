import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import { Loader } from "@components/common";

function Signin({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);

  if (session) return <Loader />;

  return (
    <div className="flex h-screen flex-col items-center space-y-8 pt-40">
      <Head>
        <title>Login - Thrush</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="rounded-full border border-transparent bg-[#d16d02] py-4 px-6 text-xs font-bold uppercase tracking-wider text-white transition duration-300 ease-out hover:scale-105 hover:bg-[#e57600] md:text-base"
            onClick={() => signIn(provider.id)}
          >
            Sign in To Thrush
          </button>
        </div>
      ))}
    </div>
  );
}

export default Signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
