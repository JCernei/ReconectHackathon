// import { useRef, useState } from "react"

const Login = () => {
    // const [hasFilledBoth, setHasFilledBoth] =  useState(false);
    // const formRef = useRef(null)

    // const handleChange = () =>{
    //     const form = formRef.current
    //     if (form['username'].value.length>0 && form['password'].value.length>0){
    //         setHasFilledBoth(true)
    //     }else{
    //         setHasFilledBoth(false)
    //     }
    // }

    // function moveToFriends() {
    //     location.replace("http://localhost:3000/friends")
    // }

    return (
        <div className="h-screen bg-gradient-to-r from-indigo-500 to-indigo-200 bg-gradient-to-b flex flex-col justify-center items-center">
            <div className= "bg-white mb-3 border border-gray-300 w-80 pt-8 pb-4 flex flex-col items-center">
                <h1 className="app-logo"></h1>
                <h1 className="text-cyan-700 text-lg">Welcome to TimeOut!</h1>
                <form className="w-64 flrx flex-col gap-1 mt-8">
                    {/* <div className="relative">
                        <input type="text"/>
                        <label className="absolute transition-all left-2 top-0 text-gray-400">Username</label>
                    </div> */}
                    <div className="usr">
                        <input type="text" className="w-full rounded border bg-gray-100 p-2 text-xs" placeholder="username"/>
                    </div>
                    {/* <div className="relative">
                        <input type="text"/>
                        <label className="absolute transition-all left-2 top-0 text-gray-400">Password</label>
                    </div> */}
                    
                    <div>
                        <input type="password" className="w-full rounded border bg-gray-100 p-2 text-xs" placeholder="password"/>
                    </div>
                    <br/>
                    <div>
                    {/* <button className={`w-full rounded border text-sm text-center $ {  hasFilledBoth? 'bg-blue-500': 'bg-blue-300'} text-white py--1 rounded font-medium`}><h1>Log In</h1></button> */}
                    <button className="w-full rounded border text-sm text-center bg-cyan-700 text-white py--1 rounded font-medium">
                        <h1 className="text-lg">Log In</h1></button>
                    </div>
                </form>
            </div>
            <div className="bg-white w-80 border border-gray-300 text-center py-4">
                <span className="text-sm mr-2">Don't have an account?</span>
                <a href="" className="text-cyan-700 text-sm font-semibold text-lg">Sign up</a>
            </div>
        </div>
    )
}

export default Login