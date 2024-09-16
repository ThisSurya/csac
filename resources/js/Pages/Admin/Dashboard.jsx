import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";
import { Toast } from 'primereact/toast';
import HelperCard from '@/Components/HelperCard';
import CropImage from '@/Components/CropImage';
import { useForm } from "@inertiajs/react";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { useEffect } from "react";

const render = (id) => {
    const [updateImage, setUpdateImage] = useState(true);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(()=>{
        const image = new Image();
        image.src = id.id[0].sampulpath

        image.onload = () => {
            setDimensions({
                width: image.width,
                height: image.height
            })
        }
    }, [])

    const canUpdateImage = (result) => {
        if (result) {
            console.log(id)
            setUpdateImage(false)
        }
        else {
            setUpdateImage(true)
        }
    }

    const toast = useRef(null);
    const showMessage = (type, message) => {
        console.log(message)
        if (message) {
            toast.current.show({ severity: type, summary: summary, detail: message, life: 10000 });
        }
    }
    const { data, setData, post, errors } = useForm({
        file_upload: ''
    })

    function submit(e) {
        e.preventDefault();
        post(route('background.store'), {
            onSuccess: () => { showMessage('success', 'Success', 'Data berhasil ditambahkan!, kamu akan di redirect dalam 2 detik'); },
            onError: () => { showMessage('error', 'tidak bisa tambah data'); }
        })
    }
    return (
        <div className="flex">
            <AuthenticatedLayout />
            <Toast
                ref={toast}
            />
            <div className="flex flex-col w-full">
                <div className="h-16 flex my-4 ml-4">
                    <h1 className="text-gray-500 text-xl font-bold mr-2">Current Page: Dashboard</h1>
                    <HelperCard
                        header={<h1 className="mr-auto">Dashboard page</h1>}
                        content={
                            <div className="">
                                <p>Berisi untuk mengganti background dari halaman csac untuk guest</p>
                                <ul>
                                    <li>
                                        1. Card 1 digunakan untuk melihat image yang digunakan
                                        di laman CSAC guest
                                    </li>
                                    <li>
                                        2. Card 2 digunakan untuk mengganti image yang digunakan,
                                        sesaat setelah upload imagemu
                                        kamu akan potong image nya terlebih dahulu sebelum digunakan!
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                </div>
                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2  mx-2 mb-2">
                    <div className="p-5">
                        <h1 className="text-gray-500 font-semibold">Background image yang digunakan: </h1>
                        <div className="mt-2">
                            <img src={`${id.id[0].sampulpath}`} alt="" width={600}/>
                        </div>
                        <div className="mr-2">
                            <p>Height: {dimensions.width}</p>
                            <p>Panjang: {dimensions.height}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2  mx-2 mb-2">
                    <div className="p-5">
                        <form action="" onSubmit={submit} method="post">
                            <h1 className="text-gray-500 font-semibold">Ganti image: </h1>
                            <CropImage
                                ratio={3 / 2}
                                onInputChange={(result) => { setData('file_upload', result); canUpdateImage(result) }}
                            />
                            <div className="ml-auto pr-3 card flex flex-wrap justify-content-center gap-3">
                                <Button label="update" outlined disabled={updateImage} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default render;
