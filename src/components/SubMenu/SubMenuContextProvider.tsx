import React, { useContext } from 'react';

export const SubMenuContext1 = React.createContext<boolean>(false);

type Props = {
    children: React.ReactNode;
    isSubMenu?: boolean;
};

export function SubMenuContext1Provider(props: Props) {
    const { children, isSubMenu } = props;

    return <SubMenuContext1.Provider value={!!isSubMenu}>{children}</SubMenuContext1.Provider>;
}

export const useSubMenuContext = () => useContext(SubMenuContext1);
