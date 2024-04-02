"use client"

import BetslipSection from '@/app/components/partials/Betslip';
import Sidebar from '@/app/components/partials/Sidebar';
import { useAddBetslip } from '@/app/hooks/AddBetslip';
import { useMyState } from '@/app/hooks/MyState';
import { useAppDispatch } from '@/app/redux/hooks';
import { addBetslipType, getSingleMatch } from '@/app/redux/slices/feeds.slice';
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react';


const SingleMatch = () => {

    const params = useParams<{ id:string }>()
    const dispatch = useAppDispatch();
    const router = useRouter()

    const { match,betslip } = useMyState();
    const { addMatch } = useAddBetslip();
    
    dispatch( addBetslipType('Pre-Match'));

    useEffect(() => {
        dispatch( getSingleMatch( parseInt(params.id!) ) );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id])

    return (
        <>
            <div className="md:flex justify-between gap-3 md:p-3">
                <div className="md:flex gap-3 flex-1">

                    {/* ---Sidebar--- */}
                    <div className="hidden lg:block lg:w-48">
                        <Sidebar />
                    </div>

                    {/* ---Main--- */}
                    <div className="px-2 flex flex-col flex-1">
                    {
                        Object.keys(match).length > 0 && <>
                            <div className="flex dashed-border py-2.5">
                                <p onClick={() => router.back() } className='cursor-pointer w-24 text-light-blue'>
                                    <i className="icofont-bubble-left !mr-0"></i>
                                    <span className="font-semi-bold">Back</span>
                                </p>
                                <p className="font-semi-bold ">
                                    { match.sportName }, { match.country } • { match.tournamanent}
                                </p>
                            </div>

                            <div className="flex justify-between items-center py-2 dashed-border">
                                <div className="flex flex-col items-center">
                                    <i className="icofont-cop-badge"></i>
                                    <p className='font-semi-bold'>{ match.home }</p>
                                </div>
                                <div className="team">
                                {/* <Moment format='hh:ss • DD/MM'>{ moment(`${match.scheduled}`) }</Moment> */}
                                    <p className='time'>{ match.scheduled }</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <i className="icofont-cop-badge"></i>
                                    <p className='font-semi-bold'>{ match.away }</p>
                                </div>
                            </div>

                            <br />
                            
                            {  match && match.markets.map( el => {
                                    return <div className="flex flex-col dashed-border py-2" key={el.id}>
                                        <p className="py-1.5">
                                            <i className="icofont-shield-alt"></i>
                                            <span className="font-semi-bold">{ el.name }</span>
                                        </p>
                                        <div className={`grid gap-3 ${el.odds.length > 2 ? ' grid-cols-2 md:grid-cols-3' : ' grid-cols-2'} `}>

                                            { el.odds.map( elem => {
                                                return <div className={`py-2.5 bg-dark-op rounded-md px-2  flex justify-between ${ betslip.findIndex(g => g.oddId === elem.id.toString()) > -1 ? 'bg-yellow text-dark-bg' : 'text-light-blue'}`} key={elem.id} onClick={ () => addMatch(match,el.name,elem.name,elem.odds,elem.id.toString(),'pre-match')} >
                                                    <span className='w-4/6 truncate'>{ elem.name }</span>
                                                    <span className='w-1/6 text-right'>{ elem.odds.toFixed(2) }</span>
                                                </div>
                                            }) }
                                        </div>
                                    </div>;
                                })  
                            }
                        </>
                    }                        
                    </div>

                </div>

                {/* ---Betslip--- */}
                <div className="betslip hidden lg:block lg:w-96">
                    <BetslipSection type="Pre-Match" />
                </div>

            </div>
        </>
    )
}

export default SingleMatch