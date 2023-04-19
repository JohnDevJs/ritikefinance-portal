import { loginUser } from "Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";
import { useStore1Selector } from "index";
import React from "react"
import ReactApexChart from "react-apexcharts"
import { Card } from "reactstrap"

const ChartAmount = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;
    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/monthlyTotals`, token);

    const totalAmount = data?.map((item) => item.totalAmount);
    const months = data?.map((item) => item.month);
    const totalAmountLoan = data?.map((item) => item.totalAmountLoan);

    const series = [
        {
            name: "Amount Loan",
            data: totalAmountLoan,
        },
        {
            name: "Amount paid",
            data: totalAmount
        },
    ]
    const options = {
        chart: {
            toolbar: {
                show: !1,
            },
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ['transparent']
        },
        series: [
            {
                name: "Amount Loan",
                data: totalAmountLoan,
            },
            {
                name: "Amount paid",
                data: totalAmount
            },
        ],
        colors: ['#303d83', '#008ad3'],
        xaxis: {
            // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            categories: months,
        },
        yaxis: {
            title: {
                text: ''
            }
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "R " + val
                }
            }
        }
    }

    return (
        <Card className="card-border-radius">
            <ReactApexChart options={options} series={series} type="bar" height={250} className="apex-charts" />
        </Card>
    )
}

export default ChartAmount
