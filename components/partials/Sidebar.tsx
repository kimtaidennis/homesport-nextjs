"use client"

import { useMyState } from '@/hooks/MyState';
import { useAppStore } from '@/redux/hooks';
import { addMenu } from '@/redux/slices/feeds.slice';
import { getMenu } from '@/services/api';
import React, { useEffect } from 'react'

const Sidebar = () => {

    const { menu, sportId:id } = useMyState();
    const store = useAppStore()

    useEffect(() => {
        getMenu().then( res => store.dispatch(addMenu(res)));
    }, [store])
    
    return (
        <ul className="list-none lg:max-w-[180px] lg:min-w-[180px]">
            {
                menu.map( el => <li className={ `font-normal hover:text-yellow px-2 py-2.5 ${ id === el.id ? 'text-yellow' : '' }`} key={el.id.toString()} >{ el.name}</li>)
            }
        </ul>
    )
}

export default Sidebar