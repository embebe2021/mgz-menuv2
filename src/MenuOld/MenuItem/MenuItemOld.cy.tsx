import { ControlledMenu } from '@szhsin/react-menu';
import { mount } from 'cypress/react';
import { Folder } from 'mgz-icons';
import Menu from '../Menu';
import { MenuContextProvider } from '../Menu/MenuContextProvider';
import SubMenu from '../SubMenu';
import MenuItem from './MenuItem';
import 'cypress-real-events';

const menuItem = '[data-hook="menuItem"]';

describe('It stand alone', () => {
    it('should mount', () => {
        mount(<MenuItem label="Menu Item" data-hook="menuItem" />);
        cy.get(menuItem).should('be.visible');
    });

    it('should show extract label', () => {
        const expectLabel = 'expectLabel';
        mount(<MenuItem label={expectLabel} data-hook="menuItem" />);
        cy.get(menuItem).should('have.text', expectLabel);
    });

    it('has custom style', () => {
        mount(<MenuItem label={'Label'} data-hook="menuItem" style={{ backgroundColor: 'red' }} />);
        cy.get(menuItem).should('have.style', 'background-color: red');
    });

    it('has prefix text', () => {
        const expectPrefix = 'prefix111';
        mount(<MenuItem label={'Label'} data-hook="menuItem" prefix={expectPrefix} />);
        cy.get(menuItem).should('contain.text', expectPrefix);
    });

    it('has suffix text', () => {
        const expectSuffix = 'suffix111';
        mount(<MenuItem label={'Label'} data-hook="menuItem" suffix={expectSuffix} />);
        cy.get(menuItem).should('contain.text', expectSuffix);
    });

    it('has prefix icon', () => {
        mount(<MenuItem label={'Label'} data-hook="menuItem" prefix={<Folder data-hook="menuItemIcon" />} />);
        cy.get(menuItem)
            .should('contain.html', 'svg')
            .find('[data-hook="menuItemIcon"]')
            .should('be.visible');
    });

    it('has suffix icon', () => {
        mount(<MenuItem label={'Label'} data-hook="menuItem" suffix={<Folder data-hook="menuItemIcon" />} />);
        cy.get(menuItem)
            .should('contain.html', 'svg')
            .find('[data-hook="menuItemIcon"]')
            .should('be.visible');
    });

    it('has custom text skin color', () => {
        const expectSkin = 'premium';
        mount(
            <MenuItem
                label={'Label'}
                data-hook="menuItem"
                textSkin={{ skin: expectSkin }}
                suffix={<Folder data-hook="menuItemIcon" />}
            />
        );
        cy.get(menuItem)
            .should('contain.html', 'span')
            .find('span')
            .invoke('attr', 'class')
            .then(classList => {
                expect(classList).include(expectSkin);
            });
    });

    it('call Onclick function when user click', () => {
        const onClick = cy.spy().as('onClick');
        mount(<MenuItem label={'Label'} data-hook="menuItem" onClick={onClick} />);
        cy.get(menuItem).trigger('click');
        cy.get('@onClick').should('be.calledOnce');
    });

    it('missing label', () => {
        mount(<MenuItem data-hook="menuItem" />);
        cy.get(menuItem).find('span').should('be.empty');
    });
});

