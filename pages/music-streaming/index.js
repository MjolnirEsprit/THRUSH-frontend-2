import Dashboard from "@components/MusicStreaming/Dashboard";
import { BaseLayout } from "@components/common/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Loader } from "@components/common";

export default function MusicStreaming() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("../auth/signin");
    },
  });

  // Loading animation...
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <Dashboard />
    </>
  );
}

MusicStreaming.Layout = BaseLayout;
