import Header from '@/Layouts/GuestLayout';
import '../../../css/activity.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { DataView } from "primereact/dataview";
import DOMPurify from 'dompurify';

const renderDisplay = () => {


    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    })
    const [result_data_past_now, setResultDataPast] = useState([]);
    const [result_data_future, setResultDataFuture] = useState([]);
    const [shownableData, setShownableData] = useState([]);
    const [Head, setHead] = useState([]);

    useEffect(() => {
        data.password = '';
        async function fetchData() {
            const get = await fetch('/getData?dateoperand=3')
            setResultDataPast(await get.json())
            const get2 = await fetch('/getDate?dateoperand=2')
            setResultDataFuture(await get2.json())
            const get3 = await fetch('/landing/getLanding?section=1')
            setHead(await get3.json())
            const get4 = await fetch(route('feature.getData.shownable'))
            setShownableData(await get4.json())
        }
        fetchData()
    }, [])

    function submit(e) {
        e.preventDefault()
        post(route('login'))
    }

    const loopActivityTemplate = (items) => {
        if (!items || items.length < 1) return (
            <div className="p-1 grid grid-cols-12 mx-24 border-b-2 gap-2 py-2">
                <h1 className="col-span-12 text-gray-300 font-bold">Tunggulah aktivitas kami!</h1>
            </div>
        )

        let list = items.map(result => {
            return itemActivityTEmplate(result)
        })

        return <div className="">{list}</div>
    }

    function paragraph_render(p_semantic) {
        return { __html: DOMPurify.sanitize(p_semantic) }
    }

    function itemActivityTEmplate(product) {
        return (
            <Link href={route('activity.detail', product.id)} key={product.id}>
                {/* Jika akses menggunakan desktop */}
                <div className="hidden p-1 lg:grid grid-cols-12 lg:mx-24 mx-12 border-b-2 gap-2 py-2">
                    <div className="col-span-1 my-auto">
                        <div className="border-2 p-2 border-gray-200 rounded-lg">
                            <img className="" loading="lazy" src={`${product.sampulpath}`} width={150} />
                        </div>
                    </div>
                    <div className="col-span-10 flex items-center">
                        <div className="">
                            <h1 className="text-blue-900 font-medium text-xl border-b-2 border-b-blue-900">{product.title}</h1>
                            <div className="">{product.summary_content}</div>
                            <div className="flex">
                                <p className="text-xs text-gray-500 mr-auto">Tanggal upload:  {product.tgl}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <div className="flex my-auto items-center">
                            <p className="text-gray-500 text-md mr-auto">Read </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Akses menggunakan mobile */}
                <div className="rounded-lg border-2 hover:border-gray-500 shadow-md lg:hidden mx-10 my-4">
                    <div className="mx-5">
                        <div className="border-2 p-2 border-gray-200 rounded-lg flex justify-center my-4">
                            <img className="" loading="lazy" src={`${product.sampul}`} width={10} />
                        </div>
                        <div className="px-6 py-4">
                            <div className="mr-auto">
                                <h1 className="text-blue-900 font-semibold text-lg border-b-2 border-b-blue-900">{product.title}</h1>
                                <div className="text-xs text-gray-600">{product.summary_content}</div>
                            </div>
                            <div className="flex">
                                <div className="mr-auto">
                                    <p className='text-[9px] text-gray-300 flex justify-end'>999+ {product.total_view}</p>
                                </div>
                                <div className="">
                                    <p className='text-[9px] text-gray-300 flex justify-end'>{product.tgl}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <div className="container bg-cover bg-local bg-center max-h-screen">
            <Header />
            {/* Header CSAC  */}
            <div className="flex flex-col items-end justify-center lg:px-10 px-7 inset-0 lg:p-40 pt-10 mb-16 lg:mb-22">
                <h1 className="lg:text-9xl text-white lg:font-bold font-semibold text-6xl">CSAC</h1>
                {Head.map(data =>
                    <div className="">
                        <p className="lg:text-xl text-white text-right">{data.deskripsi}</p>
                    </div>
                )}
            </div>
            {/* Content carousel */}
            <div className="bg-blue-900 lg:mt-16 mt-8 lg:py-8 py-4">
                <div className="px-10">
                    <div className="border-b-2">
                        <h1 className="text-center lg:text-4xl text-3xl font-semibold text-white lg:pb-5 pb-3">Feature Research</h1>
                    </div>
                </div>
                <div className="lg:px-32 px-2 lg:mt-10 mt-4">
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container-with-dots"
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        minimumTouchDrag={80}
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={true}
                        slidesToSlide={1}
                        swipeable
                    >
                        {shownableData.map(data =>
                            <div className="px-8 pb-8">
                                <a class="p-2 max-w-xs border shadow-md border-2 border-white h-[57vh] bg-white rounded-2xl hover:border-gray-600 flex flex-col "
                                    href="#">
                                    <img src={data.sampulpath} class="shadow rounded-lg overflow-hidden border w-70 p-2" />
                                    <div className="mt-4 mt-2 px-2">
                                        <h4 class="font-bold text-lg text-center">{data.title_research}</h4>
                                    </div>
                                    <div class="overflow-auto px-2">
                                        <p class="lg:mt-2 text-sm text-gray-700 mb-auto">{data.deskripsi}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        )}

                    </Carousel>;
                </div>
            </div>
            <div className="bg-white">
                {/*  Activities and member login */}
                <div className="lg:my-12">
                    <div className="lg:mt-10 grid grid-cols-12">
                        <div className="col-span-12 md:col-span-9 mt-5">
                            <div className="grid grid-cols-12">
                                <div className="col-span-1"></div>
                                <div className="col-span-10 border-b-4 border-[#e4f47c]">
                                    <div className="flex">
                                        <h1 className="text-left font-bold text-lg mr-auto">Our activities</h1>
                                        <Link href={route('activity.index')} className='hover:text-gray-500 hover:border-b-2 hover:border-gray-500'>
                                            Lebih banyak
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <DataView value={result_data_past_now} listTemplate={loopActivityTemplate} />
                        </div>
                        <div className="lg:col-span-2 col-span-12 my-3 lg:m-0">
                            <div className="grid grid-flow-row auto-rows-max">
                                <div className="border rounded lg:block mx-auto lg:m-0">
                                    <h1 className="font-bold text-md border-b-2 my-3 mx-3 pb-2 text-center">Member area</h1>
                                    <form action="" onSubmit={submit}>
                                        <div className="mx-7">
                                            <div className="mt-2 mx-4">
                                                <TextInput
                                                    id="email"
                                                    name="email"
                                                    value={data.nim}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    isFocused={true}
                                                    placeholder="email"
                                                />
                                                <InputError message={errors.email} className="mt-2" />
                                            </div>

                                            <div className="mt-2 mx-4">
                                                <TextInput
                                                    id="password"
                                                    name="password"
                                                    value={data.password}
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    type="password"
                                                    isFocused={true}
                                                    placeholder="password"
                                                />
                                                <InputError message={errors.password} className="mt-2" />
                                            </div>
                                            <button
                                                class="mt-5 tracking-wide font-semibold bg-[#1e3a8a] text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none mb-4">
                                                <span class="ml-3">
                                                    Login
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mx-12 mt-6 lg:m-0">
                                    <div className="border text-center">
                                        <h1 className='font-semibold text-lg'>Agenda</h1>
                                    </div>
                                    {
                                        result_data_future.map(data => (
                                            <div className="border text-center" key={data.id}>
                                                <h1 className='text-sm'>{data.tgl}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
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
