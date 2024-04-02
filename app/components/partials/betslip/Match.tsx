import { Betslip } from "@/models/types";
import moment from "moment";

type Props = { match: Betslip; deleteBetslip: any };

export default function Match( { match, deleteBetslip }: Props ) {
  return (
    <div className='text-sm py-2 dashed-border' key={`${match.id.toString()}`}>
        <div className="match-info flex justify-between ">
            <p className='font-semi-bold'>{`${match.home} vs ${match.away}`}</p>
            <span className='text-yellow' onClick={ () => deleteBetslip(match.id) }>
              <i className="icofont-close-squared-alt"></i>
            </span>
        </div>

        { match.type === 'pre-match' && <p className=''>{` ${match.market} • ${match.selected}`}</p> }
        
        { match.type === 'jackpot' && <p className=''>Pick • {` ${match.selected}`}</p> }

        { 
          match.type === 'pre-match' && <div className='text-light-blue text-xs flex justify-between'>
                <span className='time'>
                    Starts { moment(match.schedule).format('D/MM HH:mm') }
                    </span>
                <span>{ match.odd.toFixed(2) }</span> 
            </div>
        }
    </div>
  )
}