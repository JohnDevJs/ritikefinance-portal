import React from "react"
import ReactApexChart from "react-apexcharts"

const ChartAmount = () => {

    const series = [
        {
            name: "Rental amount",
            data: [115000, 150000, 120000, 115000, 145000, 115000, 158000, 123000, 180000, 165000, 145000, 115000],
        },
        {
            name: "Bookings Income",
            data: [65000, 50000, 45000, 35000, 33000, 65000, 52000, 25000, 56000, 41000, 33000, 65000],
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
                name: "Rental amount",
                data: [150000, 150000, 120000, 115000, 145000, 115000, 158000, 123000, 180000, 165000, 115000, 158000],
            },
            {
                name: "Bookings Income",
                data: [45000, 50000, 45000, 35000, 33000, 65000, 52000, 25000, 56000, 41000, 56000, 41000],
            },
        ],
        colors: ['#303d83', '#eeb902'],
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
        <Card>
            <ReactApexChart options={options} series={series} type="bar" height={350} className="apex-charts" />
        </Card>
    )
}

export default ChartAmount
