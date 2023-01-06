import _ from 'lodash';
import { header, tabs, tab, demo } from 'mgz-storybook/Sections';
import ReactDOM from 'react-dom';
import { Menu } from '../..';
import { CATEGORY } from '../../../../stories/storiesHierarchy';
import * as examples from '../examples';

const Demo = () => {
    return ReactDOM.createPortal(
        examples.MenuComponent('vertical', { position: 'fixed', right: 0, top: 0 }),
        document.getElementsByTagName('body')[0]
    );
};

export default {
    category: `${CATEGORY.LAYOUT}/Menu`,
    storyName: 'Sticky Right',
    component: Menu,
    componentPath: '../..',

    sections: [
        header(),
        tabs([
            tab({
                title: 'Design',
                sections: [
                    demo({
                        title: 'Demo',
                        component: <Demo />
                    })
                ]
            })
        ])
    ]
};
