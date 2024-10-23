"use client"
import { loginAction } from 'lib/actions/loginAction'
import React, { useRef } from 'react'
import Button from './button';

const Form = () => {
    const ref = useRef<HTMLFormElement>(null);
    return (
        <form ref={ref}  action={ async (formData) => {
            ref.current?.reset();
            await loginAction(formData);
        }} className='text-left'>
            <div className="mb-5">
                <label htmlFor="phone" className='block'>Phone Number:</label>
                <input id="inputEmail" type="text" placeholder="0722-123-456" name="phone" className="form-control" required/>
            </div>

            <div className="mb-5">
                <label htmlFor="password" className='block'>Password:</label>
                <input id="inputPassword" type="password" placeholder="Password" name="pin" className="form-control" required/>
            </div>
            
            <Button type='submit' label='Login'/>
        </form>
    )
}

export default Form