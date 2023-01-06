import { header, tabs, tab, demo } from 'mgz-storybook/Sections';
import { Folder, Home, RelatedApps, Shipping, Statistics } from 'mgz-icons';
import MenuItem from 'mgz-ui2/Menu/MenuItem';
import SubMenu from 'mgz-ui2/Menu/SubMenu';
import { TextProps } from 'mgz-ui2/Text';
import Box from '../../../Box';
import Heading from '../../../Heading';
import { Menu } from '../..';
import { CATEGORY } from '../../../../stories/storiesHierarchy';
import { classes } from './Features.story.st.css';

const Features = ({ type }) => {
    return (
        <Menu direction={type}>
            <MenuItem prefix={<Folder />} label={'Item 1'} />
            <MenuItem label="Item 2" />
            <MenuItem prefix={<Statistics />} label="Item 3">
                <SubMenu prefix={<Folder />} label="Item 3.1">
                    <MenuItem prefix={<Folder />} label={'Item 3.1 - 1'} />
                    <MenuItem label="Item 3.1 - 2" />
                    <MenuItem label="Item 3.1 - 3" />
                    <MenuItem prefix={<Shipping />} label="Item 3.1 - 4" />
                    <MenuItem prefix={<Home />} label="Item 3.1 - 5" />
                    <MenuItem prefix={<RelatedApps />} label="Item 3.1 - 6" />
                    <MenuItem prefix={<Statistics />} label="Item 3.1 - 7" />
                </SubMenu>
            </MenuItem>
            <MenuItem label="Item 4" />
            <MenuItem label="Item 5" />
            <MenuItem prefix={<Shipping />} label="Item 6" />
            <MenuItem prefix={<Statistics />} label="Item 7">
                <SubMenu prefix={<Folder />} label="Item 7.1">
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 1'} />
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 2'} />
                    <MenuItem label="Item 7.1 - 3" />
                    <MenuItem label="Item 7.1 - 4" />
                    <MenuItem prefix={<Shipping />} label="Item 7.1 - 5" />
                    <MenuItem prefix={<Home />} label="Item 7.1 - 6" />
                    <MenuItem prefix={<RelatedApps />} label="Item 7.1 - 7" />
                    <MenuItem prefix={<Statistics />} label="Item 7.1 - 8" />
                </SubMenu>
            </MenuItem>
            <MenuItem prefix={<Shipping />} label="Item 8" />
            <MenuItem prefix={<Home />} label="Item 9" />
            <MenuItem prefix={<RelatedApps />} label="Item 10" />
            <MenuItem prefix={<Statistics />} label="Item 11">
                <SubMenu prefix={<Folder />} label="Item 11.1">
                    <MenuItem prefix={<Folder />} label="Item 11.1 - 1" />
                    <MenuItem label="Item 11.1 - 2" />
                    <MenuItem label="Item 11.1 - 3" />
                    <MenuItem prefix={<Shipping />} label="Item 11.1 - 4" />
                    <MenuItem prefix={<Home />} label="Item 11.1 - 5" />
                    <MenuItem prefix={<RelatedApps />} label="Item 11.1 - 6" />
                    <MenuItem prefix={<Statistics />} label="Item 11.1 - 7" />
                </SubMenu>
                <MenuItem prefix={<Shipping />} label="Item 11.2" />
            </MenuItem>
        </Menu>
    );
};

