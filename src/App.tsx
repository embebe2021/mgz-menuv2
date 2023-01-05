import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import _ from 'lodash';
import { Folder, Rule } from '@wix/wix-ui-icons-common';
import Menu from './components/Menu';
// import MenuItem from './components/MenuItem';
// import SubMenu from './components/SubMenu/SubMenu';
import { ControlledMenu, MenuItem, SubMenu } from '@szhsin/react-menu';

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
    return (
        // <Menu direction="vertical">
        //     <MenuItem icon={<Folder />} label={'Item 1'} onClick={(label) => console.log(label)}>
        //         <SubMenu icon={<Folder />} label="Item 1.1">
        //             <MenuItem label="Item 1.2" onClick={(label) => console.log(label)} />
        //             <MenuItem label="Item 1.3" onClick={(label) => console.log(label)} />
        //             <MenuItem label="Item 1.4" onClick={(label) => console.log(label)} />
        //             <MenuItem label="Item 1.5" onClick={(label) => console.log(label)} />
        //             <MenuItem
        //                 icon={<Folder />}
        //                 label="Item 1.5xx"
        //                 onClick={(label) => console.log(label)}
        //             >
        //                 <SubMenu icon={<Folder />} label="Item 1.5xx - 1">
        //                     <MenuItem
        //                         label="Item 1.6 - 1"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 2"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 3"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 4"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 5"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 6"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                 </SubMenu>
        //                 <MenuItem label="Item 1.5xx - 2" onClick={(label) => console.log(label)} />
        //             </MenuItem>
        //             <SubMenu label="Item 1.6">
        //                 <MenuItem label="Item 1.6 - 1" onClick={(label) => console.log(label)} />
        //                 <MenuItem label="Item 1.6 - 2" onClick={(label) => console.log(label)} />
        //                 <MenuItem label="Item 1.6 - 3" onClick={(label) => console.log(label)} />
        //                 <MenuItem label="Item 1.6 - 4" onClick={(label) => console.log(label)} />
        //                 <MenuItem label="Item 1.6 - 5" onClick={(label) => console.log(label)} />
        //                 <MenuItem label="Item 1.6 - 6" onClick={(label) => console.log(label)} />
        //                 <SubMenu label="Item 1.6 - 7">
        //                     <MenuItem
        //                         label="Item 1.6 - 7 - 1"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 7 - 2"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 7 - 3"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 7 - 4"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 7 - 5"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                     <MenuItem
        //                         label="Item 1.6 - 7 - 6"
        //                         onClick={(label) => console.log(label)}
        //                     />
        //                 </SubMenu>
        //             </SubMenu>
        //         </SubMenu>
        //         <MenuItem label="Item 2.2" onClick={(label) => console.log(label)} />
        //         <MenuItem label="Item 2.3" onClick={(label) => console.log(label)} />
        //         <MenuItem label="Item 2.4" onClick={(label) => console.log(label)} />
        //     </MenuItem>
        //     <MenuItem label="Item 2" onClick={(label) => console.log(label)}>
        //         <SubMenu label="Item 2.1">
        //             <MenuItem label="Item 2.2" onClick={(label) => console.log(label)} />
        //             <MenuItem label="Item 2.3" onClick={(label) => console.log(label)} />
        //             <MenuItem label="Item 2.4" onClick={(label) => console.log(label)} />
        //             <MenuItem label="Item 2.5" onClick={(label) => console.log(label)} />
        //         </SubMenu>
        //     </MenuItem>
        //     <MenuItem label="Item 3" onClick={(label) => console.log(label)} />
        //     <MenuItem label="Item 4" onClick={(label) => console.log(label)} />
        //     <MenuItem label="Item 5" onClick={(label) => console.log(label)} />
        //     <MenuItem label="Item 6" onClick={(label) => console.log(label)} />
        // </Menu>
        <>
            <ControlledMenu state="open">
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                    <SubMenu label="Open">
                        <MenuItem>New File</MenuItem>
                        <MenuItem>Save</MenuItem>
                        <MenuItem>Close Window</MenuItem>
                    </SubMenu>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                    <SubMenu label="Open">
                        <MenuItem>New File</MenuItem>
                        <MenuItem>Save</MenuItem>
                        <MenuItem>Close Window</MenuItem>
                    </SubMenu>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                    <SubMenu label="Open">
                        <MenuItem>New File</MenuItem>
                        <MenuItem>Save</MenuItem>
                        <MenuItem>Close Window</MenuItem>
                    </SubMenu>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                    <SubMenu label="Open">
                        <MenuItem>New File</MenuItem>
                        <MenuItem>Save</MenuItem>
                        <MenuItem>Close Window</MenuItem>
                    </SubMenu>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                    <SubMenu label="Open">
                        <MenuItem>New File</MenuItem>
                        <MenuItem>Save</MenuItem>
                        <MenuItem>Close Window</MenuItem>
                    </SubMenu>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                    <SubMenu label="Open">
                        <MenuItem>New File</MenuItem>
                        <MenuItem>Save</MenuItem>
                        <MenuItem>Close Window</MenuItem>
                    </SubMenu>
                </SubMenu>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                </SubMenu>
            </ControlledMenu>
            {/* <ControlledMenu state="open">
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
                <SubMenu label="Open">
                    <MenuItem>New File</MenuItem>
                    <MenuItem>Save</MenuItem>
                    <MenuItem>Close Window</MenuItem>
                </SubMenu>
            </ControlledMenu> */}
        </>
    );
};

