import React, { useEffect, useRef, useState } from 'react';
export default ({ children }) => {
    const ref = useRef();
    const [isPreLoad, setIsPreLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsPreLoad(false);
        }, 200);
    }, [])
    return (<div ref={ref} className={isPreLoad ? 'is-preload' : ''}>
        {children}
    </div>);
}