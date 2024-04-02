"use client"

import React, { useEffect, useMemo, useState } from 'react'
import CasinoSidebar from '../components/partials/CasinoSidebar';
import { debounce } from 'lodash';


type CasinoType = { image: string, name: string }

const Casino = () => {

    const [query, setQuery] = useState<string>("");
    const casinoGames: CasinoType[] = [
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs10egrich.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name: 'Queen of Gods',
        },
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs20amuleteg.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name: 'Fortune of Gaza',
        },
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswayszombcarn.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name: 'Zombie Carnival',
        },
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs20cleocatra.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name: 'Cleo Catra',
        },
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs20gobnudge.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name: 'Goblin Heist Powernudge',
        },
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs20drtgold.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name: 'Drill That Gold',
        },
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswayslions.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name: '5 Lions Megaways',
        },
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswaysbbb.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name: 'Big Bass Bonanza Megaways',
        },
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswaysbufking.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name: 'Buffalo King Megaways',
        },
        {
        image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswaysxjuicy.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
        name:  'Extra Juicy Megaways',
        }
    ];
 
    let filteredGames: CasinoType[] = [];

    if (query !== "") { 
        filteredGames = casinoGames.filter((el: CasinoType) => el.name.toLowerCase().includes(query.toLowerCase()) );
    } else {
        filteredGames = casinoGames;
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const debounceChangeHandler =  useMemo(
        () => debounce(changeHandler,300),
    []);

    useEffect(() => {
        return () => {
        debounceChangeHandler.cancel()
        }
    }, [debounceChangeHandler])

    return (
        <div className="md:flex gap-2 p-2">
            <div className="md:flex gap-2 bg-dark-bg text-white">

            {/* ---Sidebar--- */}
            <div className="hidden lg:block lg:w-48 ">
                <CasinoSidebar />
            </div>

            {/* ---Main--- */}
            <div className="lg:w-fit  mb-4">

            <div className="flex py-2 mb-2">
                <input type="text" className="form-control lg:w-96" placeholder='Search Games' onChange={ debounceChangeHandler}/>
            </div>

            <div className=" grid  grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 ">

                    {/* ----Casino Game----- */}
                    { [...Array(filteredGames.length)].map((x, i) => {
                    return <div className="relative dashed-border" key={ `c1${i}`}>
                        
                        <img src={ filteredGames[i].image } alt={filteredGames[i].name} className="w-full rounded object-cover"/>
                        <div  className="py-2.5 text-sm">
                            <i className="icofont-shield-alt"></i>
                            <span>{ filteredGames[i].name }</span>
                        </div>
                    </div> } )
                    }
                    { [...Array(filteredGames.length)].map((x, i) => {
                    return <div className="relative dashed-border" key={ `c2${i}`}>
                        <img src={ filteredGames[i].image } alt={filteredGames[i].name} className="w-full rounded object-cover"/>
                        <div  className="py-2.5 text-sm">
                            <i className="icofont-shield-alt"></i>
                            <span>{ filteredGames[i].name }</span>
                        </div>
                    </div> } )
                    }

            </div>
            </div>

            </div>
        </div>
    )
}

export default Casino