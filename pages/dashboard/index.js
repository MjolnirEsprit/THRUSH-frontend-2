import React from "react";
import { useRouter } from "next/router";
import { Loader } from "@components/common";
import { BaseLayout } from "@components/common/layout";
import { userService } from "services";
import { useSession } from "next-auth/react";
import DashboardContent from "../../components/Dashboard/Dashboard";

export default function Dashboard() {
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
        <div>
            <h1>Hi {userService.userValue?.user.name}!</h1>
            <h3>Your role is {userService.userValue?.user.role}</h3>
        </div>
    );
}

Dashboard.Layout = BaseLayout;
