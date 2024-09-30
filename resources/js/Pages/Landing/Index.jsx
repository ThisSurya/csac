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
import baseImage from '../../../img/bg.jpeg'
const renderDisplay = (id) => {

    const [bgstyle, setBgStyle] = useState(baseImage)

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
            const get2 = await fetch('/getDataFuture?dateoperand=2')
            setResultDataFuture(await get2.json())
            const get3 = await fetch('/landing/getLanding?section=1')
            setHead(await get3.json())
            const get4 = await fetch('/feature/getFResearch/shownable')
            setShownableData(await get4.json())
        }
        fetchData()
        if (id.id[0]) {
            setBgStyle(id.id[0].sampulpath)
        }
        // console.log(bgstyle)
    }, [])

    function submit(e) {
        console.log(bgstyle.backgroundImage)
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
                <div className="lg:flex hidden p-6 mx-10 my-4 shadow-md border-2 border-gray-200">
                    <div className="w-[80%] h-[120px] flex flex-col">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900">
                            <h1>{product.title}</h1>
                        </div>
                        <div className="text-blue-900 text-md line-clamp-3">
                            <p>{product.summary_content}</p>
                        </div>
                        <div className="mt-auto">
                            <p className='font-light text-gray-600 text-sm mt-auto'>{product.tgl}</p>
                        </div>
                    </div>
                    <div className="flex justify-end w-[20%] relative">
                        <div className="">
                            <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src={`${product.sampulpath}`} width={120} />
                        </div>
                    </div>
                </div>

                {/* Akses menggunakan mobile */}
                <div className="rounded-lg border-2 hover:border-gray-500 shadow-md lg:hidden mx-10 mb-4 mt-1">
                    <div className="mx-5">
                        <div className="border-2 p-2 border-gray-200 rounded-lg flex justify-center my-4">
                            <img className="" loading="lazy" src={`${product.sampulpath}`} width={150} />
                        </div>
                        <div className="px-6 py-4">
                            <div className="mr-auto">
                                <h1 className="text-blue-900 font-semibold text-lg border-b-2 border-b-blue-900">{product.title}</h1>
                                <div className="text-xs text-gray-600"></div>
                            </div>
                            <div className="flex">
                                <div className="mr-auto">
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
        <div className="">
            <Header className='relative z-20' />
            <img src={bgstyle} alt="" className='w-screen lg:h-[90vh]' />
            {/* Header CSAC  */}
            <div className="lg:px-10 px-7">
            </div>
            {/* Content carousel */}
            <div className="bg-white lg:py-8 py-4 relative z-20">
                <div className="mx-10">
                    <div className="border-b-2 border-blue-900 uppercase">
                        <h1 className="lg:text-4xl text-3xl font-semibold text-black lg:pb-5 pb-3">Featured Research</h1>
                    </div>
                </div>
                <div className="lg:mx-32 mx-10 lg:mt-10 mt-4">
                    <Carousel
                        additionalTransfrom={0}
                        // arrows
                        // autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container-with-dots"
                        // draggable
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
                                items: 4,
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
                        showDots={false}
                        slidesToSlide={1}
                    // swipeable
                    >
                        {shownableData.map(data =>
                            <div className="px-8 pb-8">
                                {console.log(data)}
                                <a class="h-[60vh] p-4 max-w-xs shadow-xl border-2 border-white bg-white hover:border-gray-600 flex flex-col"
                                    href="#">
                                    <img src={data.sampulpath} class="shadow rounded-lg overflow-hidden border w-70 p-2" />
                                    <div className="mt-4 px-2">
                                        <h4 class="font-bold text-lg leading-4">{data.title_research}</h4>
                                    </div>
                                    <div class="px-2 break-words capitalize">
                                        <p class="lg:mt-2 text-sm text-gray-700 mb-auto leading-4">{data.deskripsi}
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
                <div className="lg:my-8">
                    <div className="mx-10">
                        <div className="flex items-start flex-col lg:flex-row">
                            <div className="lg:mr-4 mx-auto my-4 lg:my-0">
                                <div className="border-b-2 border-blue-900 uppercase mr-auto">
                                    <h1 className='font-semibold text-4xl lg:pb-5 pb-3 mr-auto'>Activities</h1>
                                </div>
                                <div className="">
                                    <DataView value={result_data_past_now} listTemplate={loopActivityTemplate} />
                                </div>
                                <div className="text-right">
                                    <a href={route('activity.index')} className='hover:text-gray-300 ease-in-out duration-200 font-normal text-2xl underline mr-10'>More</a>
                                </div>
                            </div>
                            {/* Login section */}
                            <div className="lg:min-w-[20%] lg:ml-4 min-w-full">
                                <div className="border-2 border-gray-200 shadow-md relative z-0 mx-auto">
                                    <div className="p-4">
                                        <div className="text-center font-semibold text-xl border-b-2 border-[#e4f47c]" >
                                            <h1>Member area</h1>
                                        </div>
                                        <form action="" onSubmit={submit}>
                                            <div className="mt-2 my-1">
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
                                            <div className="mb-2">
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
                                                class="mt-5 tracking-wide font-semibold bg-[#1e3a8a] text-gray-100 w-full py-2  hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none mb-4">
                                                <span class="ml-3">
                                                    Login
                                                </span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="relative z-10 shadow-md my-4">
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
