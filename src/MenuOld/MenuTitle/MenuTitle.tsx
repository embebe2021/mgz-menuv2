import ChevronRight from 'mgz-icons/ChevronRight';
import { TextProps } from 'mgz-ui/Text';
import Box from 'mgz-ui2/Box';
import { BoxProps } from 'mgz-ui2/Box/types';
import Text from 'mgz-ui2/Text';
import { classes } from './MenuTitle.st.css';

export type MenuTitleProps = {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    label: string;
    isHasArrow?: boolean;
    isHorizontal?: boolean;
    textSkin?: TextProps;
} & BoxProps;

const MenuTitle = ({
    prefix,
    suffix,
    label,
    isHasArrow = false,
    isHorizontal = true,
    textSkin,
    ...rest
}: MenuTitleProps): JSX.Element => (
    <>
        {prefix}
        <Box {...rest} gap="7px" flexGrow={1} className={classes.title}>
            <Text {...textSkin} ellipsis={true}>
                {label}
            </Text>
            {!isHasArrow && suffix}
        </Box>
        {isHasArrow && <ChevronRight style={isHorizontal ? { transform: 'rotate(90deg)' } : {}} />}
    </>
);

export default MenuTitle;
