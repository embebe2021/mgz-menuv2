import { mount } from 'cypress/react';
import Menu from '.';
import MenuItem from '../MenuItem';
import SubMenu from '../SubMenu';

const menu = '[data-hook="menu"]';
const menuItem = '[data-hook="menuItem"]';

it('should not exist', () => {
    mount(<Menu />);
    cy.get(menu).should('not.exist');
});

it('should mount', () => {
    mount(<Menu direction="vertical" data-hook="menu" />);
    cy.get(menu).should('be.visible');
});

it('mount with children', () => {
    mount(
        <Menu direction="vertical" data-hook="menu">
            <div data-hook="menuItem">Children</div>
        </Menu>
    );
    cy.get(menuItem).should('be.visible');
});

it('with custom style', () => {
    mount(<Menu direction="vertical" data-hook="menu" style={{ backgroundColor: 'red' }} />);

    cy.get(menu).should('have.style', 'background-color: red');
});

it('with custom className', () => {
    const expectClassName = 'demoClass';
    mount(
        <Menu direction="vertical" animate="fadeIn" data-hook="menu" className={expectClassName} />
    );

    cy.get(menu)
        .invoke('attr', 'class')
        .then((classList) => expect(classList).include(expectClassName));
});

it('should has animate class selector', () => {
    const expectKeywords1 = 'animate';
    const expectKeywords2 = 'fadeIn';
    mount(
        <Menu direction="vertical" animate={expectKeywords2} data-hook="menu">
            <MenuItem label="Item 1">
                <SubMenu
                    label="Item 1.1"
                    data-hook="subMenu"
                    representItemProps={{ 'data-hook': 'subMenuItem' }}
                >
                    <MenuItem label="Item 1.1.1" data-hook="menuItem" />
                </SubMenu>
            </MenuItem>
        </Menu>
    );

    cy.get(menu)
        .invoke('attr', 'class')
        .then((classList) => {
            expect(classList).include(expectKeywords1);
            expect(classList).include(expectKeywords2);
        });
});
