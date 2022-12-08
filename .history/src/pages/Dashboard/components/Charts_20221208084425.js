import React from "react"
import ReactApexChart from "react-apexcharts"

const Charts = () => {


    const series = [
        {
            name: "Loan amount",
            data: [115000, 150000, 120000, 115000, 145000, 115000, 158000, 123000, 180000, 165000, 145000, 115000],
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
                data: [150000, 150000, 120000, 115000, 145000, 115000, 158000, 123000, 180000, 165000, 115000, 158000],
            },
        ],
        colors: ['#3b5de7', '#eeb902', '#45cb85'],
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
        <ReactApexChart options={options} series={series} type="bar" height={350} className="apex-charts" />
    )
}

export default Charts
