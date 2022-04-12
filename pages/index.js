import React from 'react';
import Content from '@components/common/content';
import { MainNavbar } from '@components/common';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import {Loader} from "@components/common";


export default function Index() {
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
            <>
                <MainNavbar />
                <Content/>
            </>
        </div>
    )
};