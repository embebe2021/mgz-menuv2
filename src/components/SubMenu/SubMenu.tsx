import React, { useRef, useState, useEffect } from 'react';
import {
    MenuInstance,
    SubMenu as LibSubMenu,
    SubMenuProps as LibsSubMenuProps,
} from '@szhsin/react-menu';
import MenuTitle from '../MenuTitle';
import { useMenuContext } from '../Menu';
import { SubMenuContextProvider, useSubMenuContext } from './SubMenuContextProvider';
import { st, classes } from './SubMenu.st.css';

export type SubMenuProps = {
    itemPrefix?: React.ReactNode;
    itemSuffix?: React.ReactNode;
    itemClassName?: string;
    itemStyle?: React.CSSProperties;
    itemProps?: React.HTMLAttributes<HTMLElement> &
        Record<string, string | React.MouseEventHandler<HTMLButtonElement>>;
    menuClassName?: string;
    itemTitleProps?: React.AllHTMLAttributes<HTMLSpanElement>;
} & LibsSubMenuProps;

const SubMenu = ({
    children,
    label,
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

    const { direction, animate } = useMenuContext();
    const isUnderSubMenu = useSubMenuContext();

    const [isOpen, setOpen] = useState<boolean | null>(null);
    const runtimeClassName = st(classes.representItem, itemClassName);

    useEffect(() => {
        !isOpen && itemRef.current
            ? (itemRef.current.className = `szh-menu__item szh-menu__item--submenu ${runtimeClassName}`)
            : null;
    }, [isOpen, runtimeClassName]);

    const handleMouseLeave = (): void => {
        const { closeMenu } = subRef.current as MenuInstance;

        closeMenu();
        setOpen(false);
    };

    const handleMouseEnter = (): void => setOpen(true);

    return (
        <SubMenuContextProvider isUnderSubMenu>
            <LibSubMenu
                {...rest}
                label={
                    <>
                        <MenuTitle
                            prefix={itemPrefix}
                            titleProps={itemTitleProps}
                            isHasArrow={true}
                            isHorizontal={!isUnderSubMenu && direction === 'horizontal'}
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
                direction={
                    !isUnderSubMenu ? (direction === 'vertical' ? 'right' : 'bottom') : undefined
                }
                instanceRef={subRef}
                overflow="auto"
                position="anchor"
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </LibSubMenu>
        </SubMenuContextProvider>
    );
};

export default SubMenu;
