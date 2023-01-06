import { mount } from 'cypress/react';
import { Folder, Home, RelatedApps, Shipping, Statistics } from 'mgz-icons';
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import 'cypress-real-events';

const menu = '[data-hook="Menu"]';
const menuItem = '[data-hook="MenuItem"]';

it('should mount', () => {
    cy.viewport(1200, 800);
    mount(
        <Menu direction="vertical" data-hook="Menu">
            <MenuItem prefix={<Folder />} label={'Item 1'} data-hook="MenuItem" />
            <MenuItem label="Item 2" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 3" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 3.1">
                    <MenuItem prefix={<Folder />} label={'Item 3.1 - 1'} data-hook="MenuItem" />
                    <MenuItem label="Item 3.1 - 2" data-hook="MenuItem" />
                    <MenuItem label="Item 3.1 - 3" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 3.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 3.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 3.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 3.1 - 7" data-hook="MenuItem" />
                </SubMenu>
            </MenuItem>
            <MenuItem label="Item 4" data-hook="MenuItem" />
            <MenuItem label="Item 5" data-hook="MenuItem" />
            <MenuItem prefix={<Shipping />} label="Item 6" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 7" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 7.1">
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 1'} data-hook="MenuItem" />
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 2'} data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 3" data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 7.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 7.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 7.1 - 7" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 7.1 - 8" data-hook="MenuItem" />
                </SubMenu>
            </MenuItem>
            <MenuItem prefix={<Shipping />} label="Item 8" data-hook="MenuItem" />
            <MenuItem prefix={<Home />} label="Item 9" data-hook="MenuItem" />
            <MenuItem prefix={<RelatedApps />} label="Item 10" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 11" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 11.1">
                    <MenuItem prefix={<Folder />} label="Item 11.1 - 1" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 2" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 3" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 11.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 11.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 11.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 11.1 - 7" data-hook="MenuItem" />
                </SubMenu>
                <MenuItem prefix={<Shipping />} label="Item 11.2" data-hook="MenuItem" />
            </MenuItem>
        </Menu>
    );
    cy.get(menu).should('be.visible');
    cy.get(menuItem).should('have.length', 12);
});

it('hover menu item to change background color', () => {
    cy.viewport(1200, 800);
    mount(
        <Menu direction="vertical" data-hook="Menu">
            <MenuItem prefix={<Folder />} label={'Item 1'} data-hook="MenuItem" />
            <MenuItem label="Item 2" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 3" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 3.1">
                    <MenuItem prefix={<Folder />} label={'Item 3.1 - 1'} data-hook="MenuItem" />
                    <MenuItem label="Item 3.1 - 2" data-hook="MenuItem" />
                    <MenuItem label="Item 3.1 - 3" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 3.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 3.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 3.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 3.1 - 7" data-hook="MenuItem" />
                </SubMenu>
            </MenuItem>
            <MenuItem label="Item 4" data-hook="MenuItem" />
            <MenuItem label="Item 5" data-hook="MenuItem" />
            <MenuItem prefix={<Shipping />} label="Item 6" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 7" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 7.1">
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 1'} data-hook="MenuItem" />
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 2'} data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 3" data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 7.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 7.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 7.1 - 7" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 7.1 - 8" data-hook="MenuItem" />
                </SubMenu>
            </MenuItem>
            <MenuItem prefix={<Shipping />} label="Item 8" data-hook="MenuItem" />
            <MenuItem prefix={<Home />} label="Item 9" data-hook="MenuItem" />
            <MenuItem prefix={<RelatedApps />} label="Item 10" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 11" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 11.1">
                    <MenuItem prefix={<Folder />} label="Item 11.1 - 1" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 2" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 3" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 11.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 11.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 11.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 11.1 - 7" data-hook="MenuItem" />
                </SubMenu>
                <MenuItem prefix={<Shipping />} label="Item 11.2" data-hook="MenuItem" />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).each(el => {
        cy.wrap(el)
            .realHover()
            .then(() => {
                cy.wrap(el).should('have.css', 'background-color');
            });
    });
});