const Nested = () => {
    return (
        <Menu direction="vertical">
            <MenuItem prefix={<Folder />} label={'Item Level 1'} />
            <MenuItem label="Item Level 1" />
            <MenuItem prefix={<Statistics />} label="Item Level 1">
                <SubMenu prefix={<Folder />} label="Item Level 2">
                    <MenuItem prefix={<Home />} label="Item Level 3" />
                    <MenuItem prefix={<RelatedApps />} label="Item Level 3">
                        <SubMenu prefix={<Folder />} label="Item Level 4">
                            <MenuItem prefix={<Home />} label="Item Level 4" />
                            <MenuItem prefix={<RelatedApps />} label="Item Level 4">
                                <SubMenu prefix={<Folder />} label="Item Level 5">
                                    <MenuItem prefix={<Home />} label="Item Level 5" />
                                    <MenuItem prefix={<RelatedApps />} label="Item Level 5">
                                        <SubMenu prefix={<Folder />} label="Item Level 6">
                                            <MenuItem prefix={<Home />} label="Item Level 6" />
                                            <MenuItem prefix={<Statistics />} label="Item Level 6">
                                                <SubMenu prefix={<Folder />} label="Item Level 7">
                                                    <MenuItem prefix={<Home />} label="Item Level 7" />
                                                    <MenuItem
                                                        prefix={<Statistics />}
                                                        label="Item Level 7"
                                                    ></MenuItem>
                                                </SubMenu>
                                            </MenuItem>
                                        </SubMenu>
                                    </MenuItem>
                                    <MenuItem prefix={<Statistics />} label="Item Level 5" />
                                </SubMenu>
                            </MenuItem>
                            <MenuItem prefix={<Statistics />} label="Item Level 4" />
                        </SubMenu>
                    </MenuItem>
                    <MenuItem prefix={<Statistics />} label="Item Level 3" />
                </SubMenu>
            </MenuItem>
        </Menu>
    );
};

const CustomStyle = ({
    menuClassName,
    animate,
    menuStyle,
    menuItemStyle,
    menuItemTextSkin,
    subMenuStyle,
    replace
}: {
    menuClassName?: string;
    animate?: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'pulse';
    menuStyle?: React.CSSProperties;
    menuItemStyle?: React.CSSProperties;
    menuItemTextSkin?: TextProps;
    subMenuStyle?: React.CSSProperties;
    replace?: boolean;
}) => {
    return (
        <Menu direction="vertical" animate={animate} className={menuClassName} style={menuStyle}>
            <MenuItem
                label="Item 1.2"
                style={menuItemStyle}
                textSkin={menuItemTextSkin}
                className={replace ? classes.customMenuItem1 : ''}
            />
            <MenuItem
                prefix={<Statistics />}
                label="Item 1.3"
                subMenuStyle={subMenuStyle}
                style={menuItemStyle}
                textSkin={menuItemTextSkin}
                className={replace ? classes.customMenuItem2 : ''}
            >
                <SubMenu
                    prefix={<Folder />}
                    label={'Item 1.3.1'}
                    representItemProps={{ style: menuItemStyle }}
                    representItemTextSkin={menuItemTextSkin}
                    menuStyle={subMenuStyle}
                    menuClassName={classes.customSubMenu1}
                    representItemClassName={replace ? classes.customMenuItem3 : ''}
                >
                    <MenuItem
                        prefix={<Home />}
                        label="Item 1.3.2"
                        style={menuItemStyle}
                        textSkin={menuItemTextSkin}
                        className={replace ? classes.customMenuItem4 : ''}
                    />
                    <MenuItem
                        prefix={<Home />}
                        label="Item 1.3.3"
                        style={menuItemStyle}
                        textSkin={menuItemTextSkin}
                        className={replace ? classes.customMenuItem5 : ''}
                    />
                </SubMenu>
                <MenuItem
                    label="Item 1.3.2"
                    style={menuItemStyle}
                    textSkin={menuItemTextSkin}
                    className={replace ? classes.customMenuItem1 : ''}
                />
            </MenuItem>
        </Menu>
    );
};

const Offset = ({ offsetX, offsetY }: { offsetX?: number; offsetY?: number }) => (
    <Menu direction="vertical">
        <MenuItem label="Item 1.2" />
        <MenuItem prefix={<Statistics />} label="Item 1.3" subMenuOffsetX={offsetX} subMenuOffsetY={offsetY}>
            <SubMenu prefix={<Folder />} label={'Item 1.3.1'} offsetX={offsetX} offsetY={offsetY}>
                <MenuItem prefix={<Home />} label="Item 1.3.2" />
                <MenuItem prefix={<Home />} label="Item 1.3.3" />
            </SubMenu>
        </MenuItem>
    </Menu>
);

