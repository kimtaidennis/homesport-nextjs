
 const Register = () => {
    return (
        <>  
            <h4 className="text-slate-300 font-light my-4">Register </h4>
           
            <form>
                <div className="mb-5">
                    <label htmlFor="email" className='block'>Phone:</label>
                    <input type="number" placeholder="0712-123 123" name='email' required className="form-control"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className='block'>Password:</label>
                    <input type="password" placeholder="Password" name='password' required className="form-control"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="confirm_password" className='block'>Confirm Password:</label>
                    <input type="password" placeholder="Confirm Password" name='confirm_password' required className="form-control"/>
                </div>
                <br />
                <div className="mb-1">
                    <button type="submit" className="btn btn-default-theme btn-block text-uppercase mb-2">Sign up</button>
                </div>
            </form>
        </>
    )
}

export default Register;