it('use keyboard arrow to use menu, Space to select menu item', () => {
    cy.viewport(1200, 800);
    const onClick = cy.spy().as('onClick');
    mount(
        <Menu direction="vertical" data-hook="Menu">
            <MenuItem prefix={<Folder />} label={'Item 1'} data-hook="MenuItem" />
            <MenuItem label="Item 2" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 3" data-hook="MenuItem">
                <SubMenu
                    prefix={<Folder />}
                    label="Item 3.1"
                    data-hook="SubMenu"
                    representItemProps={{ 'data-hook': 'MenuItem3' }}
                >
                    <MenuItem prefix={<Folder />} label={'Item 3.1 - 1'} data-hook="MenuItem4" />
                    <MenuItem label="Item 3.1 - 2" data-hook="MenuItem" onClick={onClick} />
                    <MenuItem label="Item 3.1 - 3" data-hook="MenuItem" onClick={onClick} />
                    <MenuItem
                        prefix={<Shipping />}
                        label="Item 3.1 - 4"
                        data-hook="MenuItem5"
                        onClick={onClick}
                    />
                    <MenuItem
                        prefix={<Home />}
                        label="Item 3.1 - 5"
                        data-hook="MenuItem6"
                        onClick={onClick}
                    />
                    <MenuItem
                        prefix={<RelatedApps />}
                        label="Item 3.1 - 6"
                        data-hook="MenuItem7"
                        onClick={onClick}
                    />
                    <MenuItem
                        prefix={<Statistics />}
                        label="Item 3.1 - 7"
                        data-hook="MenuItem8"
                        onClick={onClick}
                    />
                </SubMenu>
            </MenuItem>
            <MenuItem label="Item 4" data-hook="MenuItem" />
            <MenuItem label="Item 5" data-hook="MenuItem" />
            <MenuItem prefix={<Shipping />} label="Item 6" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 7" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 7.1">
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 1'} data-hook="MenuItem" />
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 2'} data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 3" data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 7.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 7.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 7.1 - 7" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 7.1 - 8" data-hook="MenuItem" />
                </SubMenu>
            </MenuItem>
            <MenuItem prefix={<Shipping />} label="Item 8" data-hook="MenuItem" />
            <MenuItem prefix={<Home />} label="Item 9" data-hook="MenuItem" />
            <MenuItem prefix={<RelatedApps />} label="Item 10" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 11" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 11.1">
                    <MenuItem prefix={<Folder />} label="Item 11.1 - 1" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 2" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 3" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 11.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 11.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 11.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 11.1 - 7" data-hook="MenuItem" />
                </SubMenu>
                <MenuItem prefix={<Shipping />} label="Item 11.2" data-hook="MenuItem" />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).then(listEl => {
        cy.wrap(listEl[2])
            .realHover()
            .then(() => {
                cy.get('[data-hook="MenuItem3"]')
                    .type('{rightarrow}')
                    .type(Cypress._.repeat('{downarrow}', 5))
                    .then(() => {
                        cy.get('[data-hook="MenuItem8"]').realPress('Space');
                        cy.get('@onClick').should('be.calledOnce');
                    });
            });
    });
});

it('click on menu item', () => {
    cy.viewport(1200, 800);
    const onClick = cy.spy().as('onClick');
    mount(
        <Menu direction="vertical" data-hook="Menu">
            <MenuItem prefix={<Folder />} label={'Item 1'} data-hook="MenuItem" />
            <MenuItem label="Item 2" data-hook="MenuItem" onClick={onClick} />
            <MenuItem prefix={<Statistics />} label="Item 3" data-hook="MenuItem" onClick={onClick}>
                <SubMenu
                    prefix={<Folder />}
                    label="Item 3.1"
                    data-hook="SubMenu"
                    representItemProps={{ 'data-hook': 'MenuItem3' }}
                >
                    <MenuItem prefix={<Folder />} label={'Item 3.1 - 1'} data-hook="MenuItem4" />
                    <MenuItem label="Item 3.1 - 2" data-hook="MenuItem" />
                    <MenuItem label="Item 3.1 - 3" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 3.1 - 4" data-hook="MenuItem5" />
                    <MenuItem prefix={<Home />} label="Item 3.1 - 5" data-hook="MenuItem6" />
                    <MenuItem prefix={<RelatedApps />} label="Item 3.1 - 6" data-hook="MenuItem7" />
                    <MenuItem
                        prefix={<Statistics />}
                        label="Item 3.1 - 7"
                        data-hook="MenuItem8"
                        onClick={onClick}
                    />
                </SubMenu>
            </MenuItem>
            <MenuItem label="Item 4" data-hook="MenuItem" onClick={onClick} />
            <MenuItem label="Item 5" data-hook="MenuItem" onClick={onClick} />
            <MenuItem prefix={<Shipping />} label="Item 6" data-hook="MenuItem" onClick={onClick} />
            <MenuItem prefix={<Statistics />} label="Item 7" data-hook="MenuItem" onClick={onClick}>
                <SubMenu prefix={<Folder />} label="Item 7.1">
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 1'} data-hook="MenuItem" />
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 2'} data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 3" data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 7.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 7.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 7.1 - 7" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 7.1 - 8" data-hook="MenuItem" />
                </SubMenu>
            </MenuItem>
            <MenuItem prefix={<Shipping />} label="Item 8" data-hook="MenuItem" onClick={onClick} />
            <MenuItem prefix={<Home />} label="Item 9" data-hook="MenuItem" />
            <MenuItem prefix={<RelatedApps />} label="Item 10" data-hook="MenuItem" onClick={onClick} />
            <MenuItem prefix={<Statistics />} label="Item 11" data-hook="MenuItem" onClick={onClick}>
                <SubMenu prefix={<Folder />} label="Item 11.1">
                    <MenuItem prefix={<Folder />} label="Item 11.1 - 1" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 2" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 3" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 11.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 11.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 11.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 11.1 - 7" data-hook="MenuItem" />
                </SubMenu>
                <MenuItem prefix={<Shipping />} label="Item 11.2" data-hook="MenuItem" />
            </MenuItem>
        </Menu>
    );

    let counter = 0;
    cy.get(menuItem).then(elList => {
        recursiveClick(elList[0]);

        function recursiveClick(el) {
            counter += 1;
            console.log(counter);

            if (counter < elList.length - 1) {
                cy.wrap(el).click();
                recursiveClick(elList[counter]);
            }
        }
    });
    cy.get('@onClick').should('be.called');
});

