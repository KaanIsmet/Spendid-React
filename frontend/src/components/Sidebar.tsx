import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo';

export default function Sidebar() {
    const location = useLocation();

    const navGroups = [
        {
            label: 'Overview',
            links: [
                { to: '/dashboard', label: 'Dashboard' },
                { to: '/expenses', label: 'Expenses' },
                { to: '/budgets', label: 'Budgets' },
                { to: '/categories', label: 'Categories' },
            ]
        },
        {
            label: 'Data',
            links: [
                { to: '/expense', label: 'Import to CSV' },
                { to: '/reports', label: 'Reports' },
            ]
        },
        {
            label: 'Account',
            links: [
                { to: '/settings', label: 'Settings' },
            ]
        },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div
            className="fixed left-0 top-0 bottom-0 flex flex-col text-white shadow-xl bg-[#3D886B] h-full w-[20rem]"
            >

            {/* Logo / App Name */}
            <Logo/>
            {/* Nav Groups */}
            <nav className="flex-1 flex flex-col gap-4 px-3 overflow-y-auto">
                {navGroups.map((group) => (
                    <div key={group.label}>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50 px-3 mb-1">
                            {group.label}
                        </p>
                        {group.links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`flex items-center w-full px-3 py-2 rounded-lg text-sm transition-all ${
                                    isActive(link.to)
                                        ? 'bg-white/20 text-white font-medium'
                                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>


            
            <div className="flex items-center gap-3 p-5 border-t-2 border-white my-5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                    KI
                </div>
                <span className="text-sm font-medium">Kaan Ismet</span>
            </div>
        </div>
    )
}