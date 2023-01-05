import { MenuItem as LibMenuItem, MenuItemProps as LibMenuItemProps } from '@szhsin/react-menu';
import type { MenuContext } from '../Menu';
import MenuTitle from '../MenuTitle';
import { st, classes } from './MenuItem.st.css';

export type MenuItemProps = {
    isUnderSubMenu?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    titleProps?: React.AllHTMLAttributes<HTMLSpanElement>;
    className?: string;
} & LibMenuItemProps &
    Omit<MenuContext, 'isUnderSubMenu'>;

const MenuItem = ({
    prefix,
    suffix,
    titleProps,
    style,
    className,
    direction,
    children,
    isUnderSubMenu,
    ...rest
}: MenuItemProps): JSX.Element => (
    <LibMenuItem {...rest} style={style} className={st(classes.root, className)}>
        <MenuTitle
            prefix={prefix}
            suffix={suffix}
            titleProps={titleProps}
            isHasArrow={false}
            isHorizontal={direction === 'horizontal'}
        >
            {children}
        </MenuTitle>
    </LibMenuItem>
);

export default MenuItem;
