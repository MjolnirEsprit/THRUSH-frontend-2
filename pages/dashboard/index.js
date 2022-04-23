import React from "react";
import { useRouter } from "next/router";
import { BaseLayout } from "@components/common/layout";
import { useSession } from "next-auth/react";
import DashboardContent from "@components/Dashboard/Dashboard";

export default function Dashboard() {
    const router = useRouter();

    const { status, data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("../auth/signin");
        },
    });

    return (
        <div>
            <DashboardContent/>
        </div>
    );
}

Dashboard.Layout = BaseLayout;
