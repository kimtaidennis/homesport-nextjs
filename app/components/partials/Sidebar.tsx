"use client"

import { useMyState } from '@/app/hooks/MyState';
import { useAppStore } from '@/app/redux/hooks';
import { addMenu } from '@/app/redux/slices/feeds.slice';
import { getMenu } from '@/services/api';
import React, { useEffect } from 'react'

const Sidebar = () => {

    const { menu, sportId:id } = useMyState();
    const store = useAppStore()

    useEffect(() => {
        getMenu().then( res => store.dispatch(addMenu(res)));
    }, [store])
    
    return (
        <ul className=" list-none">
            {
                menu.map( el => <li className={ `font-normal hover:text-yellow p-1 ${ id === el.id ? 'text-yellow' : '' }`} key={el.id.toString()} >{ el.name}</li>)
            }
        </ul>
    )
}

export default Sidebar