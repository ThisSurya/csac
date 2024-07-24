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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(() => {
        data.password = '';
        async function fetchData() {
            const get = await fetch('/getData?dateoperand=3')
            const save = await get.json();
            setResultDataPast(save)
            const get2 = await fetch('/getDate?dateoperand=2')
            const save2 = await get2.json();
            setResultDataFuture(save2)
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
                <h1 className="col-span-12">Tunggulah aktivitas kami!</h1>
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
                <div className="p-1 grid grid-cols-12 mx-24 border-b-2 gap-2 py-2">
                    <div className="col-span-1 my-auto">
                        <div className="border-2 p-2 border-gray-200 rounded-lg">
                            <img className="" loading="lazy" src="https://via.placeholder.com/150" />
                        </div>
                    </div>
                    <div className="col-span-10 flex items-center">
                        <div className="">
                            <h1 className="text-xl font-bold">{product.title}</h1>
                            <div className="" dangerouslySetInnerHTML={paragraph_render(product.content)}></div>
                            <div className="flex">
                                <p className="text-xs text-gray-500 mr-auto">Tanggal upload:  {product.name}</p>
                                <p className="text-xs text-gray-500">{product.created_at}</p>
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
            </Link>
        )
    }

    return (
        <div className="container bg-cover bg-local bg-center max-h-screen">
            <Header />
            {/* Header CSAC  */}
            <div className="flex flex-col items-end justify-center px-10 inset-0 p-40 mb-22">
                <h1 className="text-9xl text-white font-bold">CSAC</h1>
                <p className="text-2xl text-white text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil quisquam fugiat facere deleniti natus modi pariatur unde ipsam sequi, atque, distinctio velit cumque ab. Voluptatibus fuga repudiandae aliquam ratione.</p>
                <a href="#" className="text-lg text-white text-right">Lihat apa yang kami lakukan...</a>
            </div>
            {/* Content carousel */}
            <div className="bg-[#1e3a8a] mt-16 py-8">
                <div className="px-10">
                    <div className="border-b-2">
                        <h1 className="text-center text-4xl text-white pb-5">Feature Research</h1>
                    </div>
                </div>
                <div className="px-32  mt-10">
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
                        showDots={false}
                        slidesToSlide={1}
                        swipeable
                    >
                        <div className="px-8">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-gray-600 flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-70 p-2" />
                                <div class="mt-4">
                                    <h4 class="font-bold text-lg">Exercises</h4>
                                    <p class="mt-2 text-sm text-gray-600">Create Exercises for any subject with the topics you and your students care about.Create Exercises for any subject with the topics you and your students care about.Create Exercises for any subject with the topics you and your students care about.
                                    </p>
                                    <div class="mt-5">
                                        <p className="text-center text-sm text-gray-600">Read more</p>
                                        {/* <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="px-8">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-gray-600 flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-70 p-2" />
                                <div class="mt-4">
                                    <h4 class="font-bold text-lg">Exercises</h4>
                                    <p class="mt-2 text-sm text-gray-600">Create Exercises for any subject with the topics you and your students care about.Create Exercises for any subject with the topics you and your students care about.Create Exercises for any subject with the topics you and your students care about.
                                    </p>
                                    <div class="mt-5">
                                        <p className="text-center text-sm text-gray-600">Read more</p>
                                        {/* <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="px-8">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-gray-600 flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-70 p-2" />
                                <div class="mt-4">
                                    <h4 class="font-bold text-lg">Exercises</h4>
                                    <p class="mt-2 text-sm text-gray-600">Create Exercises for any subject with the topics you and your students care about.Create Exercises for any subject with the topics you and your students care about.Create Exercises for any subject with the topics you and your students care about.
                                    </p>
                                    <div class="mt-5">
                                        <p className="text-center text-sm text-gray-600">Read more</p>
                                        {/* <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="px-8">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-gray-600 flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-70 p-2" />
                                <div class="mt-4">
                                    <h4 class="font-bold text-lg">Exercises</h4>
                                    <p class="mt-2 text-sm text-gray-600">Create Exercises for any subject with the topics you and your students care about.Create Exercises for any subject with the topics you and your students care about.Create Exercises for any subject with the topics you and your students care about.
                                    </p>
                                    <div class="mt-5">
                                        <p className="text-center text-sm text-gray-600">Read more</p>
                                        {/* <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Carousel>;
                </div>
            </div>
            {/*  Activities and member login */}
            <div className="my-12">
                <div className="mt-10 grid grid-cols-12">
                    <div className="col-span-9">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1"></div>
                            <div className="col-span-10 border-b-4 border-[#e4f47c]">
                                <div className="flex">
                                    <h1 className="text-left font-bold text-lg mr-auto">Our activities</h1>
                                    <Link href={route('activity.index')}>
                                        Lebih banyak
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <DataView value={result_data_past_now} listTemplate={loopActivityTemplate} />
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-flow-row auto-rows-max">
                            <div className="border rounded">
                                <h1 className="font-bold text-md border-b-2 my-3 mx-3 pb-2 text-center">Member area</h1>
                                <form action="" onSubmit={submit}>
                                    <div className="mx-7 max-w-xs">
                                        <div className="mb-2">
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

                                        <div className="mt-2">
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
                                                Sign Up
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="">
                                <div className="mt-10 border text-center">
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
            {/* Footer */}
            <div className="bg-blue-900">
                <h1 className='text-white text-center'>&#169; Udinus all right reserved</h1>
            </div>
        </div>
    )
}

export default renderDisplay;
