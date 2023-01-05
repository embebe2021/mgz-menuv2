// import ChevronRight from 'mgz-icons/ChevronRight';
import { ChevronRight } from '@wix/wix-ui-icons-common';
// import Text, { TextProps } from 'mgz-ui/Text';
// import { BoxProps } from 'mgz-ui2/Box/types';
// import Box from 'mgz-ui/Box';
import { classes } from './MenuTitle.st.css';

export type MenuTitleProps = {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    label: string;
    isHasArrow?: boolean;
    isHorizontal?: boolean;
    // textSkin?: TextProps;
};
// } & BoxProps;

const MenuTitle = ({
    prefix,
    suffix,
    label,
    isHasArrow = false,
    isHorizontal = true,
    // textSkin,
    ...rest
}: MenuTitleProps): JSX.Element => (
    <>
        {prefix}
        <div {...rest} gap="7px" flexGrow={1} className={classes.title}>
            <span ellipsis={true}>{label}</span>
            {!isHasArrow && suffix}
        </div>
        {isHasArrow && <ChevronRight style={isHorizontal ? { transform: 'rotate(90deg)' } : {}} />}
    </>
);

export default MenuTitle;
