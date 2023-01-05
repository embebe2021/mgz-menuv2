import { MenuContextProvider } from '../../MenuContextProvider';
import { st, classes } from './Menu.st.css';

type MenuProps = {
    direction?: 'horizontal' | 'vertical';
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const Menu = ({ direction = 'vertical', children, className, style, ...rest }: MenuProps) => {
    return (
        <MenuContextProvider direction={direction}>
            <ul
                className={st(
                    classes.root,
                    {
                        direction: direction,
                    },
                    className
                )}
                style={style}
                {...rest}
            >
                {children ? children : null}
            </ul>
        </MenuContextProvider>
    );
};

export default Menu;