it('open SubMenu when hover', () => {
    cy.viewport(1200, 800);
    mount(
        <Menu direction="vertical" data-hook="Menu">
            <MenuItem prefix={<Folder />} label={'Item 1'} data-hook="MenuItem" />
            <MenuItem label="Item 2" data-hook="MenuItem" />
            <MenuItem
                prefix={<Statistics />}
                label="Item 3"
                data-hook="MenuItem"
                subMenuProps={{ 'data-hook': 'subMenu1' }}
            >
                <SubMenu
                    prefix={<Folder />}
                    label="Item 3.1"
                    data-hook="subMenu2"
                    representItemProps={{ 'data-hook': 'MenuItem3' }}
                >
                    <MenuItem prefix={<Folder />} label={'Item 3.1 - 1'} data-hook="MenuItem4" />
                    <MenuItem label="Item 3.1 - 2" data-hook="MenuItem" />
                    <MenuItem label="Item 3.1 - 3" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 3.1 - 4" data-hook="MenuItem5" />
                    <MenuItem prefix={<Home />} label="Item 3.1 - 5" data-hook="MenuItem6" />
                    <MenuItem prefix={<RelatedApps />} label="Item 3.1 - 6" data-hook="MenuItem7" />
                    <MenuItem prefix={<Statistics />} label="Item 3.1 - 7" data-hook="MenuItem8" />
                </SubMenu>
            </MenuItem>
            <MenuItem label="Item 4" data-hook="MenuItem" />
            <MenuItem label="Item 5" data-hook="MenuItem" />
            <MenuItem prefix={<Shipping />} label="Item 6" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 7" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 7.1">
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 1'} data-hook="MenuItem" />
                    <MenuItem prefix={<Folder />} label={'Item 7.1 - 2'} data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 3" data-hook="MenuItem" />
                    <MenuItem label="Item 7.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 7.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 7.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 7.1 - 7" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 7.1 - 8" data-hook="MenuItem" />
                </SubMenu>
            </MenuItem>
            <MenuItem prefix={<Shipping />} label="Item 8" data-hook="MenuItem" />
            <MenuItem prefix={<Home />} label="Item 9" data-hook="MenuItem" />
            <MenuItem prefix={<RelatedApps />} label="Item 10" data-hook="MenuItem" />
            <MenuItem prefix={<Statistics />} label="Item 11" data-hook="MenuItem">
                <SubMenu prefix={<Folder />} label="Item 11.1">
                    <MenuItem prefix={<Folder />} label="Item 11.1 - 1" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 2" data-hook="MenuItem" />
                    <MenuItem label="Item 11.1 - 3" data-hook="MenuItem" />
                    <MenuItem prefix={<Shipping />} label="Item 11.1 - 4" data-hook="MenuItem" />
                    <MenuItem prefix={<Home />} label="Item 11.1 - 5" data-hook="MenuItem" />
                    <MenuItem prefix={<RelatedApps />} label="Item 11.1 - 6" data-hook="MenuItem" />
                    <MenuItem prefix={<Statistics />} label="Item 11.1 - 7" data-hook="MenuItem" />
                </SubMenu>
                <MenuItem prefix={<Shipping />} label="Item 11.2" data-hook="MenuItem" />
            </MenuItem>
        </Menu>
    );
    cy.get(menuItem).then(listEl => {
        cy.wrap(listEl[2])
            .realHover()
            .then(() => {
                cy.get('[data-hook="subMenu1"]').should('exist');
                cy.get('[data-hook="MenuItem3"]')
                    .realHover()
                    .then(() => {
                        cy.get('[data-hook="subMenu2"]').should('exist');
                    });
            });
    });
});

