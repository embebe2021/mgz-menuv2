import { SubMenu } from '@szhsin/react-menu';
import { mount } from 'cypress/react';
import Menu from '../Menu';
import MenuItem from './MenuItem';
import { Folder } from '@wix/wix-ui-icons-common';

const menuItem = '[data-hook="MenuItem"]';

it('should mount under a menu', () => {
    mount(
        <Menu>
            <MenuItem data-hook="MenuItem">MenuItem 1</MenuItem>
        </Menu>
    );
    cy.get(menuItem).should('be.visible');
});

it('has prefix icon', () => {
    mount(
        <Menu>
            <MenuItem prefix={<Folder data-hook="testPrefixIcon" />} data-hook="MenuItem">
                MenuItem 1
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).should('be.visible');
    cy.get('[data-hook="testPrefixIcon"]').should('be.visible');
});

it('has prefix text', () => {
    const expectText = 'testPrefix';
    mount(
        <Menu>
            <MenuItem prefix={expectText} data-hook="MenuItem">
                MenuItem 1
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).should('be.visible').should('contain.text', expectText);
});

it('has suffix icon', () => {
    mount(
        <Menu>
            <MenuItem suffix={<Folder data-hook="testsuffixIcon" />} data-hook="MenuItem">
                MenuItem 1
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).should('be.visible');
    cy.get('[data-hook="testsuffixIcon"]').should('be.visible');
});

it('has suffix text', () => {
    const expectText = 'testsuffix';
    mount(
        <Menu>
            <MenuItem suffix={expectText} data-hook="MenuItem">
                MenuItem 1
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).should('be.visible').should('contain.text', expectText);
});

it('can change text titleProps', () => {
    const expectClassName = 'titleClass';
    const expectColor = 'rgb(0, 255, 0)';
    mount(
        <Menu>
            <MenuItem
                titleProps={{
                    className: expectClassName,
                    'data-hook': 'MenuTitle',
                    style: { backgroundColor: expectColor },
                }}
            >
                MenuItem 1
            </MenuItem>
        </Menu>
    );
    cy.get('[data-hook="MenuTitle"]').invoke('attr', 'class').should('contain', expectClassName);
    cy.get('[data-hook="MenuTitle"]').should('have.css', 'background-color', expectColor);
});

it('can custom className', () => {
    const expectClassName = 'menuItemClassNameTest';
    mount(
        <Menu>
            <MenuItem className={expectClassName} data-hook="MenuItem">
                MenuItem 1
            </MenuItem>
        </Menu>
    );

    cy.get(menuItem).invoke('attr', 'class').should('contain', expectClassName);
});

it('can has child node', () => {
    const expectChildName = 'childNamTest';
    mount(
        <Menu>
            <MenuItem data-hook="MenuItem">{expectChildName}</MenuItem>
        </Menu>
    );
    cy.get(menuItem).should('have.text', expectChildName);
});
