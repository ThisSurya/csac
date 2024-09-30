import Header from '@/Layouts/GuestLayout';
import '../../../css/activity.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import { DataView } from 'primereact/dataview';
import baseImage from '../../../img/bg.jpeg'

const renderDisplay = (id) => {
    const [bgstyle, setBgStyle] = useState(baseImage)
    const [Head, setHead] = useState([]);
    const [shownableData, setShownableData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const get = await fetch('/landing/getLanding?section=3')
            setHead(await get.json())
            const get2 = await fetch(route('partnership.getData.shownable'))
            setShownableData(await get2.json())
        }
        fetchData()
        if (id.id[0]) {
            setBgStyle(id.id[0].sampulpath)
        }
    }, [])

    const loopItemTemplate = (items) => {
        if (!items || items.length < 1) return (
            <div className="p-1 text-center py-2">
                <h1 className="font-semibold">👇Hubungi kami untuk kerjasama 👇</h1>
            </div>
        )

        let list = items.map(result => {
            return itemTemplate(result)
        })

        return <div className="">{list}</div>
    }

    function itemTemplate(data) {
        return (
            <div className="">
                {/* Jika akses menggunakan desktop */}
                <div className="lg:flex hidden p-6 mx-10 mb-4 shadow-md border-2 border-gray-200">
                    <div className="w-[80%] h-[18vh]">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900">
                            <h1>{data.name}</h1>
                        </div>
                        <div className="text-blue-900 text-md mb-auto  line-clamp-3">
                            <p>{data.deskripsi}</p>
                        </div>
                    </div>
                    <div className="flex justify-end w-[20%] relative">
                        <div className="">
                            <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src={`${data.sampulpath}`} width={200} />
                        </div>
                    </div>
                </div>
                {/* Jika akses menggunakan mobile */}
                <div className="rounded-lg border-2 hover:border-gray-500 shadow-md lg:hidden mx-2 my-4">
                    <div className="mx-5">
                        <div className="border-2 p-2 border-gray-200 rounded-lg flex justify-center mt-4">
                            <img className="" loading="lazy" src={`${data.sampulpath}`} width={240} />
                        </div>
                        <div className="my-4">
                            <div className="mr-auto">
                                <h1 className="text-blue-900 font-semibold text-lg border-b-2 border-b-blue-900">{data.nama}</h1>
                                <div className="text-xs text-gray-600 mt-2">Deskripsi kerjasama</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Header />
            {/* Content carousel */}
            <div className="bg-white lg:my-8 my-4 ">
                <div className="mx-10">
                    <div className="border-b-2">
                        <h1 className="uppercase lg:text-4xl text-3xl font-semibold lg:pb-5 uppercase">Our partners</h1>
                    </div>
                </div>
                {/* <div className="lg:mx-10 mx-2 mt-8 flex">
                    {shownableData.map(data =>
                        <div className="mx-4">
                            <a className="p-1 max-w-xs shadow-md border-2 border-gray-200 bg-white rounded-2xl hover:border-gray-600 flex flex-col items-center"
                                href="#">
                                <img src={`${data.sampulpath}`} width={200} className="w-70 p-2" />
                            </a>
                        </div>
                    )}
                </div> */}

                <div className="mx-10 my-8">
                    <DataView value={shownableData} listTemplate={loopItemTemplate} />
                </div>

                <div className="lg:mx-10 mx-5 py-6 border-t-2 border-gray-200 rounded-xl">
                    <div className="grid grid-cols-2 px-4">
                        <div className="col-span-1 font-semibold text-[#252f3f] lg:text-5xl text-2xl border-r-gray-200 border-r-2 mx-2 my-auto">
                            <h1>Jadilah bagian dari kami!</h1>
                        </div>
                        <div className="col-span-1 mx-auto my-auto lg:mx-10">
                            <p className='text-sm lg:text-md hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid doloremque assumenda sunt quia officia cumque necessitatibus, saepe nesciunt totam, ea quasi ipsum ullam iusto, sequi sapiente fugit ducimus consequuntur?</p>
                            <div className='mt-auto my-2'>
                                <a href="#" className="flex text-[#252f3f] items-center font-medium underline decoration-1">
                                    <p className='text-xl mr-2'>Klik Disini</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#252f3f" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="bg-blue-900">
                <h1 className='text-white text-center'>&#169; Udinus all right reserved</h1>
            </div>
        </div>
    )
}

export default renderDisplay;
