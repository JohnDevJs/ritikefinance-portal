import { loginUser } from "Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";
import { useStore1Selector } from "index";
import React from "react"
import ReactApexChart from "react-apexcharts"
import { Card } from 'reactstrap';

const Charts = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;
    const { data, loading, length, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/monthlyTotals/loanStatus/${userId}`, token);


    const series = [
        {
            name: "Loan amount",
            data: [1000, 800, 700, 750, 950, 900, 800, 780, 100, 600, 500, 100],
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
                name: "Loan amount",
                data: [1000, 800, 700, 750, 950, 900, 800, 780, 100, 600, 500, 100],
            },
        ],
        colors: ['#008ad3'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        <Card className='card-border-radius'>
            <ReactApexChart options={options} series={series} type="bar" height={240} className="apex-charts" />
        </Card>
    )
}

export default Charts
