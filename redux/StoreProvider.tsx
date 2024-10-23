"use client";

import { Provider } from "react-redux";
import React, { useRef } from 'react'
import { createStore, StoreType } from "./store";

function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {

    
    const storeRef = useRef<StoreType | null>(null);

    if(!storeRef.current) {
        storeRef.current = createStore();
    }

    return (
        <Provider store={storeRef.current}>{children}</Provider>
    )
}

export default StoreProvider
