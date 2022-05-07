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

  console.log(userService.userValue?.user.name);

  /*
  if (userService.userValue?.user.role == "admin") {
    router.push("/dashboard");
  }
  */

  return (
    <div>
      <Content />
    </div>
  );
}

Index.Layout = BaseLayout;
