'use client';
import Link from 'next/link';
import Image from 'next/image'; 
import {useState} from 'react';
import {jua} from '../app/layout';
import {usePathname} from 'next/navigation';

export default function Navbar(){

    const [menuOpen,setMenuOpen] = useState(false);
    const pathName= usePathname();

    return(

        <nav className="fixed top-0 left-0 right-0 z-50">

            <div className="flex flex-wrap items-center justify-between px-8 py-5">
                
                <Link href="/" className="flex items-center justify-center">
                    <Image src="/images/icon.png" alt="logo" width={40} height={40}/>
                    <span className={`text-4xl font-bold text-white px-3 ${jua.className}`}>REDPM</span>
                </Link>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800"
                    aria-controls="navbar-default"
                    aria-expanded={menuOpen}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className={'w-full md:block md:w-auto ' + (menuOpen ? 'block' : 'hidden')} id="navbar-default">
                    <ul className={`text-2xl flex flex-col p-4 mt-4 items-center text-center md:p-0 md:flex-row md:space-x-8 md:mt-0 ${jua.className}`}>
                        <li>
                            <Link
                                href="/"
                                className={`block pt-2 border-b-2 border-transparent hover:border-red-400 transition-all duration-200 ${
                                pathName=== "/" ? "text-red-400" : "text-white"}`}>
                                    Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={`block pt-2 border-b-2 border-transparent hover:border-red-400 transition-all duration-200 ${
                                pathName=== "/about" ? "text-red-400" : "text-white"}`}>
                                    About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className={`block pt-2 border-b-2 border-transparent hover:border-red-400 transition-all duration-200 ${
                                pathName=== "/projects" ? "text-red-400" : "text-white"}`}>
                                    Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={`block pt-2 border-b-2 border-transparent hover:border-red-400 transition-all duration-200 ${
                                pathName=== "/contact" ? "text-red-400" : "text-white"}`}>
                                    Contact
                            </Link>
                        </li>
                    </ul> 
                </div>

            </div>

        </nav>

    );

}