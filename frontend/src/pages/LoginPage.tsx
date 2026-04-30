import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";

import logo from "../assets/google.svg"


export default function LoginPage() {
    return (
        <div className="flex min-h-screen">
            <div className="min-h-screen flex flex-col text-white shadow-xl bg-[#3D886B] h-full w-[70rem] py-13">
                <Logo/>
                <h1 className="text-2xl mx-5">
                    Your finances,<br/>
                    finally splendid.
                </h1>
                <p className="text-sm text-gray-200 font-medium mx-5 py-3 border-white border-b-2 pb-8">
                    Track expenses, set budgets, and import bank statements seamlessly. 
                </p>
                <div className="flex items-center gap-3 py-5 mt-8 mb-12 border-white border-b-2 mx-5">
                    <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center font-bold text-sm">
                        1
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">CSV & PDF import</span>
                        <span className="text-sm text-gray-200">Auto-categorize bank statements</span>
                    </div>
                </div>
                <div className="flex items-center py-5 gap-3 border-white border-b-2 mx-5">
                    <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center font-bold text-sm">
                        2
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">Smart Budgets</span>
                        <span className="text-sm text-gray-200">Per-category tracking & alerts</span>
                    </div>
                </div>
                <div className="flex items-center py-5 gap-3 mt-8 mx-5">
                    <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center font-bold text-sm">
                        3
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">Spending Insights</span>
                        <span className="text-sm text-gray-200">Visual reports across time</span>
                    </div>
                </div>
                
            </div>
            <div className="flex-1 bg-[#1E1E1E] p-6">
                <Logo/>
                <div>
                    <div className="py-8">
                        <h1 className="text-2xl text-white px-5">
                            Welcome back
                        </h1>
                        <p className="text-sm text-gray-200 px-5">
                            Sign in to your account
                        </p>
                    </div>
                    
                    <div className="flex flex-col py-5">
                        <label className="text-sm text-white px-5">
                            Email
                        </label>
                        
                        <input className="rounded-lg border border-white bg-transparent text-white px-4 py-2 mx-5">
                        
                        </input>
                    </div>
                    <div className="flex flex-col py-5">
                        <label className="text-sm text-white px-5">
                            Password
                        </label>
                        
                        <input className="rounded-lg border border-white bg-transparent text-white px-4 py-2 mx-5">
                        
                        </input>
                        <a href="" className="text-[#3D886B] px-5 mt-2 ml-auto">
                            Forgot Password?
                        </a>
                    </div>   
                    <button className="text-white border border-white rounded-lg px-4 py-2 m-5 w-[70rem]">
                        Sign up
                    </button>  
                    <div className="flex">
                        <div className="border-t border-white w-[33rem] my-3 mx-5"/>
                        <span className="text-white"> Or </span>
                        <div className="border-t border-white w-[33rem] my-3 mx-5"/>
                    </div>
                    <button className="text-white border border-white rounded-lg px-4 py-2 m-5 w-[70rem] flex items-center justify-center gap-2">
                        <img src={logo}/>Continue with Google
                    </button>  
                    <div className="flex justify-center">
                        <span className="text-white flex justify-center">Don't have an account? </span>
                        <a href="/signup"className="text-[#3D886B] mx-3">Sign up</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}