import React, { useRef } from 'react';
import _ from 'lodash';
import { ControlledMenu, MenuItem as LibMenuItem } from '@szhsin/react-menu';
import { TextProps } from 'mgz-ui2/Text';
import SubMenu, { useSubMenuContext } from '../SubMenu';
import { useMenuContext } from '../Menu';
import MenuTitle from '../MenuTitle';
import { st, classes } from './MenuItem.st.css';

export type MenuItemProps = {
    label: string;
    index?: number;
    style?: React.CSSProperties;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    textSkin?: TextProps;
    subMenuClassName?: string;
    subMenuStyle?: React.CSSProperties;
    subMenuProps?: React.AllHTMLAttributes<HTMLDivElement | HTMLLIElement>;
    subMenuOffsetX?: number;
    subMenuOffsetY?: number;
};

const MenuItem = ({
    label,
    index,
    prefix,
    suffix,
    children,
    className,
    textSkin,
    subMenuStyle,
    subMenuClassName,
    subMenuProps,
    subMenuOffsetX,
    subMenuOffsetY,
    ...rest
}: MenuItemProps): JSX.Element => {
    const itemRef = useRef<HTMLDivElement>(null);
    const { direction, selectedId, setSelectedId } = useMenuContext();
    const isSubMenu = useSubMenuContext();
    const isOpen = selectedId === index;

    const handleOpenChild = (): void => {
        _.isFunction(setSelectedId) && setSelectedId(index);
    };

    const handlePointerLeave = (): void => {
        _.isFunction(setSelectedId) && setSelectedId('');
    };

    return (
        <>
            {!isSubMenu && (
                <li className={st(classes.root)}>
                    {children ? (
                        <>
                            <div
                                {...rest}
                                ref={itemRef}
                                className={st(classes.item, isOpen ? 'szh-menu__item--hover' : '', className)}
                                onPointerEnter={handleOpenChild}
                                // onMouseLeave={handlePointerLeave}
                                // onClick={handleClick}
                            >
                                <MenuTitle
                                    prefix={prefix}
                                    label={label}
                                    suffix={suffix}
                                    isHasArrow={true}
                                    isHorizontal={direction === 'horizontal'}
                                    textSkin={textSkin}
                                />
                            </div>
                            <ControlledMenu
                                state={isOpen ? 'open' : 'closed'}
                                anchorRef={itemRef}
                                // onMouseLeave={handlePointerLeave}
                                onClose={handlePointerLeave}
                                menuClassName={st(classes.controlledMenu, subMenuClassName)}
                                menuStyle={subMenuStyle}
                                offsetX={subMenuOffsetX}
                                offsetY={subMenuOffsetY}
                                containerProps={subMenuProps}
                                align="start"
                                direction={direction === 'vertical' ? 'right' : 'bottom'}
                                overflow="auto"
                                viewScroll="initial"
                            >
                                {children}
                            </ControlledMenu>
                        </>
                    ) : (
                        <div
                            {...rest}
                            className={st(classes.item, isOpen ? 'szh-menu__item--hover' : '', className)}
                            // onPointerEnter={handleOpenChild}
                        >
                            <MenuTitle
                                prefix={prefix}
                                label={label}
                                suffix={suffix}
                                isHasArrow={false}
                                isHorizontal={direction === 'horizontal'}
                                textSkin={textSkin}
                            />
                        </div>
                    )}
                </li>
            )}

            {isSubMenu &&
                (children ? (
                    <SubMenu
                        {...rest}
                        {...subMenuProps}
                        prefix={prefix}
                        label={label}
                        menuStyle={subMenuStyle}
                        offsetX={subMenuOffsetX}
                        offsetY={subMenuOffsetY}
                        representItemClassName={st(classes.item, className)}
                    >
                        {children}
                    </SubMenu>
                ) : (
                    <LibMenuItem {...rest} className={st(classes.item, className)}>
                        <MenuTitle
                            prefix={prefix}
                            label={label}
                            suffix={suffix}
                            isHasArrow={false}
                            isHorizontal={direction === 'horizontal'}
                            textSkin={textSkin}
                        />
                    </LibMenuItem>
                ))}
        </>
    );
};

export default MenuItem;
