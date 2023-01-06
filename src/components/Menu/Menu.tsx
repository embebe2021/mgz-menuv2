import { ControlledMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { MenuContextProvider } from './MenuContextProvider';
import { st, classes } from './Menu.st.css';

export type MenuProps = {
    children?: React.ReactNode;
    direction?: 'vertical' | 'horizontal' | undefined;
    animate?: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'pulse' | undefined;
    containerProps?: Omit<React.AllHTMLAttributes<HTMLDivElement>, 'className'> &
        Record<string, any>;
    className?: string;
} & React.AllHTMLAttributes<HTMLUListElement>;

const Menu = ({
    children,
    direction = 'vertical',
    className,
    animate,
    containerProps,
    style,
    ...rest
}: MenuProps): JSX.Element => (
    <MenuContextProvider animate={animate} direction={direction}>
        <ControlledMenu
            {...rest}
            containerProps={{
                style: {
                    position: 'relative',
                },
                ...containerProps,
            }}
            menuClassName={st(
                classes.root,
                { isVertical: direction === 'vertical', ...(animate ? { animate } : {}) },
                className
            )}
            menuStyle={{
                ...{ width: direction === 'horizontal' ? '100%' : 'fit-content' },
                ...style,
            }}
            state="open"
            align="start"
            direction="left"
            overflow="auto"
            viewScroll="initial"
        >
            {children}
        </ControlledMenu>
    </MenuContextProvider>
);

export default Menu;
