import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <>
            <h4 className="text-slate-300 font-light my-4">Login</h4>
            <form className='text-left'>
                <div className="mb-5">
                    <label htmlFor="phone" className='block'>Phone Number:</label>
                    <input id="inputEmail" type="text" placeholder="0722-123-456" name="phone" className="form-control" />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className='block'>Password:</label>
                    <input id="inputPassword" type="password" placeholder="Password" name="pin" className="form-control"/>
                </div>
                
                <div className="my-6">
                    <button type="submit" className="btn mb-2">Submit</button>
                </div>
            </form>
            <div className="text-right">
                <Link href="/forgot-password" className="hover:text-yellow">Forgot Password?</Link>
            </div>
        </>
    )
}


export default Login