import { Sport } from "@/models/types"

type Props = { sport: Sport }

export default function Market({ sport } : Props) {
    return (
        <div className="flex items-center dashed-border py-2  mt-1 px-2 md:px-0 text-sm">
            <div className="w-1/2">
                <span className="font-normal">{ sport.name }</span>
            </div>
            <div className="w-1/2 text-center">
                {
                    sport.markets.map( el =>  {

                        if(el.id === 2) {
                            return <div key={el.id.toString()}  className="flex flex-col">
                                <p>{el.name}</p>
                                <div className="grid grid-cols-3 gap-3 mt-1">
                                    {
                                        el.selections.map( elem => 
                                            <span key={elem.id.toString()} className="">{ elem.name }</span>
                                        )
                                    }
                                </div>
                            </div>
                        } else {
                            return '';
                        }
                        
                    })
                }
            </div>
        </div>
    )
}