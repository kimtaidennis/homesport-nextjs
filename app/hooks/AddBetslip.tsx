import { Betslip, Match } from '@/models/types';
import { addBestlip, autoSelectJackpot } from '../redux/slices/feeds.slice';
import { useAppDispatch } from '../redux/hooks';

export const useAddBetslip = ( ) => { 
	const dispatch = useAppDispatch();

	const addMatch = (match:Match, market:string, selected: string, odd: number, oddId: string,type: string) => {
    let obj: Betslip = {
      id: match.id,
      home: match.home,
      away: match.away,
      market: market,
      selected: selected,
      odd: odd,
      oddId: oddId,
      schedule: match.scheduled,
      type: type
    }
    dispatch( addBestlip(obj) );
  }

  const autoSelectMatch = (match:Match, market:string, selected: string, odd: number, oddId: string,type: string) => {
    let obj: Betslip = {
      id: match.id,
      home: match.home,
      away: match.away,
      market: market,
      selected: selected,
      odd: odd,
      oddId: oddId,
      schedule: match.scheduled,
      type: type
    }
    dispatch( autoSelectJackpot(obj) );
  }

  const possibleWin = (amount: number, odds: number): number => {
    return Math.ceil( odds * amount);
  }

  return { 
    addMatch,
    autoSelectMatch,
    possibleWin
  }

}