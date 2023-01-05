import React, { ReactElement, PropsWithChildren } from 'react';
import { ControlledMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { st, classes } from './Menu.st.css';

export type MenuProps = {
    children?: React.ReactNode;
    direction?: 'vertical' | 'horizontal' | undefined;
    animate?: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'pulse' | undefined;
    className?: string;
} & React.AllHTMLAttributes<HTMLUListElement>;

export type MenuContext = {
    direction?: MenuProps['direction'];
    animate?: MenuProps['animate'];
    isUnderSubMenu?: boolean;
};

const Menu = ({
    children,
    direction = 'vertical',
    className,
    animate,
    style,
    ...rest
}: MenuProps): JSX.Element => (
    <ControlledMenu
        {...rest}
        menuClassName={st(
            classes.root,
            { isVertical: direction === 'vertical', ...(animate ? { animate } : {}) },
            className
        )}
        menuStyle={style}
        state="open"
        align="start"
        overflow="auto"
        viewScroll="initial"
    >
        {React.Children.map(children, (child) =>
            React.cloneElement(child as ReactElement<PropsWithChildren<MenuContext>>, {
                direction,
                animate,
                isUnderSubMenu: false,
            })
        )}
    </ControlledMenu>
);

export default Menu;
