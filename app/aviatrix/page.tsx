import { Aviatrix } from '@/models/types';
import React from 'react'

const AviatriX = () => {
    const aviatrix: Aviatrix = {
        url: 'https://game.aviatrix.bet/',
        key: 'aee2e5f0-a356-45c9-abe9-c28b502fee98',
        cid:'rahisibet',
        lobbyUrl: 'https://rahisibet.com',
        isDemo:true,
        isFull:true,
    }
    const url: string = `${ aviatrix.url }?cid=${ aviatrix.cid }&productId=nft-aviatrix&lobbyUrl=${ aviatrix.lobbyUrl }&isDemo=${ aviatrix.isDemo }&lang=en`;

    return (
        <div className="iframe-wrapper h-screen w-screen">
            <iframe id="aviatrixiframe" title="Aviatrix Game" src={ url } allow="autoplay;clipboard-write;fullscreen" className="w-full h-full lg:h-5/6"></iframe>
        </div>
    )
}

export default AviatriX