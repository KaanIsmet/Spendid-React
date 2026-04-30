import Sidebar from "../components/Sidebar";

export default function DashboardPage() {

    return (
        <div className="flex min-h-screen ">
            <Sidebar/>
            <div className="flex-1 bg-[#1E1E1E] p-6">
                <h1 className="text-2xl text-white">Good Morning Kaan</h1>
            </div>
        </div>
    )
}