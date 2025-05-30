import InfoCard from "./InfoCard.tsx";
import { Timeline } from 'antd';

const ActivityLog=()=>{

    const activities=[
        {
            activity: "User name here Permission changed to admin by admin123",
            timestamp: "2 Hours Ago",
        },
        {
            activity: "Username Successfully Logged In",
            timestamp: "2 Hours Ago",
        },
        {
            activity: "User name here Permission changed to admin by admin123",
            timestamp: "3 Hours Ago",
        },
        {
            activity: "Username Successfully Logged In",
            timestamp: "4 Hours Ago",
        },
    ]




    return (<div className="p-4">

        <div className="bg-white p-4 gap-4 shadow grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 rounded-md">
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
        </div>
        <div className="bg-white px-6 py-8 mt-10">
            <h2 className="font-bold text-lg mb-5">Activity Log</h2>
            <Timeline
                items={activities.map(activity=>({
                    children: <>
                        <h2 className="font-semibold">{activity.activity}</h2>
                        <p className="text-gray-500">{activity.timestamp}</p>
                    </>
                }))}
            />
        </div>
    </div>)
}
export default ActivityLog