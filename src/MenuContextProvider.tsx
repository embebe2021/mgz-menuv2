import React, { useContext, useMemo } from 'react';

interface MenuContextInterface {
    direction: 'vertical' | 'horizontal';
}

export const MenuContext = React.createContext<MenuContextInterface>({
    direction: 'vertical',
});

type Props = MenuContextInterface & {
    children: React.ReactNode;
};

export function MenuContextProvider(props: Props) {
    const { children, direction } = props;

    const value = useMemo(
        () => ({
            direction,
        }),
        [direction]
    );

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useMenuContext = () => useContext(MenuContext);
