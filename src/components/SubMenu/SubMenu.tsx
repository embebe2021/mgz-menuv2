import React, { useRef, PropsWithChildren, ReactElement, useState, useEffect } from 'react';
import {
    MenuInstance,
    SubMenu as LibSubMenu,
    SubMenuProps as LibsSubMenuProps,
} from '@szhsin/react-menu';
import type { MenuContext } from '../Menu/Menu';
import type { MenuItemProps } from '../MenuItem/MenuItem';
import MenuTitle from '../MenuTitle';
import { st, classes } from './SubMenu.st.css';

export type SubMenuProps = {
    isUnderSubMenu?: boolean;
    itemPrefix?: React.ReactNode;
    itemSuffix?: React.ReactNode;
    itemClassName?: string;
    itemStyle?: React.CSSProperties;
    itemProps?: React.HTMLAttributes<HTMLElement> &
        Record<string, string | React.MouseEventHandler<HTMLButtonElement>>;
    menuClassName?: string;
    itemTitleProps?: React.AllHTMLAttributes<HTMLSpanElement>;
} & LibsSubMenuProps &
    Omit<MenuContext, 'isUnderSubMenu'>;

type SubMenuChildsProps = (MenuItemProps | SubMenuProps) & MenuContext;

const SubMenu = ({
    children,
    label,
    animate,
    direction,
    isUnderSubMenu = false,
    itemPrefix,
    itemSuffix,
    itemClassName,
    itemStyle,
    itemProps,
    itemTitleProps,
    menuClassName,
    menuStyle,
    offsetX,
    offsetY,
    ...rest
}: SubMenuProps): JSX.Element => {
    const subRef = useRef<MenuInstance>(null);
    const itemRef = useRef<HTMLDivElement>(null);

    const itemRuntimeName = st(classes.representItem, itemClassName);

    const [isOpen, setOpen] = useState<boolean | null>(null);

    useEffect(() => {
        !isOpen && itemRef.current
            ? (itemRef.current.className =
                  'szh-menu__item szh-menu__item--submenu' + ' ' + itemRuntimeName)
            : null;
    }, [isOpen, itemRuntimeName]);

    const handleMouseLeave = (): void => {
        const { closeMenu } = subRef.current as MenuInstance;

        closeMenu();
        setOpen(false);
    };

    const handleMouseEnter = (): void => {
        setOpen(true);
    };

    return (
        <LibSubMenu
            {...rest}
            label={
                <>
                    <MenuTitle
                        prefix={itemPrefix}
                        titleProps={itemTitleProps}
                        isHasArrow={true}
                        isHorizontal={direction === 'horizontal'}
                    >
                        {label}
                    </MenuTitle>
                    {offsetX && (
                        <div
                            style={{
                                position: 'absolute',
                                left: '100%',
                                width: offsetX,
                                height: '100%',
                            }}
                        />
                    )}
                </>
            }
            itemProps={{
                ...itemProps,
                className: st(classes.representItem, itemClassName),
                style: itemStyle,
                onMouseEnter: handleMouseEnter,
                ref: itemRef,
            }}
            menuClassName={st(classes.root, { ...(animate ? { animate } : {}) }, menuClassName)}
            menuStyle={menuStyle}
            offsetX={offsetX}
            offsetY={offsetY}
            direction={isUnderSubMenu || direction === 'vertical' ? 'right' : 'bottom'}
            instanceRef={subRef}
            overflow="auto"
            position="anchor"
            onMouseLeave={handleMouseLeave}
        >
            {React.Children.map(children, (child) =>
                React.cloneElement(child as ReactElement<PropsWithChildren<SubMenuChildsProps>>, {
                    isUnderSubMenu: true,
                    animate,
                })
            )}
        </LibSubMenu>
    );
};

export default SubMenu;
