import React from "react";
import Content from "@components/common/content";
import { MainNavbar } from "@components/common";
import { useRouter } from "next/router";
import Head from "next/head";
import { Loader } from "@components/common";
import { BaseLayout } from "@components/common/layout";
import { userService } from "services";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

export default function Index() {
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

  console.log(userService.userValue?.user.name)

  return (
    <div>
      <h1>Hi {userService.userValue?.user.name}!</h1>
      <h3>Your token is {userService.tokenValue}</h3>
      <Content />
    </div>
  );
}

Index.Layout = BaseLayout;
