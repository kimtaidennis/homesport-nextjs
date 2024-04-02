import { useAddBetslip } from "@/app/hooks/AddBetslip";
import { useMyState } from "@/app/hooks/MyState";
import { Match } from "@/models/types";
import moment from "moment";

type Props = { match: Match }

export default function Main({ match}: Props) {
    
    const { flags,jackpot }  = useMyState()
    const { addMatch } = useAddBetslip();

    const filterMatch = () => {
        return match.markets.find( el => el.marketId === '2') || null
    }
    
    return (
        <div className="dashed-border px-2 py-2 md:px-0 flex items-center">
            <div className="flex flex-col w-1/2">
                <div>
                    <span className='text-xs text-light-blue'>
                        {/* <ReactCountryFlag countryCode={ flags[match.country]} svg className="mr-2 mb-1"/> */}
                        {/* <Moment format='hh:ss • DD/MM'>{ moment(`${match.scheduled}`) }</Moment> */}
                        { moment(match.scheduled).format('D/MM HH:mm') }
                    </span>
                </div>
                <span>{ match.home }</span>
                <span>{ match.away }</span>
            </div>
            <div className="w-1/2">
                <div className={`markets-header jackpot`}>
                    <div className="grid grid-cols-3 gap-3 text-center">
                    {
                        filterMatch()!.odds.map( (elem : any) => {  
                            return  <span key={elem.id.toString()} className={`py-2.5 rounded-md  ${ jackpot.findIndex(g => g.oddId === elem!.id.toString()) > -1 ? ' bg-yellow text-dark-bg' : 'bg-dark-op text-light-blue'}`} onClick={ () => addMatch(match,filterMatch()!.name,elem.name,elem.odds,elem.id.toString(),'jackpot')}>{ elem.odds.toFixed(2) }</span>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>  
    )
}