{
    /* <Menu direction="vertical" className={classes.root}>
            <MenuItem label="level1.1 - Co Icon" icon="rule">
                <SubMenu>
                    <MenuItem label="level2.1" />
                    <MenuItem label="level2.2">
                        <SubMenu>
                            <MenuItem label="level3.1">
                                <SubMenu>
                                    <MenuItem label="level4.1" />
                                    <MenuItem label="level4.2" />
                                    <MenuItem label="level4.3">
                                        <SubMenu>
                                            <MenuItem label="level5.1" />
                                            <MenuItem label="level5.2" />
                                            <MenuItem label="level5.3" />
                                            <MenuItem label="level5.4">
                                                <SubMenu>
                                                    <MenuItem label="level6.1" />
                                                    <MenuItem label="level6.2" />
                                                    <MenuItem label="level6.3" />
                                                    <MenuItem label="level6.4">
                                                        <SubMenu>
                                                            <MenuItem label="level6.1" />
                                                            <MenuItem label="level6.2" />
                                                            <MenuItem label="level6.3" />
                                                            <MenuItem label="level6.4" />
                                                            <MenuItem label="level6.5" />
                                                            <MenuItem label="level6.5">
                                                                <SubMenu>
                                                                    <MenuItem label="level6.1" />
                                                                    <MenuItem label="level6.2" />
                                                                    <MenuItem label="level6.3" />
                                                                    <MenuItem label="level6.4" />
                                                                    <MenuItem label="level6.5" />
                                                                    <MenuItem label="level6.5">
                                                                        <SubMenu>
                                                                            <MenuItem label="level6.1" />
                                                                            <MenuItem label="level6.2" />
                                                                            <MenuItem label="level6.3" />
                                                                            <MenuItem label="level6.4" />
                                                                            <MenuItem label="level6.5" />
                                                                            <MenuItem label="level6.5">
                                                                                <SubMenu>
                                                                                    <MenuItem label="level6.1" />
                                                                                    <MenuItem label="level6.2" />
                                                                                    <MenuItem label="level6.3" />
                                                                                    <MenuItem label="level6.4" />
                                                                                    <MenuItem label="level6.5" />
                                                                                    <MenuItem label="level6.5">
                                                                                        <SubMenu>
                                                                                            <MenuItem label="level6.1" />
                                                                                            <MenuItem label="level6.2" />
                                                                                            <MenuItem label="level6.3" />
                                                                                            <MenuItem label="level6.4" />
                                                                                            <MenuItem label="level6.5" />
                                                                                            <MenuItem label="level6.5">
                                                                                                <SubMenu>
                                                                                                    <MenuItem label="level6.1" />
                                                                                                    <MenuItem label="level6.2" />
                                                                                                    <MenuItem label="level6.3" />
                                                                                                    <MenuItem label="level6.4" />
                                                                                                    <MenuItem label="level6.5" />
                                                                                                    <MenuItem label="level6.5"></MenuItem>
                                                                                                </SubMenu>
                                                                                            </MenuItem>
                                                                                        </SubMenu>
                                                                                    </MenuItem>
                                                                                </SubMenu>
                                                                            </MenuItem>
                                                                        </SubMenu>
                                                                    </MenuItem>
                                                                </SubMenu>
                                                            </MenuItem>
                                                        </SubMenu>
                                                    </MenuItem>
                                                    <MenuItem label="level6.5" />
                                                    <MenuItem label="level6.5" />
                                                </SubMenu>
                                            </MenuItem>
                                            <MenuItem label="level5.5" />
                                            <MenuItem label="level5.5" />
                                        </SubMenu>
                                    </MenuItem>
                                    <MenuItem label="level4.4" />
                                    <MenuItem label="level4.5" />
                                    <MenuItem label="level4.5" />
                                </SubMenu>
                            </MenuItem>
                            <MenuItem label="level3.2" />
                            <MenuItem label="level3.3" />
                            <MenuItem label="level3.4" />
                            <MenuItem label="level3.5" />
                            <MenuItem label="level3.5" />
                        </SubMenu>
                    </MenuItem>
                    <MenuItem label="level2.3" />
                    <MenuItem label="level2.4" />
                    <MenuItem label="level2.5" />
                    <MenuItem label="level2.5" />
                </SubMenu>
            </MenuItem>
            <MenuItem label="level1.2">
                <SubMenu>
                    <MenuItem label="level2.1" />
                    <MenuItem label="level2.2" />
                    <MenuItem label="level2.3" />
                    <MenuItem label="level2.4" />
                    <MenuItem label="level2.5" />
                    <MenuItem label="level2.5" />
                </SubMenu>
            </MenuItem>
            <MenuItem label="level1.2">
                <SubMenu>
                    <MenuItem label="level2.1" />
                    <MenuItem label="level2.2" />
                    <MenuItem label="level2.3" />
                    <MenuItem label="level2.4" />
                    <MenuItem label="level2.5" />
                    <MenuItem label="level2.5" />
                </SubMenu>
            </MenuItem>
        </Menu>, */
}
