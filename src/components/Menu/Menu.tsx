import React from 'react';
import { ControlledMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { st, classes } from './Menu.st.css';
import { MenuContextProvider, MenuContextProviderProps } from './MenuContextProvider';

export type MenuProps = {
    children?: React.ReactNode;
    direction?: 'vertical' | 'horizontal' | undefined;
    animate?: MenuContextProviderProps['animate'];
    className?: string;
} & React.AllHTMLAttributes<HTMLUListElement>;

const Menu = ({
    children,
    direction = 'vertical',
    className,
    animate,
    style,
    ...rest
}: MenuProps): JSX.Element => {
    return (
        <MenuContextProvider animate={animate} direction={direction}>
            <ControlledMenu
                {...rest}
                menuClassName={st(
                    classes.root,
                    { isVertical: direction === 'vertical' },
                    className
                )}
                menuStyle={style}
                state="open"
                align="start"
                overflow="auto"
                viewScroll="initial"
            >
                {/* {children} */}
                {React.Children.map(children, (child) =>
                    // React.cloneElement(child as ReactElement<PropsWithChildren<MenuItemProps>>, {
                    //     index,
                    // })
                    React.cloneElement(child, {
                        direction,
                        isSubMenu: false,
                    })
                )}
            </ControlledMenu>
        </MenuContextProvider>
    );
};

export default Menu;
