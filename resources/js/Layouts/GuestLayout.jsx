import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import React from "react";
import logo from '../../img/Logo-Web-Putih-980x204.png'
import NavLink from '@/Components/NavLink';

export default function Guest({ children }) {
    return (
        <header className="">
            <div className="top-0 grid grid-cols-12 px-8 pb-8 bg-blue-900 h-24 pt-1 overflow-x-hidden w-100% m-auto">
                <div className="col-span-1"></div>
                <div className="col-span-3">
                    <a href={route('landing')}>
                        <img src={logo} className="" alt="" />
                    </a>
                </div>

                <div className="col-span-2"></div>
                <div className="col-span-6 my-auto">
                    <div className="lg:grid lg:grid-cols-12 hidden text-center text-white">
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
                            <NavLink href={route('partnership.index')}>
                                Partnership
                            </NavLink>
                        </div>
                        <div className="col-span-3">
                            <NavLink href={route('ourresearch.index')}>
                                Our Research
                            </NavLink>
                        </div>
                        <div className="col-span-2">
                            <NavLink href={route('contact.index')} active={route().current('contact.index')}>
                                Contact us
                            </NavLink>
                        </div>
                    </div>

                    <div className="block lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}
