import React, { useRef, useState } from "react"
import Link from "next/link"
import {setCurrentUser} from "../../utils"
class Login extends React.Component {
    // const [hasFilledBoth, setHasFilledBoth] =  useState(false);
    // const formRef = useRef(null)
    state = {
        username: '',
        password: '',
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("asd", this.state);
        setCurrentUser(this.state)
        window.location = '../calendar'
    }
    // function moveToFriends() {
    //     location.replace("http://localhost:3000/friends")
    // }
    render(){
        return (
            <div className="h-screen bg-gradient-to-r from-indigo-500 to-indigo-200 bg-gradient-to-b flex flex-col justify-center items-center">
                <div className= "bg-white mb-3 border border-gray-300 w-80 pt-8 pb-4 flex flex-col items-center">
                    <h1 className="app-logo"></h1>
                    <h1 className="text-cyan-700 text-lg">Welcome to TimeOut!</h1>
                    <form method= "POST" onSubmit={this.handleSubmit} className="w-64 flrx flex-col gap-1 mt-8">
                        {/* <div className="relative">
                            <input type="text"/>
                            <label className="absolute transition-all left-2 top-0 text-gray-400">Username</label>
                        </div> */}
                        <div className="usr">
                            <input type="text" name="username" className="w-full rounded border bg-gray-100 p-2 text-xs" placeholder="username" onChange={this.handleChange}/>
                        </div>
                        {/* <div className="relative">
                            <input type="text"/>
                            <label className="absolute transition-all left-2 top-0 text-gray-400">Password</label>
                        </div> */}
                        
                        <div>
                            <input type="password" name="password" className="w-full rounded border bg-gray-100 p-2 text-xs" placeholder="password" onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div>
                        {/* <button className={`w-full rounded border text-sm text-center $ {  hasFilledBoth? 'bg-blue-500': 'bg-blue-300'} text-white py--1 rounded font-medium`}><h1>Log In</h1></button> */}
                        <button type ="submit" className="w-full rounded border text-sm text-center bg-cyan-700 text-white py--1 rounded font-medium">
                        {/* <Link href="/calendar" > */}
                            <h1 className="text-lg">Log In</h1>
                        {/* </Link> */}
                        </button>
                        
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
}

export default Login;