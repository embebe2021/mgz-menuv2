import React, { useRef, useState } from 'react';
import _ from 'lodash';
import { Text } from 'wix-style-react';
import { ControlledMenu } from '@szhsin/react-menu';
import { MenuItem as LibMenuItem } from '@szhsin/react-menu';
import SubMenu from '../SubMenu/SubMenu';
import { useMenuContext } from '../../MenuContextProvider';
import { useSubMenuContext } from '../SubMenu/SubMenuContextProvider';
import { st, classes } from './MenuItem.st.css';

type MenuItemProps = {
    label: string;
    className?: string;
    style?: React.CSSProperties;
    dataHook?: string;
    subMenuOffsetX?: number;
    subMenuOffsetY?: number;
    onClick?: (val: object) => void;
    children?: React.ReactNode;
    icon?: React.ReactNode;
};

const MenuItem = ({
    label,
    className,
    style,
    dataHook,
    subMenuOffsetX,
    subMenuOffsetY,
    onClick,
    children,
    icon,
    ...rest
}: MenuItemProps): JSX.Element => {
    const itemRef = useRef<HTMLDivElement>(null);
    const { direction } = useMenuContext();
    const isSubMenu = useSubMenuContext();

    const [isOpen, setOpen] = useState<boolean>(false);

    const handleOpenChild = (): void => {
        setOpen(true);
    };

    const handleClick = (): void => {
        _.isFunction(onClick) && onClick(label);
    };

    const offsetX = direction === 'horizontal' ? -16 : 7;
    const offsetY = direction === 'horizontal' ? 8 : -7;

    return (
        <React.Fragment>
            {!isSubMenu && (
                <li className={st(classes.root, className)} style={style} {...rest}>
                    {children ? (
                        <React.Fragment>
                            <div
                                ref={itemRef}
                                className={st(classes.content, {
                                    hasChild: true,
                                    isHorizontal: direction === 'horizontal',
                                })}
                                onPointerEnter={handleOpenChild}
                                onClick={handleClick}
                            >
                                {icon}
                                <Text>{label}</Text>
                            </div>
                            <ControlledMenu
                                state={isOpen ? 'open' : 'closed'}
                                anchorRef={itemRef}
                                onPointerLeave={() => setOpen(false)}
                                onClose={() => setOpen(false)}
                                menuClassName={className}
                                menuStyle={style}
                                offsetX={offsetX}
                                offsetY={offsetY}
                                align="start"
                                direction={direction === 'vertical' ? 'right' : 'bottom'}
                                viewScroll="close"
                                overflow="auto"
                            >
                                {children}
                            </ControlledMenu>
                        </React.Fragment>
                    ) : (
                        <div
                            className={st(classes.content, {
                                hasChild: false,
                                isHorizontal: direction === 'horizontal',
                            })}
                            onClick={handleClick}
                            {...rest}
                        >
                            {icon}
                            <Text>{label}</Text>
                        </div>
                    )}
                </li>
            )}

            {isSubMenu &&
                (children ? (
                    <React.Fragment>
                        <SubMenu icon={icon} label={label} {...rest}>
                            {children}
                        </SubMenu>
                    </React.Fragment>
                ) : (
                    <LibMenuItem
                        className={st(classes.libMenuItem, className)}
                        onClick={handleClick}
                        {...rest}
                    >
                        {icon}
                        <Text>{label}</Text>
                    </LibMenuItem>
                ))}
        </React.Fragment>
    );
};

export default MenuItem;
