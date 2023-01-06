import { Folder, Home, RelatedApps, Shipping, Statistics } from 'wix-ui-icons-common';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import SubMenu from '../SubMenu';

export const MenuComponent = (direction, style) => (
    <Menu direction={direction} style={style}>
        <MenuItem prefix={<Folder />} label={'Item 1'} onClick={label => console.log(label)}>
            <SubMenu prefix={<Folder />} label="Item 1.1">
                <MenuItem label="Item 1.2" onClick={label => console.log(label)} />
                <MenuItem label="Item 1.3" onClick={label => console.log(label)} />
                <MenuItem label="Item 1.2" onClick={label => console.log(label)} />
                <MenuItem label="Item 1.3" onClick={label => console.log(label)} />
                <MenuItem prefix={<Shipping />} label="Item 1.4" onClick={label => console.log(label)} />
                <MenuItem prefix={<Home />} label="Item 1.5" onClick={label => console.log(label)} />
                <MenuItem prefix={<RelatedApps />} label="Item 1.6" onClick={label => console.log(label)} />
                <MenuItem prefix={<Shipping />} label="Item 1.7" onClick={label => console.log(label)} />
                <MenuItem prefix={<Home />} label="Item 4" onClick={label => console.log(label)} />
                <MenuItem prefix={<RelatedApps />} label="Item 1.8" onClick={label => console.log(label)} />
                <MenuItem prefix={<Statistics />} label="Item 1.9" onClick={label => console.log(label)} />

                <MenuItem prefix={<Shipping />} label="Item 1.10" onClick={label => console.log(label)} />
                <MenuItem prefix={<Home />} label="Item 9" onClick={label => console.log(label)} />
                <MenuItem prefix={<RelatedApps />} label="Item 1.11" onClick={label => console.log(label)} />
                <MenuItem prefix={<Shipping />} label="Item 1.12" onClick={label => console.log(label)} />
                <MenuItem prefix={<Home />} label="Item 1.13" onClick={label => console.log(label)} />
                <MenuItem label="Item 1.14" onClick={label => console.log(label)} />
                <MenuItem label="Item 1.15" onClick={label => console.log(label)} />
                <MenuItem prefix={<Folder />} label="Item 1.16" onClick={label => console.log(label)}>
                    <SubMenu prefix={<Folder />} label="Item 1.16.1">
                        <MenuItem
                            prefix={<Home />}
                            label="Item 1.16.1.1"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Shipping />}
                            label="Item 1.16.1.2"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Home />}
                            label="Item 1.16.1.3"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<RelatedApps />}
                            label="Item 1.16.1.4"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Shipping />}
                            label="Item 1.16.1.5"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Home />}
                            label="Item 1.16.1.6"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<RelatedApps />}
                            label="Item 1.16.1.7"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Statistics />}
                            label="Item 1.16.1.8"
                            onClick={label => console.log(label)}
                        />

                        <MenuItem
                            prefix={<Shipping />}
                            label="Item 1.16.1.9"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Home />}
                            label="Item 1.16.1.10"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<RelatedApps />}
                            label="Item 1.16.1.11"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Shipping />}
                            label="Item 1.16.1.11"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Home />}
                            label="Item 1.16.1.12"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<RelatedApps />}
                            label="Item 1.16.1.13"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Statistics />}
                            label="Item 1.16.1.14"
                            onClick={label => console.log(label)}
                        />

                        <MenuItem
                            prefix={<Shipping />}
                            label="Item 1.16.1.15"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem prefix={<Home />} label="Item 9" onClick={label => console.log(label)} />
                        <MenuItem
                            prefix={<RelatedApps />}
                            label="Item 1.16.1.16"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Statistics />}
                            label="Item 1.16.1.17"
                            onClick={label => console.log(label)}
                        />

                        <MenuItem label="Item 1.16.1.18" onClick={label => console.log(label)}>
                            <SubMenu prefix={<Shipping />} label="Item 11.1">
                                <MenuItem
                                    prefix={<Statistics />}
                                    label="Item 11.2"
                                    onClick={label => console.log(label)}
                                >
                                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                                        <MenuItem
                                            prefix={<Statistics />}
                                            label="Item 11.2"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<Home />}
                                            label="Item 11.3"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<RelatedApps />}
                                            label="Item 11.4"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<Shipping />}
                                            label="Item 11.5"
                                            onClick={label => console.log(label)}
                                        >
                                            <SubMenu prefix={<Shipping />} label="Item 11.1">
                                                <MenuItem
                                                    prefix={<Statistics />}
                                                    label="Item 11.2"
                                                    onClick={label => console.log(label)}
                                                >
                                                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                                                        <MenuItem
                                                            prefix={<Statistics />}
                                                            label="Item 11.2"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Home />}
                                                            label="Item 11.3"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<RelatedApps />}
                                                            label="Item 11.4"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Shipping />}
                                                            label="Item 11.5"
                                                            onClick={label => console.log(label)}
                                                        ></MenuItem>
                                                    </SubMenu>
                                                </MenuItem>
                                                <MenuItem
                                                    prefix={<Home />}
                                                    label="Item 11.3"
                                                    onClick={label => console.log(label)}
                                                />
                                                <MenuItem
                                                    prefix={<RelatedApps />}
                                                    label="Item 11.4"
                                                    onClick={label => console.log(label)}
                                                />
                                                <MenuItem
                                                    prefix={<Shipping />}
                                                    label="Item 11.5"
                                                    onClick={label => console.log(label)}
                                                >
                                                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                                                        <MenuItem
                                                            prefix={<Statistics />}
                                                            label="Item 11.2"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Home />}
                                                            label="Item 11.3"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<RelatedApps />}
                                                            label="Item 11.4"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Shipping />}
                                                            label="Item 11.5"
                                                            onClick={label => console.log(label)}
                                                        ></MenuItem>
                                                    </SubMenu>
                                                </MenuItem>
                                            </SubMenu>
                                        </MenuItem>
                                    </SubMenu>
                                </MenuItem>
                                <MenuItem
                                    prefix={<Home />}
                                    label="Item 11.3"
                                    onClick={label => console.log(label)}
                                />
                                <MenuItem
                                    prefix={<RelatedApps />}
                                    label="Item 11.4"
                                    onClick={label => console.log(label)}
                                />
                                <MenuItem
                                    prefix={<Shipping />}
                                    label="Item 11.5"
                                    onClick={label => console.log(label)}
                                >
                                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                                        <MenuItem
                                            prefix={<Statistics />}
                                            label="Item 11.2"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<Home />}
                                            label="Item 11.3"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<RelatedApps />}
                                            label="Item 11.4"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<Shipping />}
                                            label="Item 11.5"
                                            onClick={label => console.log(label)}
                                        ></MenuItem>
                                    </SubMenu>
                                </MenuItem>
                            </SubMenu>
                        </MenuItem>
                        <MenuItem label="Item 1.16.1.19" onClick={label => console.log(label)} />
                        <MenuItem label="Item 1.16.1.20" onClick={label => console.log(label)} />
                        <MenuItem label="Item 1.16.1.21" onClick={label => console.log(label)} />
                        <MenuItem label="Item 1.16.1.22" onClick={label => console.log(label)} />
                        <MenuItem label="Item 1.16.1.23" onClick={label => console.log(label)} />
                    </SubMenu>
                    <MenuItem label="Item 1.16.2" onClick={label => console.log(label)} />
                </MenuItem>
                <SubMenu label="Item 1.17">
                    <MenuItem label="Item 1.6 - 1" onClick={label => console.log(label)} />
                    <MenuItem label="Item 1.6 - 2" onClick={label => console.log(label)} />
                    <MenuItem label="Item 1.6 - 3" onClick={label => console.log(label)} />
                    <MenuItem label="Item 1.6 - 4" onClick={label => console.log(label)} />
                    <MenuItem label="Item 1.6 - 5" onClick={label => console.log(label)} />
                    <MenuItem label="Item 1.6 - 6" onClick={label => console.log(label)} />
                    <SubMenu label="Item 1.6 - 7">
                        <MenuItem label="Item 1.6 - 7 - 1" onClick={label => console.log(label)} />
                        <MenuItem label="Item 1.6 - 7 - 2" onClick={label => console.log(label)} />
                        <MenuItem label="Item 1.6 - 7 - 3" onClick={label => console.log(label)} />
                        <MenuItem label="Item 1.6 - 7 - 4" onClick={label => console.log(label)} />
                        <MenuItem label="Item 1.6 - 7 - 5" onClick={label => console.log(label)} />
                        <MenuItem label="Item 1.6 - 7 - 6" onClick={label => console.log(label)} />
                    </SubMenu>
                </SubMenu>
            </SubMenu>
        </MenuItem>
        <MenuItem label="Item 2" onClick={label => console.log(label)}>
            <SubMenu label="Item 2.1">
                <MenuItem label="Item 2.2" onClick={label => console.log(label)} />
                <MenuItem label="Item 2.3" onClick={label => console.log(label)} />
                <MenuItem label="Item 2.4" onClick={label => console.log(label)} />
                <MenuItem label="Item 2.5" onClick={label => console.log(label)} />
            </SubMenu>
        </MenuItem>
        <MenuItem prefix={<Shipping />} label="Item 3" onClick={label => console.log(label)} />
        <MenuItem prefix={<Shipping />} label="Item 3" onClick={label => console.log(label)} />
        <MenuItem prefix={<Home />} label="Item 4" onClick={label => console.log(label)} />
        <MenuItem prefix={<RelatedApps />} label="Item 5" onClick={label => console.log(label)} />
        <MenuItem prefix={<Statistics />} label="Item 6" onClick={label => console.log(label)} />

        <MenuItem prefix={<Shipping />} label="Item 8" onClick={label => console.log(label)} />
        <MenuItem prefix={<Home />} label="Item 9" onClick={label => console.log(label)} />
        <MenuItem prefix={<RelatedApps />} label="Item 10" onClick={label => console.log(label)} />
        <MenuItem prefix={<Shipping />} label="Item 11" onClick={label => console.log(label)} />
        <MenuItem prefix={<Home />} label="Item 12" onClick={label => console.log(label)} />
        <MenuItem prefix={<RelatedApps />} label="Item 13" onClick={label => console.log(label)} />
        <MenuItem prefix={<Statistics />} label="Item 14" onClick={label => console.log(label)} />

        <MenuItem prefix={<Shipping />} label="Item 15" onClick={label => console.log(label)} />
        <MenuItem prefix={<Home />} label="Item 16" onClick={label => console.log(label)} />
        <MenuItem prefix={<RelatedApps />} label="Item 17" onClick={label => console.log(label)} />
        <MenuItem prefix={<Statistics />} label="Item 18" onClick={label => console.log(label)}>
            <SubMenu prefix={<Shipping />} label="Item 11.1">
                <MenuItem prefix={<Statistics />} label="Item 11.2" onClick={label => console.log(label)}>
                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                        <MenuItem
                            prefix={<Statistics />}
                            label="Item 11.2"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem prefix={<Home />} label="Item 11.3" onClick={label => console.log(label)} />
                        <MenuItem
                            prefix={<RelatedApps />}
                            label="Item 11.4"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Shipping />}
                            label="Item 11.5"
                            onClick={label => console.log(label)}
                        >
                            <SubMenu prefix={<Shipping />} label="Item 11.1">
                                <MenuItem
                                    prefix={<Statistics />}
                                    label="Item 11.2"
                                    onClick={label => console.log(label)}
                                />
                                <MenuItem
                                    prefix={<Home />}
                                    label="Item 11.3"
                                    onClick={label => console.log(label)}
                                />
                                <MenuItem
                                    prefix={<RelatedApps />}
                                    label="Item 11.4"
                                    onClick={label => console.log(label)}
                                />
                                <MenuItem
                                    prefix={<Shipping />}
                                    label="Item 11.5"
                                    onClick={label => console.log(label)}
                                >
                                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                                        <MenuItem
                                            prefix={<Statistics />}
                                            label="Item 11.2"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<Home />}
                                            label="Item 11.3"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<RelatedApps />}
                                            label="Item 11.4"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<Shipping />}
                                            label="Item 11.5"
                                            onClick={label => console.log(label)}
                                        >
                                            <SubMenu prefix={<Shipping />} label="Item 11.1">
                                                <MenuItem
                                                    prefix={<Statistics />}
                                                    label="Item 11.2"
                                                    onClick={label => console.log(label)}
                                                >
                                                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                                                        <MenuItem
                                                            prefix={<Statistics />}
                                                            label="Item 11.2"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Home />}
                                                            label="Item 11.3"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<RelatedApps />}
                                                            label="Item 11.4"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Shipping />}
                                                            label="Item 11.5"
                                                            onClick={label => console.log(label)}
                                                        ></MenuItem>
                                                    </SubMenu>
                                                </MenuItem>
                                                <MenuItem
                                                    prefix={<Home />}
                                                    label="Item 11.3"
                                                    onClick={label => console.log(label)}
                                                />
                                                <MenuItem
                                                    prefix={<RelatedApps />}
                                                    label="Item 11.4"
                                                    onClick={label => console.log(label)}
                                                />
                                                <MenuItem
                                                    prefix={<Shipping />}
                                                    label="Item 11.5"
                                                    onClick={label => console.log(label)}
                                                >
                                                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                                                        <MenuItem
                                                            prefix={<Statistics />}
                                                            label="Item 11.2"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Home />}
                                                            label="Item 11.3"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<RelatedApps />}
                                                            label="Item 11.4"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Shipping />}
                                                            label="Item 11.5"
                                                            onClick={label => console.log(label)}
                                                        ></MenuItem>
                                                    </SubMenu>
                                                </MenuItem>
                                            </SubMenu>
                                        </MenuItem>
                                    </SubMenu>
                                </MenuItem>
                            </SubMenu>
                        </MenuItem>
                    </SubMenu>
                </MenuItem>
                <MenuItem prefix={<Home />} label="Item 11.3" onClick={label => console.log(label)} />
                <MenuItem prefix={<RelatedApps />} label="Item 11.4" onClick={label => console.log(label)} />
                <MenuItem prefix={<Shipping />} label="Item 11.5" onClick={label => console.log(label)}>
                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                        <MenuItem
                            prefix={<Statistics />}
                            label="Item 11.2"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem prefix={<Home />} label="Item 11.3" onClick={label => console.log(label)} />
                        <MenuItem
                            prefix={<RelatedApps />}
                            label="Item 11.4"
                            onClick={label => console.log(label)}
                        />
                        <MenuItem
                            prefix={<Shipping />}
                            label="Item 11.5"
                            onClick={label => console.log(label)}
                        >
                            <SubMenu prefix={<Shipping />} label="Item 11.1">
                                <MenuItem
                                    prefix={<Statistics />}
                                    label="Item 11.2"
                                    onClick={label => console.log(label)}
                                />
                                <MenuItem
                                    prefix={<Home />}
                                    label="Item 11.3"
                                    onClick={label => console.log(label)}
                                />
                                <MenuItem
                                    prefix={<RelatedApps />}
                                    label="Item 11.4"
                                    onClick={label => console.log(label)}
                                />
                                <MenuItem
                                    prefix={<Shipping />}
                                    label="Item 11.5"
                                    onClick={label => console.log(label)}
                                >
                                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                                        <MenuItem
                                            prefix={<Statistics />}
                                            label="Item 11.2"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<Home />}
                                            label="Item 11.3"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<RelatedApps />}
                                            label="Item 11.4"
                                            onClick={label => console.log(label)}
                                        />
                                        <MenuItem
                                            prefix={<Shipping />}
                                            label="Item 11.5"
                                            onClick={label => console.log(label)}
                                        >
                                            <SubMenu prefix={<Shipping />} label="Item 11.1">
                                                <MenuItem
                                                    prefix={<Statistics />}
                                                    label="Item 11.2"
                                                    onClick={label => console.log(label)}
                                                />
                                                <MenuItem
                                                    prefix={<Home />}
                                                    label="Item 11.3"
                                                    onClick={label => console.log(label)}
                                                />
                                                <MenuItem
                                                    prefix={<RelatedApps />}
                                                    label="Item 11.4"
                                                    onClick={label => console.log(label)}
                                                />
                                                <MenuItem
                                                    prefix={<Shipping />}
                                                    label="Item 11.5"
                                                    onClick={label => console.log(label)}
                                                >
                                                    <SubMenu prefix={<Shipping />} label="Item 11.1">
                                                        <MenuItem
                                                            prefix={<Statistics />}
                                                            label="Item 11.2"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Home />}
                                                            label="Item 11.3"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<RelatedApps />}
                                                            label="Item 11.4"
                                                            onClick={label => console.log(label)}
                                                        />
                                                        <MenuItem
                                                            prefix={<Shipping />}
                                                            label="Item 11.5"
                                                            onClick={label => console.log(label)}
                                                        >
                                                            <SubMenu prefix={<Shipping />} label="Item 11.1">
                                                                <MenuItem
                                                                    prefix={<Statistics />}
                                                                    label="Item 11.2"
                                                                    onClick={label => console.log(label)}
                                                                />
                                                                <MenuItem
                                                                    prefix={<Home />}
                                                                    label="Item 11.3"
                                                                    onClick={label => console.log(label)}
                                                                />
                                                                <MenuItem
                                                                    prefix={<RelatedApps />}
                                                                    label="Item 11.4"
                                                                    onClick={label => console.log(label)}
                                                                />
                                                                <MenuItem
                                                                    prefix={<Shipping />}
                                                                    label="Item 11.5"
                                                                    onClick={label => console.log(label)}
                                                                ></MenuItem>
                                                            </SubMenu>
                                                        </MenuItem>
                                                    </SubMenu>
                                                </MenuItem>
                                            </SubMenu>
                                        </MenuItem>
                                    </SubMenu>
                                </MenuItem>
                            </SubMenu>
                        </MenuItem>
                    </SubMenu>
                </MenuItem>
            </SubMenu>
        </MenuItem>
        <MenuItem prefix={<RelatedApps />} label="Item 19" onClick={label => console.log(label)} />
        <MenuItem prefix={<Shipping />} label="Item 20" onClick={label => console.log(label)} />
        <MenuItem prefix={<Home />} label="Item 21" onClick={label => console.log(label)} />
        <MenuItem prefix={<RelatedApps />} label="Item 22" onClick={label => console.log(label)} />
    </Menu>
);
