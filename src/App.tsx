import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import _ from 'lodash';
import { Folder, Rule } from '@wix/wix-ui-icons-common';
import { ControlledMenu, MenuItem } from '@szhsin/react-menu';
import Menu from './components/Menu/Menu';
import SubMenu from './components/SubMenu/SubMenu';

export type MenuItem = {
    mainItem: string[];
};

export type MenuItemDataType = Record<
    string,
    {
        id: string;
        label: string;
        icon?: string;
        parent?: string;
        childIds?: string[];
    }
>;

export type MainMenuType = MenuItem & MenuItemDataType;

export const App = (): JSX.Element => {
    // const directionx = 'vertical';
    const directionx = 'horizontal';
    return (
        <Menu className="gggg" data-hook="menu" direction={directionx}>
            <MenuItem>adasdas</MenuItem>
            <MenuItem>adasdas</MenuItem>
            <MenuItem>adasdas</MenuItem>
            <MenuItem>adasdas</MenuItem>
            <MenuItem>adasdas</MenuItem>
            <MenuItem>adasdas</MenuItem>
            <SubMenu
                label="hello"
                itemClassName="zzzzzzzzzzzz"
                itemProps={{
                    'data-hook': 'aaaaaaaaaaaaaa',
                }}
                itemStyle={
                    {
                        // backgroundColor: 'red',
                    }
                }
            >
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <SubMenu
                    label="hello"
                    itemClassName="zzzzzzzzzzzz"
                    itemProps={{
                        'data-hook': 'aaaaaaaaaaaaaa',
                    }}
                    itemStyle={
                        {
                            // backgroundColor: 'red',
                        }
                    }
                >
                    <MenuItem>adasdas</MenuItem>
                    <MenuItem>adasdas</MenuItem>
                    <SubMenu
                        label="hello"
                        itemClassName="zzzzzzzzzzzz"
                        itemProps={{
                            'data-hook': 'aaaaaaaaaaaaaa',
                        }}
                        itemStyle={
                            {
                                // backgroundColor: 'red',
                            }
                        }
                    >
                        <MenuItem>adasdas</MenuItem>
                        <MenuItem>adasdas</MenuItem>
                        <MenuItem>adasdas</MenuItem>
                        <MenuItem>adasdas</MenuItem>
                        <MenuItem>adasdas</MenuItem>
                        <SubMenu
                            label="hello"
                            itemClassName="zzzzzzzzzzzz"
                            itemProps={{
                                'data-hook': 'aaaaaaaaaaaaaa',
                            }}
                            itemStyle={
                                {
                                    // backgroundColor: 'red',
                                }
                            }
                        >
                            <MenuItem>adasdas</MenuItem>
                            <MenuItem>adasdas</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
                <MenuItem>adasdas</MenuItem>
            </SubMenu>
        </Menu>
        // <div>asdfasf</div>
        // <>
        //     <ControlledMenu state="open">
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <MenuItem>Close Window</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //             <SubMenu label="Open">
        //                 <MenuItem>New File</MenuItem>
        //                 <MenuItem>Save</MenuItem>
        //                 <MenuItem>Close Window</MenuItem>
        //             </SubMenu>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <MenuItem>Close Window</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //             <SubMenu label="Open">
        //                 <MenuItem>New File</MenuItem>
        //                 <MenuItem>Save</MenuItem>
        //                 <MenuItem>Close Window</MenuItem>
        //             </SubMenu>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <MenuItem>Close Window</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //             <SubMenu label="Open">
        //                 <MenuItem>New File</MenuItem>
        //                 <MenuItem>Save</MenuItem>
        //                 <MenuItem>Close Window</MenuItem>
        //             </SubMenu>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <MenuItem>Close Window</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //             <SubMenu label="Open">
        //                 <MenuItem>New File</MenuItem>
        //                 <MenuItem>Save</MenuItem>
        //                 <MenuItem>Close Window</MenuItem>
        //             </SubMenu>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <MenuItem>Close Window</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //             <SubMenu label="Open">
        //                 <MenuItem>New File</MenuItem>
        //                 <MenuItem>Save</MenuItem>
        //                 <MenuItem>Close Window</MenuItem>
        //             </SubMenu>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <MenuItem>Close Window</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //             <SubMenu label="Open">
        //                 <MenuItem>New File</MenuItem>
        //                 <MenuItem>Save</MenuItem>
        //                 <MenuItem>Close Window</MenuItem>
        //             </SubMenu>
        //         </SubMenu>
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //         </SubMenu>
        //     </ControlledMenu>
        //     {/* <ControlledMenu state="open">
        //         <MenuItem>New File</MenuItem>
        //         <MenuItem>Save</MenuItem>
        //         <MenuItem>Close Window</MenuItem>
        //         <SubMenu label="Open">
        //             <MenuItem>New File</MenuItem>
        //             <MenuItem>Save</MenuItem>
        //             <MenuItem>Close Window</MenuItem>
        //         </SubMenu>
        //     </ControlledMenu> */}
        // </>
    );
};
