import { displayMarkets } from "./markets";
import { getList } from "../lib/utils/util"

// -------Display Markets-----
// Define a type for the display market items
export interface Market {
    id: number,
    name: string,
    key: string,
    handicap: string,
    mobile: boolean,
    selections: Selection[]
}

export interface Selection {
    id: number,
    name: string,
}

export interface Sport {
    id: number,
    name: string,
    frName: string,
    markets: Market[]
}

// -------Match-----
// Define a type for the match items
export interface MatchMarket {
    handicap: string,
    name: string,
    id: number,
    marketId: string,
    odds: Odds[]
}

export interface Odds {
    status: string,
    name: string,
    id: number,
    marketId: string,
    odds: number,
    outcomeId: number
}

export interface Match  {
    id:number,
    sportId: number,
    sportName: string,
    tournamanent: string,
    scheduled: string,
    country: string,
    home:  string,
    away: string,
    marketCount: number,
    markets: MatchMarket[]
}

// -------Betslip-----
// Define a type for the betslip items
export interface Betslip {
    id: number,
    home: string,
    away: string,
    market: string,
    selected: string,
    odd: number,
    oddId: string,
    schedule: string,
    type: string
}

// -------Menu-----
// Define a type for the menu items
export interface League {
    id: number,
    name: string,
    isFeatured: number
}

export interface Country {
    id: number,
    name: string,
    leagues: League[],
    regionSportId: string
}

export interface Menu {
    id: number,
    name: string,
    country: Country[]
}

// -------JetX-----
export interface JetX {
    url: string,
    gameCategory: string,
    gameName: string,
    token: string,
    portalName: string,
    returnUrl: string,
    lang: string
}

// -------Aviatrix-----
export interface Aviatrix {
    url: string,
    key: string,
    cid: string,
    lobbyUrl: string,
    isDemo:true,
    isFull:true,
}

// -------Flags-----
export interface Flags {
    [index: string]: string;
}

export type Fibs = {
    id: number,
    nth?: string,
    loading?: boolean
    time?: number,
    fibNum?: number
}
export type Msg = {
    fibNum:number,
    time:number
}
// -------Redux State-----
// Define a type for the slice state
export interface gamesState {
    matches: Match[],
    allMatches: Match[],
    jackpotMatches: Match[],
    betslip: Betslip[],
    jackpot: Betslip[],
    menu: Menu[],
    markets: Sport[],
    sportId: number,
    odds: number,
    singleMatch: Match,
    user: boolean,
    flags: {},
    type: string,

    err: string | null,
    num: number,
    computedFibs: Fibs[]
}

// Define the initial state using that type
export const initialState: gamesState = {
    matches: [],
    allMatches: [],
    jackpotMatches: [],
    betslip:[],
    jackpot:[],
    menu: [],
    markets: displayMarkets as unknown as Sport[],
    sportId: 10,
    odds:1,
    singleMatch: {} as Match,
    user: false,
    flags: getList() as Flags,
    type: 'Pre-Match',
    err: null,
    num:0,
    computedFibs: []

}