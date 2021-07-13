import React from 'react'

const Register = () => {
    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center h-96 mt-20 font-mono">
                <span className="text-blue-700 text-6xl">Register</span>
                <form className="flex flex-col justify-center mt-8">
                    <label className="text-green-600 text-3xl justify-center flex mt-8">username</label>
                    <input className="w-80 bg-gray-800 rounded-md py-2 pl-2 mt-2" type="text" placeholder="username..."
                    />
                    <label className="text-green-600 text-3xl justify-center flex mt-8">Email</label>
                    <input className="w-80 bg-gray-800 rounded-md py-2 pl-2 mt-2" type="text" placeholder="email..."
                    />

                    <label className="text-green-600 text-3xl flex justify-center mt-6">Password</label>
                    <input className="w-80 bg-gray-800 rounded-md py-2 pl-2 mt-2" type="password" placeholder="password.."
                    />
                    <button className="p-2 mt-8 bg-gray-800 rounded-md w-28 " type="submit">Register</button>
                </form>
               


            </div>
            {/* <button className="  bg-green-800 rounded-md w-28 absolute top-0 font-mono right-2 p-2 text-xl text-blue-300"><Link to="/login">Login</Link></button> */}
        </div>
    )
}

export default Register
