import { mount } from 'cypress/react';
import Menu from './Menu';

const menu = '[data-hook="Menu"]';

it('should mount', () => {
    mount(<Menu data-hook="Menu"></Menu>);
    cy.get(menu).should('be.visible');
});

it('mount with children', () => {
    mount(
        <Menu data-hook="Menu">
            <div data-hook="Child">Child</div>
        </Menu>
    );
    cy.get(menu).should('be.visible');
    cy.get('[data-hook="Child"]').should('be.visible');
});

it('mount with custom style', () => {
    const expectColor = 'rgb(255, 0, 0)';
    mount(<Menu data-hook="Menu" style={{ backgroundColor: expectColor }}></Menu>);
    cy.get(menu).should('have.css', 'background-color', expectColor);
});

it('should have custom className', () => {
    const expectClassName = 'menuTest';
    mount(<Menu data-hook="Menu" className={expectClassName}></Menu>);
    cy.get(menu).invoke('attr', 'class').should('contain', expectClassName);
});

it('should have animate css className', () => {
    const expectAnimateName = 'pulse';
    mount(<Menu data-hook="Menu" animate={expectAnimateName}></Menu>);
    cy.get(menu).invoke('attr', 'class').should('contain', expectAnimateName);
});

it('can custom container css style', () => {
    const expectPosition = 'static';
    mount(
        <Menu
            data-hook="Menu"
            containerProps={{
                'data-hook': 'MenuContainer',
                style: {
                    position: expectPosition,
                },
            }}
        >
            <div>Child</div>
        </Menu>
    );
    cy.get('[data-hook="MenuContainer"]').should('have.css', 'position', expectPosition);
});

it('can custom container atributtes', () => {
    const expectValue = 'testContainer';
    mount(
        <Menu
            data-hook="Menu"
            containerProps={{
                'data-123': expectValue,
                'data-hook': 'MenuContainer',
            }}
        >
            <div>Child</div>
        </Menu>
    );
    cy.get('[data-hook="MenuContainer"]')
        .invoke('attr', 'data-123')
        .then((value) => {
            expect(value).to.be.eq(expectValue);
        });
});

it('can custom menu atributtes', () => {
    const expectValue = 'menuTestAtt';
    mount(
        <Menu data-hook="Menu" some-att={expectValue}>
            <div>Child</div>
        </Menu>
    );
    cy.get(menu)
        .invoke('attr', 'some-att')
        .then((value) => {
            expect(value).to.be.eq(expectValue);
        });
});

it('trigger default mouse event on container', () => {
    const onClick = cy.spy().as('onClick');
    mount(
        <Menu
            data-hook="Menu"
            containerProps={{
                'data-hook': 'MenuContainer',
                onClick: onClick,
            }}
        >
            <div>Child</div>
        </Menu>
    );
    cy.get('[data-hook="MenuContainer"]').trigger('click');
    cy.get('@onClick').should('be.calledOnce');
});

it('trigger default mouse event on menu', () => {
    const onClick = cy.spy().as('onClick');
    mount(
        <Menu data-hook="Menu" onClick={onClick}>
            <div>Child</div>
        </Menu>
    );
    cy.get(menu).trigger('click');
    cy.get('@onClick').should('be.calledOnce');
});
