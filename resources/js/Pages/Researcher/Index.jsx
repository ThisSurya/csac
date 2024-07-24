import Header from '@/Layouts/GuestLayout';
import background from '../../../img/bg.jpeg';
import '../../../css/activity.css';
import TextInput from "@/Components/TextInput";
import { useForm, Link } from "@inertiajs/react";

function filter() {
    return (
        <div className="col-span-2">
            <div className="my-3 shadow-md">
                <TextInput
                    id="searchquery"
                    name="searchquery"
                    className="rounded-md px-2 py-3"
                    isFocused={true}
                    placeholder="search...."
                />
            </div>
            <div className="grid grid-flow-row auto-rows-max">
                <div className="mt-1 border">
                    <h1 className="text-center">Filter</h1>
                    <div className="p-2">
                        <label htmlFor="pricingType">Berdasarkan: </label>
                        <select id="pricingType" name="pricingType"
                            className="w-full h-10 border-2 border-sky-500 rounded px-2 md:px-3 py-0 md:py-1" defaultValue="All"
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
                <div className="col-span-9">
                    <div className="grid grid-cols-12">
                        <div className="col-span-1"></div>
                        <div className="col-span-10 border-b-4 border-[#e4f47c]">
                            <div className="flex">
                                <h1 className="text-left font-bold text-4xl">Researcher</h1>
                            </div>
                        </div>
                    </div>
                    <Link href="#">
                        <div className="p-1 grid grid-cols-12 mx-24 border-b-2 gap-2 py-2">
                            <div className="col-span-1 my-auto">
                                <div className="border-2 p-2 border-gray-200 rounded-lg">
                                    <img className="" loading="lazy" src="https://via.placeholder.com/150" />
                                </div>
                            </div>
                            <div className="col-span-10 flex items-center">
                                <div className="">
                                    <h1 className="text-xl font-bold">Cukup tawu</h1>
                                    <div className="flex">
                                        <p className="text-xs text-gray-500 mr-auto">Universitas Dian Nuswantoro</p>
                                        <p className="text-xs text-gray-500">Status: Dosen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center">
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
                {filter()}
            </div>
        </div>

    )
}

export default render;
