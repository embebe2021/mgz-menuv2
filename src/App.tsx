import _ from 'lodash';
import { Folder, Rule } from '@wix/wix-ui-icons-common';
import Menu from './components/Menu';
import SubMenu from './components/SubMenu';
import MenuItem from './components/MenuItem';

export const App = (): JSX.Element => {
    const directionx = 'vertical';
    // const directionx = 'horizontal';
    return (
        <Menu
            className="gggg"
            data-hook="menu"
            direction={directionx}
            style={{ backgroundColor: 'blue' }}
        >
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
                style={{ backgroundColor: 'red' }}
                className="11111111111"
                titleProps={{
                    style: {
                        color: 'white',
                    },
                }}
            >
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
            >
                abccc
            </MenuItem>
            <SubMenu
                label="hello"
                itemClassName="zzzzzzzzzzzz"
                itemPrefix={<Folder />}
                itemSuffix={<Rule />}
                itemProps={{
                    'data-hook': 'aaaaaaaaaaaaaa',
                    onClick: () => console.log('submenu'),
                }}
                itemStyle={{
                    backgroundColor: 'yellow',
                }}
                menuStyle={{ backgroundColor: 'red' }}
                menuClassName="333333333333333"
            >
                <MenuItem
                    prefix={<Folder />}
                    suffix={<Rule />}
                    style={{ backgroundColor: 'green' }}
                    className="55555555555"
                    data-hook="MenuItemmmmmm"
                >
                    abccc
                </MenuItem>
                <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                    abccc
                </MenuItem>
                <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                    abccc
                </MenuItem>
                <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                    abccc
                </MenuItem>
                <SubMenu
                    label="hello"
                    itemClassName="zzzzzzzzzzzz"
                    itemPrefix={<Folder />}
                    itemSuffix={<Rule />}
                    itemProps={{
                        'data-hook': 'aaaaaaaaaaaaaa',
                    }}
                    itemTitleProps={{
                        style: {
                            color: 'white',
                        },
                    }}
                    itemStyle={
                        {
                            // backgroundColor: 'red',
                        }
                    }
                >
                    <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                        abccc
                    </MenuItem>
                    <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                        abccc
                    </MenuItem>
                    <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                        abccc
                    </MenuItem>
                    <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                        abccc
                    </MenuItem>
                </SubMenu>
            </SubMenu>
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
                style={{ backgroundColor: 'red' }}
                className="11111111111"
            >
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
            >
                abccc
            </MenuItem>
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
                style={{ backgroundColor: 'red' }}
                className="11111111111"
            >
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
            >
                abccc
            </MenuItem>
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
                style={{ backgroundColor: 'red' }}
                className="11111111111"
            >
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
            >
                abccc
            </MenuItem>
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
                style={{ backgroundColor: 'red' }}
                className="11111111111"
            >
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem prefix={<Folder />} suffix={<Rule />} data-hook="MenuItemmmmmm">
                abccc
            </MenuItem>
            <MenuItem
                prefix={<Folder />}
                suffix={<Rule />}
                data-hook="MenuItemmmmmm"
                onClick={() => console.log('aaaa')}
            >
                abccc
            </MenuItem>
        </Menu>
    );
};
