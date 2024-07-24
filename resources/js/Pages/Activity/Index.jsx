import Header from "@/Layouts/GuestLayout";
import axios from "axios";
import { createElement, useEffect, useRef, useState } from "react";
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
                    { searchquery: data.searchquery,
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
        }
        fetchData()
    }, [])

    function paragraph_render(p_semantic) {
        return{ __html: DOMPurify.sanitize(p_semantic)}
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

    function filter() {
        return (
            <div className="col-span-2">
                <div className="my-3 shadow-md">
                    <TextInput
                        id="searchquery"
                        name="searchquery"
                        value={data.searchquery}
                        className="rounded-md px-2 py-3"
                        isFocused={true}
                        onChange={(e) => { setData('searchquery', e.target.value); getData(); }}
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
                                value={selectedType}
                                onChange={e => {getData(e.target.value)}}
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
    return (
        <div className="">
            <Header />
            <div className="mt-7 grid grid-cols-12">
                <div className="col-span-9">
                    <div className="grid grid-cols-12">
                        <div className="col-span-1"></div>
                        <div className="col-span-10 border-b-4 border-[#e4f47c]">
                            <div className="flex">
                                <h1 className="text-left font-bold text-4xl">Activities</h1>
                            </div>
                        </div>
                    </div>
                    <DataView value={results} listTemplate={loopItemTemplate} paginator rows={5} />
                </div>
                {filter()}
            </div>
        </div>
    );
};

export default render;
