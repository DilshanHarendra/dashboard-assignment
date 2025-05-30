import InfoCard from "./InfoCard.tsx";
import UserActivityChart from "./UserActivityChart.tsx";
import DailyActiveUserChart from "./DailyActiveUserChart.tsx";

const Dashboard=()=>{

    return (<div className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-start space-x-4 p-4">

            <div className="w-full md:w-3/5">
                <div className="bg-white p-4 gap-4 shadow grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 rounded-md">
                    <InfoCard/>
                    <InfoCard/>
                    <InfoCard/>
                </div>
                <div className="bg-white p-4 shadow mt-5 rounded-md">
                    <UserActivityChart/>
                </div>
            </div>
            <div className="w-full md:w-2/5">
                <div className="bg-white p-4 shadow  rounded-md">
                    <DailyActiveUserChart/>

                    <div className="mt-12 text-center">
                        <h2 className="font-bold text-lg">By Authentication Method</h2>
                        <div className="grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mt-8">
                            <InfoCard/>
                            <InfoCard/>
                            <InfoCard/>
                        </div>
                    </div>
                </div>
            </div>


    </div>)
}
export default Dashboard