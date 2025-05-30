import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const UserActivityChart=()=>{
    const options: Highcharts.Options = {
        title: {
            text: 'User Activity',
        },
        xAxis: {
            categories: ['1 Sep', '2 Sep', '3 Sep', '4 Sep', '5 Sep', '6 Sep'],
        },
        yAxis: {
            title: {
                text: 'Activities',
            },
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        series: [
            {
                name: 'User 1',
                type: 'line',
                data: [150, 200, 170, 220, 180, 250],
            },
            {
                name: 'User 2',
                type: 'line',
                data: [250, 300, 80, 190, 200, 60],
            },
        ],
    };

    return (<>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </>)
}
export default UserActivityChart