import { Betslip, Match,Menu,gamesState,initialState } from '@/models/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const feedSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setupGames (state, action: PayloadAction<Match[]>) {
            state.allMatches = [...action.payload];
            state.matches = [...state.allMatches];
        },
        searchTeam(state, action: PayloadAction<string>) {
            if(action.payload === '')
            {
                state.matches = [...state.allMatches];
            } else {
                var regexLiteral = new RegExp(`${action.payload}`,'i');
                state.matches =  state.allMatches.filter( el => regexLiteral.test(el.home) || regexLiteral.test(el.away) )
            }
        },
        setupJackpotGames (state, action: PayloadAction<Match[]>) {
            state.jackpotMatches = [...action.payload];
        },
        addBestlip (state, action: PayloadAction<Betslip>):gamesState { 
            if(action.payload.type === 'pre-match') {
                if(state.betslip.findIndex((item) => item.id === action.payload.id) > -1) {
                    const index = state.betslip.findIndex((item) => item.id === action.payload.id);
                    if(state.betslip[index].oddId === action.payload.oddId ) { 
                        return {
                            ...state,
                            betslip: state.betslip.filter((item) => item.id !== action.payload.id)
                        };
                    } else {
                        return { 
                            ...state,
                            betslip: state.betslip.map( el => {
                                if(el.id !== action.payload.id) {
                                    return el;
                                } else {
                                    return {
                                        ...el,
                                        ...action.payload
                                    }
                                }
                            })
                        }
                    }
                } else {
                    return {
                        ...state, 
                        betslip: [
                            ...state.betslip,action.payload
                        ]
                    };
                }
            } else {
                if(state.jackpot.findIndex((item) => item.id === action.payload.id) > -1) {
                    const index = state.jackpot.findIndex((item) => item.id === action.payload.id);
                    if(state.jackpot[index].oddId === action.payload.oddId ) { 
                        return { ...state, jackpot: state.jackpot.filter((item) => item.id !== action.payload.id) };
                    } else {
                        return { 
                            ...state,
                            jackpot: state.jackpot.map( el => {
                                if(el.id !== action.payload.id) {
                                    return el;
                                } else {
                                    return {
                                        ...el,
                                        ...action.payload
                                    }
                                }
                            })
                        }
                    }
                } else {
                    return {
                        ...state, 
                        jackpot: [
                            ...state.jackpot,action.payload
                        ]
                    };
                }
            }
        },
        addBetslipType (state, action: PayloadAction<string>) {
            return {
                ...state,
                type: action.payload
            }
        },
        autoSelectJackpot(state, action: PayloadAction<Betslip>):gamesState {
            if(state.jackpot.findIndex((item) => item.id === action.payload.id) > -1) {
                const index = state.jackpot.findIndex((item) => item.id === action.payload.id);
                if(state.jackpot[index].oddId === action.payload.oddId ) { 
                    return { ...state };
                } else {
                    return { 
                        ...state,
                        jackpot: state.jackpot.map( el => {
                            if(el.id !== action.payload.id) {
                                return el;
                            } else {
                                return {
                                    ...el,
                                    ...action.payload
                                }
                            }
                        })
                    }
                }
            } else {
                return {
                    ...state, 
                    jackpot: [
                        ...state.jackpot,action.payload
                    ]
                };
            }
        },
        updateSportId (state, action: PayloadAction<number>): gamesState {    
            return {
                ...state,
                sportId: action.payload
            }
        },
        deleteBetslip (state, action: PayloadAction<number>): gamesState { 
            return {
                ...state,
                betslip: state.betslip.filter((item) => item.id !== action.payload)
            };
        },
        deleteJackpotSlip (state, action: PayloadAction<number>): gamesState { 
            return {
                ...state,
                jackpot: state.jackpot.filter((item) => item.id !== action.payload)
            };
        },
        clearBetslip (state): gamesState {
            return {
                ...state,
                betslip:[]
            }
        },
        clearJackpotSlip (state): gamesState {
            return {
                ...state,
                jackpot:[]
            }
        },
        getSingleMatch(state,action: PayloadAction<number>): gamesState { 
        
            return {
                ...state,
                singleMatch: state.matches.find( el => el.id === action.payload) || {} as Match
            }
        },
        addMenu (state, action: PayloadAction<Menu[]>) {
            return {
                ...state, 
                menu: [...action.payload]
            }
        },
    }
});

export const { 
    setupGames, 
    setupJackpotGames,
    addBestlip, 
    updateSportId, 
    deleteBetslip, 
    addMenu, 
    clearBetslip, 
    getSingleMatch,
    deleteJackpotSlip,
    clearJackpotSlip,
    autoSelectJackpot,
    addBetslipType,
    searchTeam
} = feedSlice.actions;

export default feedSlice.reducer;