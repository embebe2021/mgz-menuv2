// import React from 'react';
import { MenuItem as LibMenuItem, SubMenu as LibSubMenu } from '@szhsin/react-menu';
import _ from 'lodash';
import type React from 'react';
import { Text } from 'wix-style-react';
import { st, classes } from './SubMenu.st.css';
import { SubMenuContext1Provider } from './SubMenuContextProvider';

type SubMenuProps = {
    icon?: React.ReactNode;
    label: string;
    menuClassName?: string;
    menuStyle?: React.CSSProperties;
    offsetX?: number;
    offsetY?: number;
    children?: React.ReactNode;
};

const SubMenu = ({
    icon,
    label,
    menuClassName,
    menuStyle,
    offsetX,
    offsetY,
    children,
    ...rest
}: SubMenuProps): JSX.Element => {
    return (
        <SubMenuContext1Provider isSubMenu>
            <LibSubMenu
                label={
                    <div {...rest} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        {icon}
                        <Text>{label}</Text>
                    </div>
                }
                overflow="auto"
                menuClassName={st(classes.libSubMenu, menuClassName && '')}
                menuStyle={menuStyle}
                offsetX={offsetX}
                offsetY={offsetY}
                {...rest}
            >
                {children}
            </LibSubMenu>
        </SubMenuContext1Provider>
    );
};

export default SubMenu;
