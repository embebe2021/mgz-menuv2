import { mount } from 'cypress/react';
import { Folder } from 'mgz-icons';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import SubMenu from './SubMenu';
import 'cypress-real-events';

const subMenu = '[aria-label="Submenu"]';
const representItem = '[role="presentation"]';
const menuItem = '[data-hook="menuItem"]';
const prefixIcon = '[data-hook="subMenuIcon"]';

it('should mount under menu item', () => {
    mount(
        <Menu direction="vertical">
            <MenuItem label="Item 1" data-hook="menuItem">
                <SubMenu label="Item 1.1" />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).realHover();
    cy.get(representItem).realHover();
    cy.get(subMenu).should('be.visible');
});

it('represent item mount with prefix icon', () => {
    mount(
        <Menu direction="vertical">
            <MenuItem label="Item 1" data-hook="menuItem">
                <SubMenu prefix={<Folder data-hook="subMenuIcon" />} label="Item 1.1" />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).realHover();
    cy.get(prefixIcon).should('be.visible');
});

it('represent item have extract label', () => {
    const expectLabel = 'Item 1.1';
    mount(
        <Menu direction="vertical">
            <MenuItem label="Item 1" data-hook="menuItem">
                <SubMenu prefix={<Folder data-hook="subMenuIcon" />} label={expectLabel} />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).realHover();
    cy.get(representItem).should('have.text', expectLabel);
});

it('represent item have presentItemClassName', () => {
    const expectClassName = 'expectClassName';
    mount(
        <Menu direction="vertical">
            <MenuItem label="Item 1" data-hook="menuItem">
                <SubMenu
                    prefix={<Folder data-hook="subMenuIcon" />}
                    label="Item 1.1"
                    representItemClassName={expectClassName}
                    representItemProps={{ 'data-hook': 'representItem' }}
                />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).realHover();
    cy.get('[data-hook="representItem"]')
        .invoke('attr', 'class')
        .then(classList => {
            expect(classList).include(expectClassName);
        });
});

it('represent item have custom div props ', () => {
    mount(
        <Menu direction="vertical">
            <MenuItem label="Item 1" data-hook="menuItem">
                <SubMenu
                    prefix={<Folder data-hook="subMenuIcon" />}
                    label="Item 1.1"
                    representItemProps={{ 'data-hook': 'representItem', style: { backgroundColor: 'red' } }}
                />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).realHover();
    cy.get('[data-hook="representItem"]').should('have.style', 'background-color: red');
});

it('mount with children', () => {
    mount(
        <Menu direction="vertical">
            <MenuItem label="Item 1" data-hook="menuItem">
                <SubMenu
                    prefix={<Folder data-hook="subMenuIcon" />}
                    label="Item 1.1"
                    representItemProps={{ 'data-hook': 'representItem' }}
                >
                    <MenuItem label="Item 1.1.2" data-hook="menuItem" />
                </SubMenu>
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).realHover();
    cy.get(representItem).realHover();
    cy.get(menuItem).should('be.visible');
});

it('submenu has custom classname', () => {
    const expectClassName = 'subMenuID1111';
    mount(
        <Menu direction="vertical">
            <MenuItem label="Item 1" data-hook="menuItem">
                <SubMenu
                    prefix={<Folder data-hook="subMenuIcon" />}
                    label="Item 1.1"
                    menuClassName={expectClassName}
                />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).realHover();
    cy.get(representItem).realHover();
    cy.get(subMenu)
        .invoke('attr', 'class')
        .then(classList => {
            expect(classList).include(expectClassName);
        });
});

it('submenu has custom style', () => {
    mount(
        <Menu direction="vertical">
            <MenuItem label="Item 1" data-hook="menuItem">
                <SubMenu label="1.2" menuStyle={{ backgroundColor: 'red' }} />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).realHover();
    cy.get(representItem).realHover();
    cy.get(subMenu).should('have.style', 'background-color: red');
});
