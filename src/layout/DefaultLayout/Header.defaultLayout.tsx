import {Avatar, Button, Dropdown, Input, type MenuProps} from 'antd';
import {UserOutlined, BellOutlined, SettingOutlined, MenuOutlined} from "@ant-design/icons";
import type {FC} from "react";




const { Search } = Input;
const notificationItems: MenuProps['items'] = Array.from({length: 4},(_,i)=>i).map(item => (
    {
        key: item,
        label: (
            <div className="py-2 px-4">
                {item} Notification
            </div>
        ),
    }
));

const UserItems: MenuProps['items'] = [
    {

        key: '1',
        label: (
            <div className="py-2 px-4 flex items-center space-x-2">
                <UserOutlined />
                <span>Profile</span>
            </div>
        ),
    },
    {
        key: '2',
        label: (
            <div className="py-2 px-4 flex items-center space-x-2">
                <SettingOutlined />
                <span>Settings</span>
            </div>
        ),
    },

];

interface PropsI{
    onClickSidebarTrigger : ()=>void
}

const HeaderDefaultLayout:FC<PropsI> = ({onClickSidebarTrigger})=>{
    return (      <header
        id="page-header"
        className="flex flex-none items-center h-16 bg-white shadow-sm fixed top-0 right-0 left-0 z-50 px-4 md:px-0"
    >
        <div className="md:hidden">
            <Button
                size="small"
                htmlType="button"
                type="default"
                onClick={onClickSidebarTrigger}
            >
                <MenuOutlined />
            </Button>
        </div>
        <h1 className="w-[300px] text-center font-bold text-lg md:text-3xl">Logo</h1>
        <div className="flex justify-between max-w-10xl mx-auto px-4 lg:px-8 w-full">
            <div className="flex items-center">
                <div className="hidden sm:block">
                    <form className="w-96">
                        <Search placeholder="input search text"  style={{width:'100%'}} className="w-full" />

                    </form>
                </div>
            </div>
            <div className="flex items-center space-x-4 md:space-x-8">
                <div>
                    <Dropdown menu={{ items:notificationItems }} placement="bottomLeft">
                        <Button
                            type="dashed"
                            htmlType="button"
                        >
                            <BellOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown menu={{ items:UserItems }} placement="bottomLeft">
                        <Avatar size={40} >
                            DP
                        </Avatar>
                    </Dropdown>
                </div>
            </div>
        </div>
    </header>)
}
export default HeaderDefaultLayout;