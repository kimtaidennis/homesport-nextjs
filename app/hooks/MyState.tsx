"use client"
import { Betslip, Flags, Match, Menu, Sport,Fibs } from '@/models/types';
import { useAppSelector } from '../redux/hooks';


export const useMyState = ( ) => {
    const flags: Flags = useAppSelector( (state) => state.feeds.flags);
    const jackpotMatches: Match[] = useAppSelector( (state) => state.feeds.jackpotMatches);
    const sportsMarkets: Sport[] = useAppSelector( (state) => state.feeds.markets);
    const match: Match = useAppSelector( (state) => state.feeds.singleMatch);
    const sportId: number = useAppSelector( (state) => state.feeds.sportId);
    const feeds: Match[] = useAppSelector( (state) => state.feeds.matches);
    const menu: Menu[] = useAppSelector( (state) => state.feeds.menu);
    const jackpot:Betslip[] = useAppSelector( (state) => state.feeds.jackpot);
    const betslip: Betslip[] = useAppSelector( (state) => state.feeds.betslip);
    // const token:boolean = useAppSelector(state => state.auth.user);
    const odds: number = useAppSelector(state => state.feeds.odds);
    const type: string = useAppSelector(state => state.feeds.type);
    // const err: string|null = useAppSelector(state => state.auth.err);
    // const num: number = useAppSelector(state => state.auth.num);
    // const computedFibs: Fibs[] = useAppSelector(state => state.auth.computedFibs);

    return {
        match,
        flags,
        jackpotMatches,
        sportsMarkets,
        sportId,
        feeds,
        menu,
        jackpot,
        betslip,
        // token,
        odds,
        type,
        // err,
        // num,
        // computedFibs
    }
}
