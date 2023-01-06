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
    animate: 'fadeIn'
});

export type MenuContextProviderProps = MenuContextInterface & {
    children: React.ReactNode;
};

export function MenuContextProvider(props: MenuContextProviderProps) {
    const { children, direction, animate } = props;
    const [selectedId, setSelectedId] = useState<string>('');

    const handleSelected = useCallback(id => setSelectedId(id), [setSelectedId]);

    const value = useMemo(
        () => ({
            direction,
            animate,
            selectedId,
            setSelectedId: handleSelected
        }),
        [direction, animate, selectedId, handleSelected]
    );

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useMenuContext = () => useContext(MenuContext);
