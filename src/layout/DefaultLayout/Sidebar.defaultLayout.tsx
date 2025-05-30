import { Menu, MenuProps } from 'antd';
import {type FC, useCallback} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number] & {
    link: string;
};
interface PropsI {
    isMobileSidebarOpen: boolean;
}

const SidebarDefaultLayout:FC<PropsI> = ({isMobileSidebarOpen}) => {
    const navigate = useNavigate();
    const {pathname} = useLocation();




    const items: MenuItem[] = [
        {
            key: '1',
            label: 'Dashboard',
            link:'/dashboard',
        },
        {
            key: '2',
            label: 'Data Lab',
            link:'/dashboard/data-lab',
        },
        {
            key: '3',
            label: 'Surveys',
            link:'/dashboard/surveys'
        },
        {
            key: '4',
            label: 'Library',
            link:'/analytics/library'
        },
        {
            key: '5',
            label: 'MarketPlace',
            link:'/analytics/marketPlace'
        },
        {
            key: '5',
            label: 'Activities',
            link:'/analytics/activities'
        },

    ];

    const click = e => {
        const key = e.key;
        const item = items.find(i=>i.key == key);
        if (item) {
            navigate(item.link);
        }
    };

    const getKey = useCallback(():string => {
        const objKey = '1';
        const arr =[]
        items.forEach(item => {
            arr.push({
                key:item.key,
                link:item.link,
            });
            // @ts-ignore
            if (item.children){

                // @ts-ignore
                item.children.forEach(child => {
                    arr.push({
                        key: child.key,
                        link: child.link,
                    });
                })
            }
        })
        const item = arr.find(i=>i.link == pathname);
        return item? item.key.toString() : objKey;
    }, [pathname]);

    return (
        <div  className={`mt-16 fixed ${isMobileSidebarOpen?'block':'hidden'} md:block left-0 top-0 bottom-0 z-10 bg-red-500`} >
            <Menu
                className="h-full"
                onClick={click}
                style={{ width: 256, paddingTop: 20}}
                defaultSelectedKeys={[getKey()]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
    );
};
export default SidebarDefaultLayout;
