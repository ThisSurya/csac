import Header from '@/Layouts/GuestLayout';
import '../../../css/activity.css';
import Footer from '@/Layouts/FooterLayout';
import { useEffect, useState } from 'react';

const render = () => {
    const [Head, setHead] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const get3 = await fetch('/landing/getLanding?section=4')
            // console.log(await get3.json())
            setHead(await get3.json())
        }
        fetchData()
    }, [])

    return (
        <div className="container bg-cover bg-local bg-center max-h-screen">
            <Header />
            <div className="flex flex-col items-end justify-center lg:px-10 px-7 inset-0 lg:p-40 pt-10 mb-16 lg:mb-22">
                <div className="lg:block hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>
                <div className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>
                {Head.map(data =>
                    <div className="">
                        <h1 className="lg:text-6xl text-white lg:font-bold font-semibold text-3xl text-right">{data.section}</h1>
                        <p className="lg:text-xl text-white text-right">{data.deskripsi}</p>
                    </div>
                )}
            </div>

            <div className="bg-white lg:mt-16 mt-8 lg:py-8 py-4">
                <div className="px-10 lg:pb-2 pb-1">
                    <div className="border-b-2 border-blue-900">
                        <h1 className="text-center lg:text-4xl text-3xl font-semibold text-blue-900 lg:pb-5">Our Research</h1>
                    </div>
                </div>
                <div className="rounded-lg border-2 hover:border-gray-500 shadow-md lg:hidden mx-10 mb-4 mt-1">
                    <div className="mx-5">
                        <div className="border-2 p-2 border-gray-200 rounded-lg flex justify-center my-4">
                            <img className="" loading="lazy" src="https://via.placeholder.com/150" />
                        </div>
                        <div className="px-6 py-4">
                            <div className="mr-auto">
                                <h1 className="text-blue-900 font-semibold text-lg border-b-2 border-b-blue-900">Judul dari penelitian</h1>
                                <div className="text-xs text-gray-600"></div>
                            </div>
                            <div className="flex">
                                <div className="mr-auto">
                                    <p className='text-[9px] text-gray-300 flex justify-end'>999+</p>
                                </div>
                                <div className="">
                                    <p className='text-[9px] text-gray-300 flex justify-end'>2024-01-01</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:grid grid-cols-4 mx-10 my-5 shadow-md hidden border-2 border-gray-200">
                    <div className="col-span-3 p-4">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900">
                            <h1>Research 1</h1>
                        </div>
                        <div className="text-blue-900 text-md">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet, pariatur fuga aspernatur autem corrupti obcaecati maxime quasi eum impedit error dolor optio iure laudantium sunt, quae, dolorum officia sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita fugiat quod deserunt quia optio corporis? Odit sit officia numquam, qui totam, nam magni, voluptatem at perspiciatis necessitatibus corrupti ab.</p>
                        </div>
                    </div>
                    <div className="col-span-1 p-4 my-auto">
                        <div className="flex justify-center">
                            <div className="">
                                <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src="https://via.placeholder.com/150" />
                                <div className="text-white font-medium text-2xl text-center">
                                    <h1>Research 1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="grid grid-cols-2 shadow-md">
                    <div className="col-span-1 bg-blue-900 p-10 my-auto">
                        <div className="flex justify-center">
                            <div className="">
                                <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src="https://via.placeholder.com/150" />
                                <div className="text-white font-medium text-2xl text-center">
                                    <h1>Research 1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white p-10 my-auto">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900 text-end">
                            <h1>Research 1</h1>
                        </div>
                        <div className="text-blue-900 text-sm text-end">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet, pariatur fuga aspernatur autem corrupti obcaecati maxime quasi eum impedit error dolor optio iure laudantium sunt, quae, dolorum officia sit!</p>
                        </div>
                    </div>
                </div> */}
                {/* <div className="grid grid-cols-2 shadow-md">
                    <div className="col-span-1 bg-blue-900 p-10 my-auto">
                        <div className="flex justify-center">
                            <div className="">
                                <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src="https://via.placeholder.com/150" />
                                <div className="text-white font-medium text-2xl text-center">
                                    <h1>Research 1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white p-10 my-auto">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900 text-end">
                            <h1>Research 1</h1>
                        </div>
                        <div className="text-blue-900 text-sm text-end">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet, pariatur fuga aspernatur autem corrupti obcaecati maxime quasi eum impedit error dolor optio iure laudantium sunt, quae, dolorum officia sit!</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default render;
