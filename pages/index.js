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
      router.push("/api/auth/signin");
    },
  });

  // Loading animation...
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Thrush - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hi {userService.userValue?.firstName}!</h1>
        <Content />
      </div>
    </div>
  );
}

Index.Layout = BaseLayout;
