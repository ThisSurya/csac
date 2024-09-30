import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from "react";
import logo from '../../img/home_csac.png'
import NavLink from '@/Components/NavLink';
import SecNavLink from '@/Components/SecNavLink';
import DropdownNavLink from '@/Components/DropdownNavLink';
export default function Guest({ children, className = '' }) {
    const [isShow, setShow] = useState(false);
    const dropdownDiv = useRef();

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [])

    const handleClickOutside = (event) => {
        if (dropdownDiv.current && !dropdownDiv.current.contains(event.target)) {
            changeShow()
        }
    }

    function changeShow() {
        setShow(!isShow)
        console.log(isShow)
    }

    function Dropdown() {
        return (
            <div className="">
                {isShow && (
                    <div className="absolute right-4 mt-2 w-48">
                        <div className="overflow-scroll border-2 bg-white max-w-full">
                            <div className="hover p-3">
                                <h1>Publication</h1>
                            </div>
                            <div className="hover p-3">
                                <h1>Researcher</h1>
                            </div>
                            <div className="hover p-3">
                                <h1>Our Research</h1>
                            </div>
                            <div className="hover p-3">
                                <h1>Contact us</h1>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    return (
        <header className={className}>
            <div className="hidden lg:block">
                {/* <div className="top-0 grid grid-cols-12 px-8 pb-8 bg-blue-900 lg:h-24 h-20 pt-1">
                    <div className="col-span-1"></div>
                    <div className="col-span-3 lg:mt-4 xl:mt-2">
                        <a href={route('landing')}>
                            <img src={logo} className="" alt="" />
                        </a>
                    </div>

                    <div className="col-span-2"></div>
                    <div className="col-span-6 xl:my-auto lg:mt-7">
                        <div className="grid grid-cols-12 text-center text-white">
                            <div className="col-span-2">
                                <NavLink href={route('publication.index')} active={route().current('publication.index')}>
                                    Publication
                                </NavLink>
                            </div>
                            <div className="col-span-2">
                                <NavLink href={route('research.index')} active={route().current('research.index')}>
                                    Researcher
                                </NavLink>
                            </div>
                            <div className="col-span-2">
                                <NavLink href={route('partnership.index')} active={route().current('partnership.index')}>
                                    Partnership
                                </NavLink>
                            </div>
                            <div className="col-span-3">
                                <NavLink href={route('test.index')} active={route().current('test.index')}>
                                    Our Research
                                </NavLink>
                            </div>
                            <div className="col-span-2">
                                <NavLink href={route('contact.index')} active={route().current('contact.index')}>
                                    Contact us
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="top-0 px-8 pb-8 bg-blue-900 lg:h-24 h-20 pt-1">
                    <div className="mx-10 flex">
                        <div className="lg:mt-4 xl:mt-2 mr-auto">
                            <a href={route('landing')}>
                                <img src={logo} className="" alt="" width={350} />
                            </a>
                        </div>

                        <div className="space-x-8 text-white flex items-center">
                            <div className="">
                                <NavLink href={route('publication.index')} active={route().current('publication.index')}>
                                    Publication
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('research.index')} active={route().current('research.index')}>
                                    Researcher
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('partnership.index')} active={route().current('partnership.index')}>
                                    Partnership
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('test.index')} active={route().current('test.index')}>
                                    Our Research
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink href={route('contact.index')} active={route().current('contact.index')}>
                                    Contact us
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block lg:hidden">
                <div className="flex bg-blue-900 h-16">
                    <div className="ml-8 my-auto mr-auto">
                        <a href={route('landing')}>
                            <img src={logo} className="" alt="" width={225} />
                        </a>
                    </div>

                    <div className="my-auto mr-8">
                        <DropdownNavLink>
                            <div className="p-3 hover:bg-gray-200 focus:bg-gray-400">
                                <SecNavLink href={route('publication.index')} active={route().current('publication.index')} className='hover:bg-gray-200'>
                                    Publication
                                </SecNavLink>
                            </div>
                            <div className="p-3 hover:bg-gray-200 focus:bg-gray-400">
                                <SecNavLink href={route('research.index')} active={route().current('research.index')} className='hover:bg-gray-200'>
                                    Researcher
                                </SecNavLink>
                            </div>
                            <div className="p-3 hover:bg-gray-200 focus:bg-gray-400">
                                <SecNavLink href={route('test.index')} active={route().current('test.index')} className='hover:bg-gray-200'>
                                    Our Research
                                </SecNavLink>
                            </div>
                            <div className="p-3 hover:bg-gray-200 focus:bg-gray-400">
                                <SecNavLink href={route('partnership.index')} active={route().current('partnership.index')} className='hover:bg-gray-200'>
                                    Partnership
                                </SecNavLink>
                            </div>
                            <div className="p-3 hover:bg-gray-200 focus:bg-gray-400">
                                <SecNavLink href={route('contact.index')} active={route().current('contact.index')}>
                                    Contact us
                                </SecNavLink>
                            </div>
                        </DropdownNavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}
