import React, { useContext } from 'react';

export const SubMenuContext = React.createContext<boolean>(false);

export type SubMenuProps = {
    children: React.ReactNode;
    isSubMenu?: boolean;
};

export function SubMenuContextProvider(props: SubMenuProps) {
    const { children, isSubMenu } = props;

    return <SubMenuContext.Provider value={!!isSubMenu}>{children}</SubMenuContext.Provider>;
}

export const useSubMenuContext = () => useContext(SubMenuContext);
