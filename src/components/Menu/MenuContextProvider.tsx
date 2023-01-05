import React, { useCallback, useContext, useMemo, useState } from 'react';

export interface MenuContextInterface {
    direction: 'horizontal' | 'vertical';
    animate: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'pulse' | undefined;
}

export interface MenuContextSelectInterface {
    selectedId?: string;
    setSelectedId?: (id: string) => void;
}

export const MenuContext = React.createContext<MenuContextInterface & MenuContextSelectInterface>({
    direction: 'vertical',
    animate: 'fadeIn',
});

export type MenuContextProviderProps = MenuContextInterface & {
    children: React.ReactNode;
};

export function MenuContextProvider(props: MenuContextProviderProps) {
    const { children, direction, animate } = props;

    const value = useMemo(
        () => ({
            direction,
            animate,
        }),
        [direction, animate]
    );

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useMenuContext = () => useContext(MenuContext);
