import Header from '@/Layouts/GuestLayout';
import background from '../../../img/bg.jpeg';
import '../../../css/activity.css';
import TextInput from "@/Components/TextInput";
import { useEffect, useState } from "react";
import { useForm, Link } from "@inertiajs/react";
import Footer from '@/Layouts/FooterLayout';

function filter() {
    const [selectedType, setSelectedType] = useState('All');
    return (
        <div className="lg:col-span-2 col-span-4">
            <div className="ml-20 mb-4 lg:m-0">
                <TextInput
                    id="searchquery"
                    name="searchquery"
                    className="rounded-full py-3 shadow-md pl-16"
                    isFocused={true}
                    placeholder="search...."
                />
            </div>
            <div className="lg:grid grid-flow-row auto-rows-max mt-2 hidden">
                <div className="mt-1 border shadow-md">
                    <h1 className="text-center">Filter</h1>
                    <div className="p-2">
                        <label htmlFor="pricingType">Berdasarkan: </label>
                        <select id="pricingType" name="pricingType"
                            className="w-full h-10 border-2 border-sky-500 rounded px-2 md:px-3 py-0 md:py-1" defaultValue="All"
                            value={selectedType}
                            onChange={e => { getData(e.target.value) }}
                        >
                            <option value="All">All</option>
                            <option value="Freemium">Freemium</option>
                            <option value="Free">Free</option>
                            <option value="Paid">Paid</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

const render = () => {
    return (
        <div className="">
            <Header />
            <div className="mt-7 grid grid-cols-12">
                <div className="lg:hidden">
                    {filter()}
                </div>
                <div className="lg:col-span-9 col-span-12 h-svh">
                    <div className="grid grid-cols-12">
                        <div className="col-span-1"></div>
                        <div className="col-span-10 border-b-4 border-[#e4f47c]">
                            <div className="flex">
                                <h1 className="text-left text-blue-900 font-bold text-4xl">Researcher</h1>
                            </div>
                        </div>
                    </div>
                    <Link href="#">
                        <div className="p-1 grid lg:grid-cols-12 grid-cols-4 lg:mx-24 mx-12 border-b-2 gap-2 py-2">
                            <div className="lg:col-span-1 my-auto">
                                <div className="border-2 border-gray-200 rounded-full flex justify-center items-center h-14 w-14">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="lg:col-span-10 col-span-3 flex items-center">
                                <div className="">
                                    <h1 className="text-xl font-bold">Nama profile</h1>
                                    <div className="">
                                        <p className="text-xs text-gray-500 mr-auto">Universitas Dian Nuswantoro</p>
                                        <p className="text-xs text-gray-500 ml-auto">Status: Mahasiswa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 hidden lg:flex flex-col items-center">
                                <div className="flex my-auto items-center">
                                    <p className="text-gray-500 text-md mr-auto">Kunjungi</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="hidden lg:block">
                    {filter()}
                </div>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>

    )
}

export default render;