it('SubMenu do not overflow viewport width', () => {
    const viewportWidth = 500;
    cy.viewport(viewportWidth, 800);
    mount(
        <Menu direction="vertical" data-hook="Menu">
            <MenuItem label="Item 1" data-hook="MenuItem">
                <SubMenu
                    label="Item 1.1"
                    data-hook="subMenu"
                    representItemProps={{ 'data-hook': 'MenuItem1' }}
                >
                    <MenuItem label={'Item 3.1 - 1'} data-hook="MenuItem4" />
                </SubMenu>
            </MenuItem>
        </Menu>
    );
    cy.get('[data-hook="MenuItem"]')
        .realHover()
        .then(() => {
            cy.get('[data-hook="MenuItem1"]')
                .realHover()
                .then(() => {
                    cy.get('[data-hook="subMenu"]').then($el => {
                        const { right: subMenuRight } = $el[0].getBoundingClientRect();
                        expect(subMenuRight).lessThan(viewportWidth);
                    });
                });
        });
});

it('SubMenu do not overflow viewport height', () => {
    const viewportHeight = 500;
    cy.viewport(500, viewportHeight);
    mount(
        <Menu data-hook="Menu">
            <MenuItem label="Item 1" data-hook="MenuItem1">
                <SubMenu
                    label="Item 1.1"
                    representItemProps={{
                        'data-hook': 'MenuItem2'
                    }}
                >
                    <MenuItem label={'Item 3.1 - 1'} />
                    <MenuItem label={'Item 3.1 - 2'} />
                    <MenuItem label={'Item 3.1 - 3'} />
                    <MenuItem label={'Item 3.1 - 4'} />
                    <MenuItem label={'Item 3.1 - 5'} />
                    <MenuItem label={'Item 3.1 - 6'} />
                    <MenuItem label={'Item 3.1 - 7'} />
                    <MenuItem label={'Item 3.1 - 8'} />
                    <MenuItem label={'Item 3.1 - 9'} />
                    <MenuItem label={'Item 3.1 - 10'} />
                    <MenuItem label={'Item 3.1 - 11'} />
                    <SubMenu
                        label="Item 3.1 - 12"
                        representItemProps={{
                            'data-hook': 'MenuItem3'
                        }}
                    >
                        <MenuItem label={'Item 3.1 - 1'} />
                        <MenuItem label={'Item 3.1 - 2'} />
                        <MenuItem label={'Item 3.1 - 3'} />
                        <MenuItem label={'Item 3.1 - 4'} data-hook="MenuItem4" />
                    </SubMenu>
                </SubMenu>
            </MenuItem>
        </Menu>
    );
    cy.get('[data-hook="MenuItem1"]')
        .realHover()
        .then(() => {
            cy.get('[data-hook="MenuItem2"]')
                .realHover()
                .then(() => {
                    cy.get('[data-hook="MenuItem3"]')
                        .realHover()
                        .then(() => {
                            cy.get('[data-hook="MenuItem4"]').then(el => {
                                const { bottom } = el[0].getBoundingClientRect();
                                expect(bottom).lessThan(viewportHeight);
                            });
                        });
                });
        });
});

it('Menu display horizontal', () => {
    cy.viewport(800, 800);
    mount(
        <Menu direction="horizontal" data-hook="Menu">
            <MenuItem label="Item 1" data-hook="MenuItem">
                <SubMenu
                    label="Item 1.1"
                    data-hook="subMenu"
                    representItemProps={{ 'data-hook': 'MenuItem1' }}
                >
                    <MenuItem label={'Item 3.1 - 1'} data-hook="MenuItem4" />
                </SubMenu>
            </MenuItem>
        </Menu>
    );
    cy.get(menu).invoke('attr', 'class').should('contain', 'horizontal');
});

it('Menu display horizontal responsive, do not trigger horizontal scrollbar', () => {
    const viewportWidth = 800;
    cy.viewport(viewportWidth, 800);
    mount(
        <Menu direction="horizontal" data-hook="Menu">
            <MenuItem label="Item 1" data-hook="MenuItem">
                <SubMenu
                    label="Item 1.1"
                    data-hook="subMenu"
                    representItemProps={{ 'data-hook': 'MenuItem1' }}
                >
                    <MenuItem label={'Item 3.1 - 1'} data-hook="MenuItem4" />
                </SubMenu>
            </MenuItem>
            <MenuItem label={'Item 2'} data-hook="MenuItem2" />
        </Menu>
    );
    cy.get(menu).invoke('width').should('be.lessThan', viewportWidth);
});
