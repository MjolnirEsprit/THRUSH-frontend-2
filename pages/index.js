import React from "react";
import Content from "@components/common/content";
import { useRouter } from "next/router";
import { Loader } from "@components/common";
import { BaseLayout } from "@components/common/layout";
import { userService } from "services";
import { useSession } from "next-auth/react";

export default function Index() {
  const router = useRouter();

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("../auth/signin");
    },
  });

  if (userService.userValue?.user.role == "admin") {
    router.push("/dashboard");
  }

  return (
    <div>
      <h1>Hi {userService.userValue?.user.name}!</h1>
      <Content/>
    </div>
  );
}

Index.Layout = BaseLayout;
