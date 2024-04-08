"use client"

import React, { useEffect } from 'react'
import Sidebar from '@/app/components/partials/Sidebar'
import { useAppDispatch } from '@/app/redux/hooks';
import { useAddBetslip } from '@/app/hooks/AddBetslip';
import { Match, Sport } from '@/models/types';
import { addBetslipType, setupJackpotGames } from '@/app/redux/slices/feeds.slice';
import { getJackpot } from '@/services/api';
import Market from '@/app/components/partials/jackpot/Market';
import Main from '@/app/components/partials/jackpot/Main';
import { useMyState } from '@/app/hooks/MyState';
import BetslipSection from '@/app/components/partials/Betslip';

const Jackpot = () => {

    const dispatch = useAppDispatch();
    const { jackpotMatches:feeds, sportsMarkets } = useMyState();
    const { autoSelectMatch } = useAddBetslip();
    const sport = sportsMarkets.find( (el: { id: number; }) => el.id === 10 ) as Sport;

    dispatch( addBetslipType('Jackpot'));

    const autoSelect = () => {
        feeds.forEach( (el: Match) => {
            let ind = Math.floor(Math.random() * 3) + 1;
            const market = el.markets.find( el => el.marketId === '2');
            
            if( market ) {
                market.odds.forEach( arg => {
                    if( arg.outcomeId === ind ) {
                        autoSelectMatch( el,market.name,arg.name,arg.odds,arg.id.toString(),'jackpot' );
                    }
                });
            }
        });
    }

    useEffect( () =>  {
        getJackpot().then( res => dispatch( setupJackpotGames(res))).catch( err => console.log('Error--',err) );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return (
        <div className="md:flex  gap-3 md:p-2">

            <div className="md:flex gap-2 md:full">
                {/* ---Sidebar--- */}
                <div className="sidebar hidden lg:block ">
                    <Sidebar />
                </div>

                {/* ---Main--- */}
                <div className="main-home mb-5 lg:w-fit sm:w-full md:w-full">
                    {/* ---Carousel--- */}
                    <img src="/images/image3.png" alt="Home" className="w-full md:rounded-md"/>
                    
                    {/* Auto Select */}
                    <div className="md:py-2.5 text-right p-2 md:px-0 dashed-border ">
                        <button className="px-8 py-2 bg-yellow text-sm font-medium text-dark-bg rounded-md" onClick={ autoSelect }>Auto Select</button>
                    </div>

                    {/* ---Markets--- */}
                    {  typeof sport === 'object' &&  <Market sport={sport}/> }

                    {/* ---Matches--- */}
                    { feeds.length > 0 && typeof sport === 'object' && feeds.map( (x: Match) => <Main key={ x.id.toString() }  match={x} />) }
                    
                </div>

            </div>            

            <div className="betslip hidden lg:block">
                <BetslipSection type='Jackpot'/>
            </div>
        </div>
    )
}

export default Jackpot

function MyState(): { jackpotMatches: any; sportsMarkets: any; } {
    throw new Error('Function not implemented.');
}
