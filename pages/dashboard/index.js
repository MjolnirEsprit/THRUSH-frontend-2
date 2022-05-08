import React from "react";
import { useRouter } from "next/router";
import { BaseLayout } from "@components/common/layout";
import { useSession } from "next-auth/react";
//import UserDataTable from "@components/UserDataTable/App";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { userService } from "@services";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

//data for bar chart
const data = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "Listeners / month",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
        },
    ],
};

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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <h1>Hi {userService.userValue?.user.name}!</h1>
                <h3>Your role is {userService.userValue?.user.role}</h3>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Line data={data} width={400}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

Dashboard.Layout = BaseLayout;
