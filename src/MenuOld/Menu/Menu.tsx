import React, { PropsWithChildren, ReactElement } from 'react';
import { MenuItemProps } from '../MenuItem';
import { st, classes } from './Menu.st.css';
import { MenuContextProvider, MenuContextProviderProps } from './MenuContextProvider';

export type MenuProps = React.AllHTMLAttributes<HTMLUListElement> & {
    direction?: MenuContextProviderProps['direction'];
    animate?: MenuContextProviderProps['animate'];
    className?: string;
};

const Menu = ({ direction = 'vertical', animate, children, className, ...rest }: MenuProps) => (
    <MenuContextProvider direction={direction} animate={animate}>
        {console.log('aaaaaaaaaaaaaa')}
        <ul
            className={st(
                classes.root,
                {
                    direction,
                    ...(animate ? { animate } : {})
                },
                className
            )}
            {...rest}
        >
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child as ReactElement<PropsWithChildren<MenuItemProps>>, { index })
            )}
        </ul>
    </MenuContextProvider>
);

export default Menu;
