import { MenuItem as LibMenuItem, MenuItemProps as LibMenuItemProps } from '@szhsin/react-menu';
import MenuTitle from '../MenuTitle';
import { useMenuContext } from '../Menu';
import { st, classes } from './MenuItem.st.css';

export type MenuItemProps = {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    titleProps?: React.AllHTMLAttributes<HTMLSpanElement> & Record<string, any>;
    className?: string;
} & Omit<LibMenuItemProps, 'prefix'>;

const MenuItem = ({
    prefix,
    suffix,
    titleProps,
    style,
    className,
    children,
    ...rest
}: MenuItemProps): JSX.Element => {
    const { direction } = useMenuContext();

    return (
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
};

export default MenuItem;
