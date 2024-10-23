import { loginAction } from 'lib/actions/loginAction'
import Link from 'next/link'
import React from 'react'
import Form from './util/form'


const Login = () => {

    

    return (
        <>
            <h4 className="text-slate-300 font-light my-4">Login</h4>
            <Form />
            <div className="text-right">
                <Link href="/forgot-password" className="hover:text-yellow">Forgot Password?</Link>
            </div>
        </>
    )
}


export default Login