describe('It under Menu and has MenuItem child', () => {
    it('should mount', () => {
        mount(
            <Menu>
                <MenuItem data-hook="menuItem" label="label">
                    <MenuItem label="Item2" />
                </MenuItem>
            </Menu>
        );
        cy.get(menuItem).should('be.visible').find('span').should('not.be.empty');
    });

    it('missing label', () => {
        mount(
            <Menu>
                <MenuItem data-hook="menuItem">
                    <MenuItem label="Item2" />
                </MenuItem>
            </Menu>
        );
        cy.get(menuItem).find('span').should('be.empty');
    });

    it('has subMenu to show child', () => {
        mount(
            <Menu>
                <MenuItem data-hook="menuItem" label="Item1">
                    <MenuItem label="Item2" data-hook="menuItemChild" />
                </MenuItem>
            </Menu>
        );
        cy.get(menuItem)
            .should('be.visible')
            .next()
            .then(el => {
                cy.wrap(el)
                    .invoke('attr', 'class')
                    .then(classList => {
                        expect(classList).include('szh-menu-container');
                    });
            });
        cy.get(menuItem)
            .realHover()
            .then(() => {
                cy.get('[data-hook="menuItemChild"]').should('be.visible');
            });
    });

    it('it has custom style', () => {
        mount(
            <Menu>
                <MenuItem
                    data-hook="menuItem"
                    label="Item1"
                    style={{ backgroundColor: 'red' }}
                    subMenuStyle={{ backgroundColor: 'red' }}
                >
                    <MenuItem label="Item2" data-hook="menuItemChild" />
                </MenuItem>
            </Menu>
        );
        cy.get(menuItem).should('have.style', 'background-color: red');
    });

    it('its sub menu have custom style too', () => {
        mount(
            <Menu>
                <MenuItem
                    data-hook="menuItem"
                    label="Item1"
                    style={{ backgroundColor: 'red' }}
                    subMenuStyle={{ backgroundColor: 'red' }}
                >
                    <MenuItem label="Item2" data-hook="menuItemChild" />
                </MenuItem>
            </Menu>
        );
        cy.get(menuItem)
            .should('be.visible')
            .next()
            .then(el => {
                cy.wrap(el).find('[aria-label="Menu"]').should('have.style', 'background-color: red');
            });
    });

    it('it has custom className', () => {
        const expectClassName = 'className123';
        mount(
            <Menu>
                <MenuItem data-hook="menuItem" label="Item1" className={expectClassName}>
                    <MenuItem label="Item2" data-hook="menuItemChild" />
                </MenuItem>
            </Menu>
        );
        cy.get(menuItem)
            .invoke('attr', 'class')
            .then(classList => {
                expect(classList).include(expectClassName);
            });
    });

    it('its submenu has custom className too', () => {
        const expectClassName = 'submenuClassName123';
        mount(
            <Menu>
                <MenuItem
                    data-hook="menuItem"
                    label="Item1"
                    className={expectClassName}
                    subMenuClassName={expectClassName}
                    style={{ backgroundColor: 'yellow' }}
                >
                    <MenuItem label="Item2" data-hook="menuItemChild" />
                </MenuItem>
            </Menu>
        );
        cy.get(menuItem)
            .next()
            .then(el => {
                cy.wrap(el)
                    .find('[aria-label="Menu"]')
                    .then(el => {
                        cy.wrap(el)
                            .invoke('attr', 'class')
                            .then(classList => {
                                expect(classList).include(expectClassName);
                            });
                    });
            });
    });

    it('it call onClick when user click', () => {
        const onClick = cy.spy().as('onClick');
        mount(
            <Menu>
                <MenuItem data-hook="menuItem" label="Item1" onClick={onClick}>
                    <MenuItem label="Item2" data-hook="menuItemChild" />
                </MenuItem>
            </Menu>
        );
        cy.get(menuItem).click();
        cy.get('@onClick').should('be.calledOnce');
    });
});

