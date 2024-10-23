import React from 'react'

const FooterNav = () => {
    const type = 'Jackpot';
    return (
        <div className='block md:hidden bg-dark-op text-white text-sm fixed inset-x-0 bottom-0 py-2'>
            <div className="flex justify-around items-center">
                <div className="flex flex-col items-center justify-center">
                    <i className="icofont-ui-home !mr-0"></i>
                    <span className="mt-1">Home</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <i className="icofont-diamond !mr-0"></i>
                    <span className="mt-1">Live</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className=" bg-yellow rounded-full h-8 w-8 flex  items-center justify-center text-dark-bg">{ type === 'Jackpot' ? 0 : 0 }</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <i className="icofont-link-alt !mr-0"></i>
                    <span className="mt-1">Bets</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <i className="icofont-ui-user !mr-0"></i>
                    <span className="mt-1">Profile</span>
                </div>
            </div>
        </div>
    )
}

export default FooterNav