const Affix = ({ hasPrefix, hasSuffix }: { hasPrefix?: boolean; hasSuffix?: boolean }) => {
    return (
        <Menu direction="vertical">
            <MenuItem
                prefix={hasPrefix && <Statistics />}
                label="Item 1"
                suffix={hasSuffix && hasSuffix && <Home />}
            />
            <MenuItem
                prefix={hasPrefix && <Statistics />}
                label="Item 2"
                suffix={hasSuffix && <RelatedApps />}
            >
                <SubMenu
                    prefix={hasPrefix && <Folder />}
                    suffix={hasSuffix && <Home />}
                    label={'Item 2.1 - 1'}
                >
                    <MenuItem
                        prefix={hasPrefix && <Home />}
                        label="Item 2.1 - 2"
                        suffix={hasSuffix && <RelatedApps />}
                        className={classes.menuItem9}
                    />
                    <MenuItem
                        prefix={hasPrefix && <Home />}
                        label="Item 2.1 - 3"
                        suffix={hasSuffix && <Statistics />}
                    />
                </SubMenu>
            </MenuItem>
        </Menu>
    );
};

export default {
    category: `${CATEGORY.LAYOUT}/Menu`,
    storyName: 'Features',
    component: Menu,
    componentPath: '../..',

    sections: [
        header(),
        tabs([
            tab({
                title: 'Description',
                sections: [
                    demo({
                        title: 'Vertical',
                        component: <Features type="vertical" />
                    }),

                    demo({
                        title: 'Horizontal',
                        component: <Features type="horizontal" />
                    }),

                    demo({
                        title: 'Nested Menu',
                        component: <Nested />
                    }),

                    demo({
                        title: 'Custom style for Menu, SubMenu, MenuItem',
                        component: (
                            <Box gap="32px" direction="vertical">
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">
                                        Custom theme for Menu by className, style
                                    </Heading>
                                    <CustomStyle
                                        menuStyle={{ padding: '3px', backgroundColor: 'gray' }}
                                        subMenuStyle={{ padding: '3px', backgroundColor: 'gray' }}
                                        menuItemStyle={{
                                            padding: '3px',
                                            minHeight: '20px',
                                            color: '#fff',
                                            borderRadius: '3px'
                                        }}
                                        menuItemTextSkin={{ size: 'small', light: true }}
                                        menuClassName={classes.customMenuClass}
                                        replace={false}
                                    />
                                </Box>

                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">Custom each part of Menu</Heading>
                                    <CustomStyle
                                        menuStyle={{ padding: '3px', backgroundColor: 'gray' }}
                                        subMenuStyle={{ padding: '3px', backgroundColor: 'gray' }}
                                        menuItemStyle={{
                                            padding: '3px',
                                            minHeight: '20px',
                                            color: '#fff',
                                            borderRadius: '3px'
                                        }}
                                        menuItemTextSkin={{ size: 'small', light: true }}
                                        menuClassName={classes.customMenuClass}
                                        replace={true}
                                    />
                                </Box>
                            </Box>
                        )
                    }),

                    demo({
                        title: 'Affix',
                        component: (
                            <Box gap="32px" direction="vertical">
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">Prefix</Heading>
                                    <Affix hasPrefix={true} />
                                </Box>
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">Suffix</Heading>
                                    <Affix hasSuffix={true} />
                                </Box>
                            </Box>
                        )
                    }),

                    demo({
                        title: 'Animation',
                        component: (
                            <Box gap="32px" direction="vertical">
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">Default without animation</Heading>
                                    <CustomStyle />
                                </Box>
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">FadeIn</Heading>
                                    <CustomStyle animate={'fadeIn'} />
                                </Box>
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">FadeInDown</Heading>
                                    <CustomStyle animate={'fadeInDown'} />
                                </Box>
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">FadeInUp</Heading>
                                    <CustomStyle animate={'fadeInUp'} />
                                </Box>
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">Pulse</Heading>
                                    <CustomStyle animate={'pulse'} />
                                </Box>
                            </Box>
                        )
                    }),
                    demo({
                        title: 'Custom offset X/Y for SubMenu',
                        component: (
                            <Box gap="32px" direction="vertical">
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">Offset X 20px</Heading>
                                    <Offset offsetX={20} />
                                </Box>
                                <Box gap="6px" direction="vertical">
                                    <Heading appearance="H4">Offset Y 20px</Heading>
                                    <Offset offsetY={20} />
                                </Box>
                            </Box>
                        )
                    })
                ]
            })
        ])
    ]
};
