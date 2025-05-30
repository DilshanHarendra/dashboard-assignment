import Sidebar from "./Sidebar.defaultLayout.tsx";
import Header from "./Header.defaultLayout.tsx";
import Dashboard from "../../Dashboard.tsx";
import {useLayoutEffect, useState} from "react";
import ActivityLog from "../../ActivityLog.tsx";


const DefaultDefaultLayout = ()=>{
    const [isOpenSideBar, setIsOpenSidebar] = useState(false);

    useLayoutEffect(() => {
        const updateWidth = () => {
            setIsOpenSidebar(false);
        };

        window.addEventListener('resize', updateWidth);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);



    return (     <>

        <div className="h-full bg-gray-100">
            <Header onClickSidebarTrigger={() => setIsOpenSidebar(!isOpenSideBar)} />
            <Sidebar isMobileSidebarOpen={isOpenSideBar} />

            <main
                id="page-content"
                className={`"container mx-auto pt-16 md:pl-[256px] "`}
            >
                <Dashboard/>
                <ActivityLog/>
            </main>
        </div>
    </>)
}
export default DefaultDefaultLayout;