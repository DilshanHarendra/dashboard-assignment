import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const DailyActiveUserChart=()=>{
    const options = {
        chart: {
            plotBackgroundColor: undefined,
            plotBorderWidth: undefined,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Daily Active User',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        accessibility: {
            point: {
                valueSuffix: '%',
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                },
                showInLegend: true
            },
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [
                {name: 'Staff', y: 151},
                {name: 'Students', y: 200},
                {name: 'Teachers', y: 180},
                {name: 'Others', y: 151},
            ]
        }]
    };

    return (<>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </>)
}
export default DailyActiveUserChart