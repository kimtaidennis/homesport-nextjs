import { Country, Menu } from "@/models/types";
// import ReactCountryFlag from "react-country-flag"
import { useMyState } from "@/app/hooks/MyState";
import { useState } from "react";

export default function Countries() {
    const [id, setId] = useState<number>(0);
    const { flags,sportId, menu:all } = useMyState();
    const menu = all.find( x => x.id === sportId) as Menu;

    const countries: Country[] = [...menu.country].sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    });

    return (
        <ul className="list-none px-3 md:px-0">
        {
            countries.map( el => <li key={ el.id.toString() }>
                <span  className="block py-2 hover:text-yellow " onClick={ () => setId(el.id)}>
                    {/* <ReactCountryFlag countryCode={ flags[el.name]} svg className="mr-2 mb-1"/>  */}
                    { el.name } ({ el.leagues.length })
                </span>
                <ul className={`pl-2 list-none transition-all ease-in-out ${id === el.id ? 'block' : 'hidden'}`}>
                    {
                        el.leagues.map( ell => <li className=" text-slate-400 text-sm" key={ ell.id.toString() }><i className="icofont-bubble-right"></i> { ell.name }</li>)
                    }
                </ul>
            </li> )
        }
        </ul>
    )
}
