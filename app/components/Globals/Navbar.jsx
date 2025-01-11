import { NavLink } from "@remix-run/react";
import { useState } from "react";

export default function Navbar() {
    const [menuState, setMenuState] = useState(false);

    const links = [
        { to: "/", label: "Home" },
        { to: "/contact", label: "Contact" },
        { to: "/newnote", label: "New Note" },
        { to: "/notes", label: "All Notes" },
    ];

    return (
        <header>
            <nav data-state={menuState && 'active'} className="group fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-gray-950/50 lg:dark:bg-transparent">
                <div className="m-auto max-w-5xl px-6">
                    <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <NavLink to="/" aria-label="home" className="flex items-center space-x-2 font-bold text-2xl">
                                Wasi
                            </NavLink>
                            <button onClick={() => setMenuState(!menuState)} aria-label={menuState == true ? 'Close Menu' : 'Open Menu'} className="btn variant-ghost sz-md icon-only relative z-20 -mr-2.5 block cursor-pointer lg:hidden">
                                <svg className="text-title m-auto size-6 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
                                </svg>
                                <svg className="text-title absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="bg-ui mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-gray-300/20 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:pr-4">
                                <ul className="space-y-6 text-base lg:flex lg:gap-6 lg:space-y-0 lg:text-sm">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <NavLink
                                                to={link.to}
                                                className={({ isActive }) =>
                                                    isActive ? "text-body block hover:text-title bg-red-200 rounded-lg p-4" : "text-body block hover:text-title p-4"
                                                }
                                            >
                                                <span>{link.label}</span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                <NavLink to="#" className="btn variant-soft sz-md lg:sz-xs">
                                    <span>Login</span>
                                </NavLink>
                                <NavLink to="#" className="btn variant-neutral sz-md lg:sz-xs">
                                    <span className="btn-label">Sign Up</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}