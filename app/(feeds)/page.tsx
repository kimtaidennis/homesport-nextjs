"use client"
import { useEffect, useRef, useState } from "react";
import { useMyState } from "../hooks/MyState";
import { useAppStore } from "../redux/hooks";
import { getSport } from '@/services/api';
import { addBetslipType, searchTeam, setupGames } from "../redux/slices/feeds.slice";
import Sidebar from "../components/partials/Sidebar";
// import TopSidebar from "./components/partials/TopSidebar";
import Carousel from "../components/partials/Carousel";
import { Sport } from "@/models/types";
import Market from "../components/partials/feeds/Market";
import Main from "../components/partials/feeds/Main";
import Countries from "../components/partials/feeds/Countries";
import BetslipSection from "../components/partials/Betslip";

export default function Home() {

	const [tab,setTab] = useState('featured');

	const spid: number = 10;
	const initialized = useRef(false);
	const store = useAppStore();
	
	if (!initialized.current) {
		initialized.current = true;
	}

	useEffect( () =>  {
		setTab('featured');
		getSport(spid).then( res => store.dispatch( setupGames(res))).catch( err => console.log('Error--',err) );
	}, [spid,store]);

	const { feeds, sportsMarkets, sportId } = useMyState();
	const sport = sportsMarkets.find( el => el.id === sportId) as Sport;

	return (
		<div className="md:flex gap-3 md:p-2">

			<div className="md:flex gap-2 sm:w-full md:w-full">
				<div className="sidebar hidden lg:block">
					<Sidebar />
				</div>

				{/* <TopSidebar /> */}

				{/* ---Main--- */}
				<div className="main-home mb-5 lg:w-fit sm:w-full md:w-full">
					<Carousel />

					{/* ---Quick links--- */}
					<div className="md:flex md:justify-between md:items-center px-2 md:px-0 border-b border-b-dark-border border-dashed py-2">
						<div className="py-2 space-x-3 ">
							<span className={ `${tab === 'featured' ? 'text-yellow' : ''}`} onClick={ () => setTab('featured') } >Featured</span>
							<span className={ `${tab === 'today' ? 'text-yellow' : ''}`} onClick={ () => setTab('today') } >Today</span>
							<span className={ `${tab === 'upcoming' ? 'text-yellow' : ''}`} onClick={ () => setTab('upcoming') } >Upcoming</span>
							<span className={ `${tab === 'countries' ? 'text-yellow' : ''}`} onClick={ () => setTab('countries') } >Countries</span>
						</div>
						<div className=''>
							<input type="text" className="form-control" placeholder='Search Team' onChange={ (e) => store.dispatch( searchTeam(e.target.value) )}/>
						</div>
					</div>

					{ tab !== 'countries' &&
						<>
							{/* ---Markets--- */}
							{  typeof sport === 'object' &&  <Market sport={sport}/> }

							{/* ---Matches--- */}
							{ feeds.length > 0 && typeof sport === 'object' && feeds.map( x => <Main key={ x.id.toString() }  match={x} markets={ sport.markets }/>) }
						</>
					}
					
					{ tab === 'countries' && <Countries /> }

				</div>
			</div>

			<div className="betslip hidden lg:block">
				<BetslipSection type='Pre-Match'/>
			</div>
		</div>
	);
}
