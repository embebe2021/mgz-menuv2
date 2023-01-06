import { Folder } from '@wix/wix-ui-icons-common';
import { mount } from 'cypress/react';
import MenuTitle from './MenuTitle';

const wrapper = '[data-hook="wrapper"]';

it('should mount', () => {
    mount(
        <div data-hook="wrapper">
            <MenuTitle
                titleProps={{
                    'data-hook': 'MenuTitle',
                }}
            >
                abc
            </MenuTitle>
        </div>
    );
    cy.get('[data-hook="MenuTitle"]').should('be.visible');
});

it('has extract label', () => {
    const label = 'expectLabel';
    mount(
        <div data-hook="wrapper">
            <MenuTitle
                titleProps={{
                    'data-hook': 'MenuTitle',
                }}
            >
                {label}
            </MenuTitle>
        </div>
    );
    cy.get('[data-hook="MenuTitle"]').should('have.text', label);
});

it('has prefix element', () => {
    mount(
        <div data-hook="wrapper">
            <MenuTitle prefix={<Folder data-hook="prefixIcon" />}>abc</MenuTitle>
        </div>
    );
    cy.get(wrapper).should('contain.html', 'svg');
    cy.get('[data-hook="prefixIcon"]').should('be.visible');
});

it('has suffix element', () => {
    mount(
        <div data-hook="wrapper">
            <MenuTitle suffix={<Folder data-hook="suffixIcon" />}>abc</MenuTitle>
        </div>
    );
    cy.get(wrapper).should('contain.html', 'svg');
    cy.get('[data-hook="suffixIcon"]').should('be.visible');
});

it('has arrow icons if props isHasArrow equal true', () => {
    mount(
        <div data-hook="wrapper">
            <MenuTitle isHasArrow={true}>abc</MenuTitle>
        </div>
    );
    cy.get(wrapper).should('contain.html', 'svg');
});

it('if has arrow icon, do not show suffix icon', () => {
    mount(
        <div data-hook="wrapper">
            <MenuTitle isHasArrow={true} suffix={<Folder data-hook="suffixIcon" />}>
                abc
            </MenuTitle>
        </div>
    );
    cy.get(wrapper).should('contain.html', 'svg');
    cy.get('[data-hook="prefixIcon"]').should('not.exist');
});

it('default arrow icon do not rotate', () => {
    mount(
        <div data-hook="wrapper">
            <MenuTitle isHasArrow={true} isHorizontal={false}>
                abc
            </MenuTitle>
        </div>
    );
    cy.get(wrapper)
        .find('svg')
        .then((el) => {
            cy.wrap(el).invoke('attr', 'style').should('not.exist');
        });
});

it('if isHorizontal = true, arrow icon rotate 90 deg', () => {
    mount(
        <div data-hook="wrapper">
            <MenuTitle isHasArrow={true} isHorizontal={true}>
                abc
            </MenuTitle>
        </div>
    );
    cy.get(wrapper)
        .find('svg')
        .then((el) => {
            cy.wrap(el).invoke('attr', 'style').should('eq', 'transform: rotate(90deg);');
        });
});
