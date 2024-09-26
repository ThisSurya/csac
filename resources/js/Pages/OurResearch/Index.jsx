import Header from '@/Layouts/GuestLayout';
import '../../../css/activity.css';
import Footer from '@/Layouts/FooterLayout';
import { useEffect, useState } from 'react';
import { DataView } from 'primereact/dataview';
import baseImage from '../../../img/bg.jpeg'

const render = (id) => {

    const [bgstyle, setBgStyle] = useState(baseImage)

    const [Head, setHead] = useState([]);
    const [result_data, setResulData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const get = await fetch('/landing/getLanding?section=4')
            setHead(await get.json())

            const get2 = await fetch('/getOurResearch?searchquery=')
            setResulData(await get2.json())
        }
        fetchData()
        if(id.id[0]){
            setBgStyle(id.id[0].sampulpath)
        }
    }, [])

    const loopOurResearchTemplate = (items) => {
        if (!items || items.length < 1) return (
            <div className="p-1 grid grid-cols-12 mx-24 border-b-2 gap-2 py-2">
                <h1 className="col-span-12">Tunggulah aktivitas kami!</h1>
            </div>
        )

        let list = items.map(result => {
            return itemOurResearchTemplate(result)
        })

        return <div className="">{list}</div>
    }

    function itemOurResearchTemplate(rowData) {
        return (

            <div className="" key={rowData.id}>
                {/* Jika akses menggunakan mobile */}
                <div className="rounded-lg border-2 hover:border-gray-500 shadow-md lg:hidden mx-10 mb-4 mt-1">
                    <div className="mx-5">
                        <div className="border-2 p-2 border-gray-200 rounded-lg flex justify-center my-4">
                            <img className="" loading="lazy" src={`${rowData.sampulpath}`} width={150} />
                        </div>
                        <div className="px-6 py-4">
                            <div className="mr-auto">
                                <h1 className="text-blue-900 font-semibold text-lg border-b-2 border-b-blue-900">{rowData.title}</h1>
                                <div className="text-xs text-gray-600"></div>
                            </div>
                            <div className="flex">
                                <div className="mr-auto">
                                    <p className='text-[9px] text-gray-300 flex justify-end'>{rowData.tanggal_mulai}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* jika akses menggunakan deskop */}
                <div className="lg:grid grid-cols-4 mx-10 my-5 shadow-md hidden border-2 border-gray-200">
                    <div className="col-span-3 p-4">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900">
                            <h1>{rowData.title}</h1>
                        </div>
                        <div className="text-blue-900 text-md">
                            <p>{rowData.deskripsi}</p>
                        </div>
                    </div>
                    <div className="col-span-1 p-4 my-auto">
                        <div className="flex justify-center">
                            <div className="">
                                <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src={`${rowData.sampulpath}`} width={150}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-h-screen">
            <Header />
            {/* <div className="flex flex-col items-end justify-center lg:px-10 px-7 inset-0 lg:p-40 pt-10 mb-16 lg:mb-22">
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
            </div> */}

            <div className="bg-white lg:mt-8 lg:py-8 py-4">
                <div className="px-10 lg:pb-2 pb-1">
                    <div className="border-b-2 border-blue-900">
                        <h1 className="text-center lg:text-4xl text-3xl font-semibold text-blue-900 lg:pb-5">Our Research</h1>
                    </div>
                </div>

                <DataView
                    value={result_data}
                    listTemplate={loopOurResearchTemplate}
                    paginator
                    rows={4}
                />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default render;
