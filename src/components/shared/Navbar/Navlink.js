import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navlink = ({ href, children }) => {
    const path = usePathname();
    const active = path === href;

    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { active })
    );

    return (
        <Link href={href}>
            {childrenWithProps}
        </Link>

        
    );
};

export default Navlink;
