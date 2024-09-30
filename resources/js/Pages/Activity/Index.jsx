import Header from "@/Layouts/GuestLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Link } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import { DataView } from "primereact/dataview";
import DOMPurify from 'dompurify';


const render = () => {
    const { data, setData, post, processing, error, reset } = useForm({
        searchquery: '',
    });
    const [selectedType, setSelectedType] = useState('All');
    const [results, setResult] = useState([]);
    const getData = async (res_type) => {
        console.log(selectedType)
        axios.get('/filterActivity',
            {
                params:
                {
                    searchquery: data.searchquery,
                    res_type: res_type
                }
            }).then(function (response) {
                try {
                    setResult(response.data)
                } catch (error) {
                    console.log(error.message.status)
                }
            })
    }

    useEffect(() => {
        async function fetchData() {
            const get = await fetch('/filterActivity?searchquery=')

            setResult(await get.json())
            console.log(results)
        }
        fetchData()
    }, [])

    function paragraph_render(p_semantic) {
        return { __html: DOMPurify.sanitize(p_semantic) }
    }

    const loopItemTemplate = (items) => {
        if (!items || items.length < 1) return (
            <div className="p-1 grid grid-cols-12 mx-24 border-b-2 gap-2 py-2">
                <h1 className="col-span-12">Tunggulah aktivitas kami!</h1>
            </div>
        )

        let list = items.map(result => {
            return itemTemplate(result)
        })

        return <div className="">{list}</div>
    }

    function itemTemplate(product) {
        return (
            <Link href={route('activity.detail', product.id)} key={product.id}>
                {/* Jika akses menggunakan desktop */}
                <div className="lg:flex hidden p-6 mx-10 my-4 shadow-md border-2 border-gray-200">
                    <div className="w-[80%] h-[100px]">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900">
                            <h1>{product.title}</h1>
                        </div>
                        <div className="text-blue-900 text-md mb-auto  line-clamp-3">
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

    function filter() {
        return (
            <div className="border-2 border-gray-200 shadow-md relative z-0">
                <div className="p-4">
                    <div className="font-semibold text-xl" >
                        <div className="p-2">
                            <div className="mb-2">
                                <label htmlFor="pricingType">Filter: </label>
                                <select id="pricingType" name="pricingType"
                                    className="w-full h-10 border-2 border-gray-200 px-2 md:px-3 py-0 md:py-1" defaultValue="All"
                                    value={selectedType}
                                    onChange={e => { getData(e.target.value) }}
                                >
                                    <option value="All">All</option>
                                    <option value="Freemium">Freemium</option>
                                    <option value="Free">Free</option>
                                    <option value="Paid">Paid</option>
                                </select>
                            </div>
                            <div className="">

                                <TextInput
                                    id="searchquery"
                                    name="searchquery"
                                    value={data.searchquery}
                                    className=""
                                    isFocused={true}
                                    onChange={(e) => { setData('searchquery', e.target.value); getData(); }}
                                    placeholder="Cari..."
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="">
            <Header />
            <div className="bg-white">
                {/*  Activities and member login */}
                <div className="lg:my-8 my-4">
                    <div className="mx-10">
                        <div className="border-b-2 border-gray-200 uppercase mr-auto flex items-center">
                            <h1 className='font-semibold text-4xl lg:pb-5 pb-3 mr-auto'>Activities</h1>
                        </div>
                        <div className="lg:hidden block min-w-[20%]">
                            {filter()}
                        </div>

                        <div className="flex lg:mt-5 mt-3 flex-col lg:flex-row">
                            {/* Activities */}
                            <div className="">
                                <DataView value={results} listTemplate={loopItemTemplate} paginator rows={5} />
                            </div>
                            <div className="hidden lg:block min-w-[20%]">
                                {filter()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default render;
