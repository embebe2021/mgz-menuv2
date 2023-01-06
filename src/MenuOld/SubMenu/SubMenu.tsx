import { SubMenu as LibSubMenu } from '@szhsin/react-menu';
import { TextProps } from 'mgz-ui2/Text';
import MenuTitle from '../MenuTitle';
import { SubMenuContextProvider } from './SubMenuContextProvider';
import { st, classes } from './SubMenu.st.css';

export type SubMenuProps = {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    label: string;
    representItemClassName?: string;
    representItemProps?: React.AllHTMLAttributes<HTMLDivElement>;
    representItemTextSkin?: TextProps;
    menuClassName?: string;
    menuStyle?: React.CSSProperties;
    offsetX?: number;
    offsetY?: number;
    children?: React.ReactNode;
};

const SubMenu = ({
    prefix,
    label,
    representItemClassName,
    representItemProps,
    representItemTextSkin,
    menuClassName,
    menuStyle,
    offsetX,
    offsetY,
    children,
    ...rest
}: SubMenuProps): JSX.Element => (
    <SubMenuContextProvider isSubMenu>
        <LibSubMenu
            {...rest}
            label={
                <>
                    <MenuTitle
                        prefix={prefix}
                        label={label}
                        isHasArrow={true}
                        isHorizontal={false}
                        textSkin={representItemTextSkin}
                    />
                    {offsetX && (
                        <div
                            style={{
                                position: 'absolute',
                                left: '100%',
                                width: offsetX,
                                height: '100%'
                            }}
                        />
                    )}
                </>
            }
            overflow="auto"
            menuClassName={st(classes.libSubMenu, menuClassName)}
            menuStyle={menuStyle}
            offsetX={offsetX}
            offsetY={offsetY}
            itemProps={{
                ...representItemProps,
                className: st(classes.representItem, representItemClassName)
            }}
        >
            {children}
        </LibSubMenu>
    </SubMenuContextProvider>
);

export default SubMenu;