describe('It under SubMenu', () => {
    it('should mount', () => {
        mount(
            <Menu direction="vertical">
                <MenuItem label="Item 1" data-hook="otherMenuItem">
                    <SubMenu label="Item 1.1">
                        <MenuItem label="Item 1.2" data-hook="menuItem" />
                    </SubMenu>
                </MenuItem>
            </Menu>
        );
        cy.get('[data-hook="otherMenuItem"]')
            .realHover()
            .then(() => {
                cy.get('div[role="menuitem"]')
                    .realHover()
                    .then(() => {
                        cy.get(menuItem).should('be.visible');
                    });
            });
    });

    it('have custom style', () => {
        mount(
            <Menu direction="vertical">
                <MenuItem label="Item 1" data-hook="otherMenuItem">
                    <SubMenu label="Item 1.1">
                        <MenuItem label="Item 1.2" data-hook="menuItem" style={{ backgroundColor: 'red' }} />
                    </SubMenu>
                </MenuItem>
            </Menu>
        );
        cy.get('[data-hook="otherMenuItem"]')
            .realHover()
            .then(() => {
                cy.get('div[role="menuitem"]')
                    .realHover()
                    .then(() => {
                        cy.get(menuItem).should('have.style', 'background-color: red');
                    });
            });
    });

    it('have custom className', () => {
        const expectClassName = 'menuItemInSubMenu';
        mount(
            <Menu direction="vertical">
                <MenuItem label="Item 1" data-hook="otherMenuItem">
                    <SubMenu label="Item 1.1">
                        <MenuItem label="Item 1.2" data-hook="menuItem" className={expectClassName} />
                    </SubMenu>
                </MenuItem>
            </Menu>
        );
        cy.get('[data-hook="otherMenuItem"]')
            .realHover()
            .then(() => {
                cy.get('div[role="menuitem"]')
                    .realHover()
                    .then(() => {
                        cy.get(menuItem)
                            .invoke('attr', 'class')
                            .then(classList => {
                                expect(classList).include(expectClassName);
                            });
                    });
            });
    });

    it('call onClick function when user click', () => {
        const expectClassName = 'menuItemInSubMenu';
        const onClick = cy.spy().as('onClick');
        mount(
            <Menu direction="vertical">
                <MenuItem label="Item 1" data-hook="otherMenuItem">
                    <SubMenu label="Item 1.1">
                        <MenuItem
                            label="Item 1.2"
                            data-hook="menuItem"
                            className={expectClassName}
                            onClick={onClick}
                        />
                    </SubMenu>
                </MenuItem>
            </Menu>
        );
        cy.get('[data-hook="otherMenuItem"]')
            .realHover()
            .then(() => {
                cy.get('div[role="menuitem"]')
                    .realHover()
                    .then(() => {
                        cy.get(menuItem).click();
                        cy.get('@onClick').should('be.calledOnce');
                    });
            });
    });

    it('has prefix text', () => {
        const expectPrefix = 'Prefix 1';
        mount(
            <Menu direction="vertical">
                <MenuItem label="Item 1" data-hook="otherMenuItem">
                    <SubMenu label="Item 1.1">
                        <MenuItem prefix={expectPrefix} label="Item 1.2" data-hook="menuItem" />
                    </SubMenu>
                </MenuItem>
            </Menu>
        );
        cy.get('[data-hook="otherMenuItem"]')
            .realHover()
            .then(() => {
                cy.get('div[role="menuitem"]')
                    .realHover()
                    .then(() => {
                        cy.get(menuItem).should('contain.text', expectPrefix);
                    });
            });
    });

    it('has suffix text', () => {
        const expectSuffix = 'Suffix 1';
        mount(
            <Menu direction="vertical">
                <MenuItem label="Item 1" data-hook="otherMenuItem">
                    <SubMenu label="Item 1.1">
                        <MenuItem label="Item 1.2" suffix={expectSuffix} data-hook="menuItem" />
                    </SubMenu>
                </MenuItem>
            </Menu>
        );
        cy.get('[data-hook="otherMenuItem"]')
            .realHover()
            .then(() => {
                cy.get('div[role="menuitem"]')
                    .realHover()
                    .then(() => {
                        cy.get(menuItem).should('contain.text', expectSuffix);
                    });
            });
    });

    it('missing label', () => {
        mount(
            <Menu direction="vertical">
                <MenuItem label="Item 1" data-hook="otherMenuItem">
                    <SubMenu label="Item 1.1">
                        <MenuItem data-hook="menuItem" />
                    </SubMenu>
                </MenuItem>
            </Menu>
        );
        cy.get('[data-hook="otherMenuItem"]')
            .realHover()
            .then(() => {
                cy.get('div[role="menuitem"]')
                    .realHover()
                    .then(() => {
                        cy.get(menuItem).find('span').should('be.empty');
                    });
            });
    });
});
