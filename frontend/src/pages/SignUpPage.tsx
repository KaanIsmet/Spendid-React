import Logo from '../components/Logo';
import GoogleLogo from '../assets/google.svg';

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen">
            <div className="min-h-screen flex flex-col text-white shadow-xl bg-[#3D886B] h-full w-[70rem] py-13">
                <Logo/>
                <h1 className="text-2xl mx-5">
                    Get started <br/>
                    and save what counts.
                </h1>
                <p className='text-gray-200 italic m-5'>
                    Create your free account and start tracking your finances with intelligent categorization.
                </p>
                
            </div>
            <div className="flex-1 bg-[#1E1E1E] p-6">
                <Logo/>
                <div>
                    <div className="py-8">
                        <h1 className="text-2xl text-white px-5">
                            Create your account
                        </h1>
                        <p className="text-sm text-gray-200 px-5">
                            Start tracking for free, no card needed.
                        </p>
                    </div>
                    <div className="flex flex-col py-5">
                        <label className="text-sm text-white px-5">
                            Email
                        </label>
                        
                        <input className="rounded-lg border border-white bg-transparent text-white px-4 py-2 mx-5">
                        
                        </input>
                    </div>
                    <div className="flex flex-col py-7">
                        <label className="text-sm text-white px-5">
                            New Password
                        </label>
                        
                        <input className="rounded-lg border border-white bg-transparent text-white px-4 py-2 mx-5">
                        
                        </input>
                    </div>
                    <div className="flex flex-col py-7">
                        <label className="text-sm text-white px-5">
                            Confirm Password
                        </label>
                        
                        <input className="rounded-lg border border-white bg-transparent text-white px-4 py-2 mx-5">
                        
                        </input>
                    </div>   
                    <button className="text-white border border-white rounded-lg px-4 py-2 m-5 w-[70rem]">
                        Sign up
                    </button>  
                    <div className="flex justify-center">
                        <span className="text-white flex justify-center">Already have an account? </span>
                        <a href="/"className="text-[#3D886B] mx-3">Sign in</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}