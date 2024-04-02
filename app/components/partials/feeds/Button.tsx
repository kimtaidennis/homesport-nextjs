type Props = { odd?: string, type: boolean, select?: boolean, addMatch?: ()=>void }

export const Odd = ({ odd,type,select, addMatch } : Props) => { 
    if(type) {
        return <button className={ `px-2 py-2.5 rounded-md w-full  ${select ? 'bg-yellow  text-dark-bg' : 'bg-dark-op text-light-blue'}`} onClick={ () => addMatch && addMatch() }>{ odd }</button>
    } else {
        return <button className=" px-2 py-2.5 rounded-md w-full bg-dark-op"><i className="icofont-lock !mr-0"></i></button>
    }
}
