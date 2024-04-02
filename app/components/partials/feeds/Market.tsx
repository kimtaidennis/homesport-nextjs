import { Sport } from "@/models/types"


type Props = { sport: Sport }

export default function Market({ sport } : Props) {
  return (
    <div className="px-2 md:px-0 flex justify-between dashed-border py-2">
        <div className="py-2 w-1/2 md:w-auto">
            <span className="font-semibold">{ sport.name }</span>
        </div>
        <div className="flex md:justify-end gap-5 w-1/2 md:w-auto">
            {
                sport.markets.map( el => 
                    <div key={el.id.toString()}  className={`text-center ${el.selections.length === 3 ? 'w-full lg:w-[13rem]' : 'lg:w-[8.4rem]'} ${ el.mobile ? '' : 'hidden lg:block' }`}>
                        <p className="mb-1">{ el.name }</p>
                        <div className="flex justify-between gap-2">
                            {
                                el.selections.map( elem => 
                                    <span key={elem.id.toString()} className="w-full">{ elem.name }</span>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}