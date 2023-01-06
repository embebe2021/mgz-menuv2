import React, { useContext } from 'react';

export const SubMenuContext = React.createContext<boolean>(false);

type SubMenuContextProps = {
    children: React.ReactNode;
    isUnderSubMenu?: boolean;
};

export function SubMenuContextProvider(props: SubMenuContextProps) {
    const { children, isUnderSubMenu } = props;

    return <SubMenuContext.Provider value={!!isUnderSubMenu}>{children}</SubMenuContext.Provider>;
}

export const useSubMenuContext = () => useContext(SubMenuContext);
