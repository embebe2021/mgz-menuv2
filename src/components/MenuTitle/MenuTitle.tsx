import { ChevronRight } from '@wix/wix-ui-icons-common';
import { classes } from './MenuTitle.st.css';

export type MenuTitleProps = {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    titleProps?: React.AllHTMLAttributes<HTMLSpanElement>;
    children?: React.ReactNode;
    isHasArrow?: boolean;
    isHorizontal?: boolean;
};

const MenuTitle = ({
    prefix,
    suffix,
    titleProps,
    isHasArrow = false,
    isHorizontal = true,
    children,
}: MenuTitleProps): JSX.Element => (
    <>
        {prefix}
        <span {...titleProps} className={classes.textTitle}>
            {children}
        </span>
        {!isHasArrow && suffix}
        {isHasArrow && (
            <ChevronRight
                width="25px"
                height="25px"
                style={isHorizontal ? { transform: 'rotate(90deg)' } : {}}
            />
        )}
    </>
);

export default MenuTitle;
