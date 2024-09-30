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
                    <div className="col-span-3 p-8">
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
            <div className="bg-white lg:mt-8 lg:py-8 py-4">
                <div className="px-10 lg:pb-2 pb-1">
                    <div className="border-b-2 border-blue-900">
                        <h1 className="uppercase lg:text-4xl text-3xl font-semibold lg:pb-5">Our Research</h1>
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
