import React, { useContext, useMemo } from 'react';
import { type MenuProps } from './Menu';

export interface MenuContextInterface {
    direction: MenuProps['direction'];
    animate: MenuProps['animate'];
}

export const MenuContext = React.createContext<MenuContextInterface>({
    direction: 'vertical',
    animate: 'fadeIn'
});
type MenuContextProviderProps = MenuContextInterface & {
    children: React.ReactNode;
};

export function MenuContextProvider(props: MenuContextProviderProps) {
    const { children, direction, animate } = props;

    const value = useMemo(
        () => ({
            direction,
            animate
        }),
        [direction, animate]
    );

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useMenuContext = () => useContext(MenuContext);
