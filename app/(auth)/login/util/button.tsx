import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
    label: string
    type: "submit" | "reset" | "button" | undefined
}

const Button = ({ label,type}:Props) => {
    const {pending} = useFormStatus()
    return (
        <div className="my-6">
            <button disabled={pending} type={type} className="btn mb-2 !py-3">{ label }</button>
        </div>
    )
}

export default Button