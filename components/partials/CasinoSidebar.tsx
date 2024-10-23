import React from 'react'

const CasinoSidebar = () => {
    const list = ['Popular', 'New', 'New Games', 'Drops and Wins', 'Slots', 'Table Games', 'Live Casino', 'Crash Games','Livespins', 'Blackjacks','Jackpot Slots', 'All Games'
    ];


    return (
        <ul className="list-none lg:max-w-[180px] lg:min-w-[180px]">
            {
                list.map( (el,i) => <li key={ i } className={ `font-normal hover:text-yellow  p-1 ${ i === 0 ? 'text-yellow' : '' }`}>{ el }</li>)
            }   
        </ul>
    )
}

export default CasinoSidebar