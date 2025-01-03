'use client'
import React, { useRef } from "react"
import { Provider } from "react-redux"
import { store, AppStore } from "@/lib/redux/store"

export default function StoreProvider({children}:{
    children: React.ReactNode
}){
    const storeRef = useRef<AppStore>();
    if(!storeRef.current){
        // create the store instance the first time this renders
        storeRef.current = store();
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}