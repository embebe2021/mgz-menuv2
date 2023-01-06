import _ from 'lodash';
import { header, tabs, tab, demo } from 'mgz-storybook/Sections';
import ReactDOM from 'react-dom';
import { Menu } from '../..';
import { CATEGORY } from '../../../../stories/storiesHierarchy';
import * as examples from '../examples';

const Demo = () => {
    return ReactDOM.createPortal(
        examples.MenuComponent('horizontal', { position: 'fixed', left: 0, bottom: 0, width: '100%' }),
        document.getElementsByTagName('body')[0]
    );
};

export default {
    category: `${CATEGORY.LAYOUT}/Menu`,
    storyName: 'Sticky Bottom',
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
