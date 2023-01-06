import { mount } from 'cypress/react';
import { Folder } from 'mgz-icons';
import MenuTitle from './MenuTitle';

const menuTitle = '[data-hook="menuTitle"]';

it('should mount', () => {
    mount(<MenuTitle dataHook="menuTitle" label="menuTitle" />);
    cy.get(menuTitle).should('be.visible');
});

it('has prefix label', () => {
    const expectPrefix = 'prefix';
    mount(<MenuTitle dataHook="menuTitle" prefix={expectPrefix} label="menuTitle" />);
    cy.get('[data-cy-root]').should('contain.text', expectPrefix);
});

it('has prefix icons', () => {
    mount(<MenuTitle dataHook="menuTitle" prefix={<Folder data-hook="prefixIcon" />} label="menuTitle" />);
    cy.get('[data-hook="prefixIcon"]').should('be.visible');
});

it('has suffix label', () => {
    const expectSuffix = 'suffix';
    mount(<MenuTitle dataHook="menuTitle" prefix={expectSuffix} label="menuTitle" />);
    cy.get('[data-cy-root]').should('contain.text', expectSuffix);
});

it('has suffix icons', () => {
    mount(<MenuTitle dataHook="menuTitle" suffix={<Folder data-hook="suffixIcon" />} label="menuTitle" />);
    cy.get('[data-hook="suffixIcon"]').should('be.visible');
});

it('has arrow icons if props isHasArrow equal true ', () => {
    mount(<MenuTitle dataHook="menuTitle" isHasArrow={true} label="menuTitle" />);
    cy.get(menuTitle)
        .next()
        .then(el => {
            cy.wrap(el).should('be.visible');
        });
});

it('if has arrow icon, do not show suffix icon', () => {
    mount(
        <MenuTitle
            dataHook="menuTitle"
            isHasArrow={true}
            suffix={<Folder data-hook="suffixIcon" />}
            label="menuTitle"
        />
    );
    cy.get('[data-hook="suffixIcon"]').should('not.exist');
});

it('default arrow icon do not rotate', () => {
    mount(<MenuTitle dataHook="menuTitle" isHasArrow={true} isHorizontal={false} label="menuTitle" />);
    cy.get(menuTitle)
        .next()
        .then(el => {
            cy.wrap(el).should('not.have.attr', 'transform');
        });
});

it('if isHorizontal = true, arrow icon rotate 90 deg', () => {
    mount(<MenuTitle dataHook="menuTitle" isHasArrow={true} isHorizontal={true} label="menuTitle" />);
    cy.get(menuTitle)
        .next()
        .then(el => {
            cy.wrap(el).should('have.style', 'transform: rotate(90deg)');
        });
});
