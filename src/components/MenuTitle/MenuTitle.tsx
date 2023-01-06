import { ChevronRight } from '@wix/wix-ui-icons-common';
// import Text from 'mgz-ui2/Text';
import Text from '../../../node_modules/wix-style-react/dist/src/Text';

export type MenuTitleProps = {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    titleProps?: React.AllHTMLAttributes<HTMLSpanElement>;
    isHasArrow?: boolean;
    isHorizontal?: boolean;
    children?: React.ReactNode;
};

const MenuTitle = ({
    prefix,
    suffix,
    titleProps,
    isHasArrow = false,
    isHorizontal = true,
    children,
}: MenuTitleProps): JSX.Element => {
    return (
        <>
            {prefix}
            <Text>
                <span {...titleProps}>{children}</span>
            </Text>
            {!isHasArrow && suffix}
            {isHasArrow && (
                <ChevronRight
                    width="24px"
                    height="24px"
                    style={isHorizontal ? { transform: 'rotate(90deg)' } : {}}
                />
            )}
        </>
    );
};

export default MenuTitle;
