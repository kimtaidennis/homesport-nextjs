import React from 'react'
import { JetX } from "@/models/types"

const JetX = () => {
    const jetx: JetX = {
        url:'https://eu-staging.ssgportal.com/GameLauncher/Loader.aspx',
        gameCategory:'JetX',
        gameName:'JetX',
        token:'DEMO',
        portalName:'demo',
        returnUrl:'https://rahisibet.com',
        lang:'en'
    }

    const url: string = `${ jetx.url }?GameCategory=${ jetx.gameCategory }&GameName=${ jetx.gameName }&Token=${ jetx.token }&PortalName=${ jetx.portalName }&Lang=${ jetx.lang }`;

    return (
        <div className="iframe-wrapper h-screen w-screen">
            <iframe id="jetxiframe" title="JetX Game" src={ url } allow="autoplay;clipboard-write;fullscreen" className="w-full h-full"></iframe>
        </div>
    )
}

export default JetX