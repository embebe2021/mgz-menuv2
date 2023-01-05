import { SubMenu as LibSubMenu } from '@szhsin/react-menu';
import React, { useRef } from 'react';
import type { MenuProps } from '../Menu/Menu';
import MenuTitle from '../MenuTitle';
import { st, classes } from './SubMenu.st.css';

type SubMenuProps = {
    children: React.ReactNode;
    label: string;
    direction?: MenuProps['direction'];
    isSubMenu?: boolean;
    itemPrefix?: React.ReactNode;
    itemSuffix?: React.ReactNode;
    itemClassName?: string;
    itemStyle?: React.CSSProperties;
    itemProps?: React.AllHTMLAttributes<HTMLDivElement> & Record<string, string>;
    // representItemTextSkin?: TextProps;
    menuClassName?: string;
    menuStyle?: React.CSSProperties;
    offsetX?: number;
    offsetY?: number;
};

const SubMenu = ({
    children,
    label,
    direction,
    isSubMenu = false,
    itemPrefix,
    itemSuffix,
    itemClassName,
    itemStyle,
    itemProps,
    menuClassName,
    menuStyle,
    offsetX,
    offsetY,
    ...rest
}: SubMenuProps): JSX.Element => {
    const subRef = useRef(null);

    const handleMouseLeave = (): void => {
        const { closeMenu } = subRef.current;
        closeMenu();
    };
    return (
        <LibSubMenu
            {...rest}
            overflow="auto"
            // label={label}
            label={
                <>
                    <MenuTitle
                        prefix={itemPrefix}
                        label={label}
                        isHasArrow={true}
                        isHorizontal={direction === 'horizontal'}
                        // textSkin={representItemTextSkin}
                    />
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
            menuClassName={st(classes.root, menuClassName)}
            menuStyle={menuStyle}
            offsetX={offsetX}
            offsetY={offsetY}
            direction={isSubMenu || direction === 'vertical' ? 'right' : 'bottom'}
            itemProps={{
                ...itemProps,
                className: st(classes.representItem, itemClassName),
                style: itemStyle,
            }}
            instanceRef={subRef}
            // onMouseLeave={handleMouseLeave}
            position="anchor"
        >
            {/* {children} */}
            {React.Children.map(children, (child) =>
                // React.cloneElement(child as ReactElement<PropsWithChildren<MenuItemProps>>, {
                //     index,
                // })
                React.cloneElement(child, {
                    isSubMenu: true,
                })
            )}
        </LibSubMenu>
    );
};

export default SubMenu;
