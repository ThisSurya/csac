import Header from "@/Layouts/GuestLayout";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

const render = () => {
    const {data, setData, post, processing, error, reset} = useForm({
        searchquery: ''
    });
    return (
        <div className="">
            <Header />
            <div className="mt-7 grid grid-cols-12">
                <div className="col-span-9">
                    <div className="grid grid-cols-12">
                        <div className="col-span-1"></div>
                        <div className="col-span-10 border-b-4 border-[#e4f47c]">
                            <div className="flex">
                                <h1 className="text-left font-bold text-4xl">Our publication</h1>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 grid grid-cols-12 mx-24 border-b-2">
                        <div className="col-span-10 flex gap-4 items-center">
                            <div className="w-24">
                                <img className="border-2 p-2 border-gray-200 rounded-lg" alt="" src="https://via.placeholder.com/150" />
                            </div>
                            <div className="">
                                <h1 className="text-xl font-bold content-start">Judul publikasi</h1>
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-person self-center" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        </svg>

                                        <p className="pl-4 text-gray-500 text-sm">Sutedjo, amira</p>
                                    </div>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-download self-center" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                        </svg>
                                        <a href="" className="pl-4 underline decoration-solid text-gray-500 text-sm">download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-gray-500 text-sm ">Tanggal</p>
                        </div>
                    </div>
                    <div className="py-2 grid grid-cols-12 mx-24 border-b-2">
                        <div className="col-span-10 flex gap-4 items-center">
                            <div className="w-24">
                                <img className="border-2 p-2 border-gray-200 rounded-lg" alt="" src="https://via.placeholder.com/150" />
                            </div>
                            <div className="">
                                <h1 className="text-xl font-bold content-start">Judul publikasi</h1>
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-person self-center" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        </svg>

                                        <p className="pl-4 text-gray-500 text-sm">Sutedjo, amira</p>
                                    </div>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-download self-center" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                        </svg>
                                        <a href="" className="pl-4 underline decoration-solid text-gray-500 text-sm">download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-gray-500 text-sm ">Tanggal</p>
                        </div>
                    </div>
                    <div className="py-2 grid grid-cols-12 mx-24 border-b-2">
                        <div className="col-span-10 flex gap-4 items-center">
                            <div className="w-24">
                                <img className="border-2 p-2 border-gray-200 rounded-lg" alt="" src="https://via.placeholder.com/150" />
                            </div>
                            <div className="">
                                <h1 className="text-xl font-bold content-start">Judul publikasi</h1>
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-person self-center" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        </svg>

                                        <p className="pl-4 text-gray-500 text-sm">Sutedjo, amira</p>
                                    </div>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-download self-center" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                        </svg>
                                        <a href="" className="pl-4 underline decoration-solid text-gray-500 text-sm">download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-gray-500 text-sm ">Tanggal</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="my-3 shadow-md">
                        <TextInput
                            id="searchquery"
                            name="searchquery"
                            value={data.searchquery}
                            className="rounded"
                            isFocused={true}
                            onChange={(e) => setData('searchquery', e.target.value)}
                            placeholder="search...."
                        />
                    </div>
                    <div className="grid grid-flow-row auto-rows-max">
                        <div className="mt-1 border shadow-md">
                            <h1 className="text-center">Filter</h1>
                            <div className="p-2">
                                <label htmlFor="pricingType">Berdasarkan: </label>
                                <select id="pricingType" name="pricingType"
                                    className="w-full h-10 border-2 border-gray-300 rounded px-2 md:px-3 py-0 md:py-1" defaultValue="All">
                                    <option value="All">All</option>
                                    <option value="Freemium">Freemium</option>
                                    <option value="Free">Free</option>
                                    <option value="Paid">Paid</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default render;
