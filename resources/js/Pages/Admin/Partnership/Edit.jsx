import React, { useRef, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import { Button } from "primereact/button";
import { useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AuthenticatedLayout2';
import CropImage from '@/Components/CropImage';
import TextInput from "@/Components/TextInput";
import Checkbox from '@/Components/Checkbox';
import InputError from "@/Components/InputError";
import { Toast } from 'primereact/toast';
import { RedirectTo } from '@/Components/RedirectTo';

const renderDisplay = (id) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: id.id[0].name,
        deskripsi: id.id[0].deskripsi,
        isShown: id.id[0].is_shown,
        file_upload: '',
        id: id.id[0].id,
    });

    const [isActive, setisActive] = useState(false);
    const toast = useRef(null);
    const showMessage = (type, summary, message) => {
        setisActive(true)
        if (message) {
            console.log(message)
            toast.current.show({ severity: type, summary: summary, detail: message, life: 10000 });
        }
    }


    const [createActivity, setCreateActivity] = useState(true);
    const canCreateActivity = (result) => {
        if (result) {
            setCreateActivity(false);
        } else {
            setCreateActivity(true)
        }
    }

    const [textLength, setTextLength] = useState([]);
    const charCounter = (word) => {
        setTextLength(word.length)
    }

    function submit(e) {
        e.preventDefault()

        post(route('partnership.update'), {
            onSuccess: () => {
                showMessage('success', 'Data berhasil diubah!, kamu akan di redirect dalam 2 detik');
                RedirectTo('partnership')
            },
            onError: () => { showMessage('error', 'Warning', 'tidak bisa update data'); setisActive(false) }
        });
    }

    function showError() {
        if (errors.carousel) {
            showMessage('error', 'limitasi carousel nya ialah 4')
        }
        setTimeout(() => {
            clearErrors('carousel')
        }, 10)
    }
    return (
        <div className="flex">
            <Authenticated />
            <Toast ref={toast} />
            {
                showError()
            }
            <div className="flex flex-col w-screen">
                <div className="h-16 py-4 ml-4">
                    <h1 className="text-gray-500 text-xl font-bold">Current Page: Create Partnership</h1>
                </div>

                <div className="mx-2 mb-2 border-2 border-gray-200 shadow-md bg-white">
                    <div className="p-5">
                        <div className="font-bold text-2xl text-gray-400">
                            <h1>Add partner</h1>
                        </div>

                        <div className="py-2">
                            <form action="" method="post" onSubmit={submit}>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Title: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <TextInput
                                            id='name'
                                            name='name'
                                            value={data.name}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                            disabled={isActive}

                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Deskripsi: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <TextInput
                                            id='deskripsi'
                                            name='deskripsi'
                                            value={data.deskripsi}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => { setData('deskripsi', e.target.value); charCounter(e.target.value) }}
                                            required
                                            disabled={isActive}
                                        />
                                        <p className="text-gray-300 font-semibold text-sm">Jumlah karakter: {textLength}</p>
                                        <InputError message={errors.deskripsi} className="mt-2" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Is Shown</h1>
                                    </div>
                                    <div className="col-span-9">
                                        <Checkbox
                                            id='isShown'
                                            name='isShown'
                                            checked={data.isShown}
                                            disabled={isActive}

                                            onChange={(e) => setData('isShown', e.target.checked)}
                                        />
                                        <InputError message={errors.isShown} className="mt-2" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Sampul poto partner</h1>
                                    </div>
                                    <div className="col-span-9 my-auto">
                                        <img src={`${id.id[0].sampulpath}`} alt="" width={200} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>icon partner</h1>
                                    </div>
                                    <div className="col-span-9 my-auto">
                                        <CropImage
                                            ratio={4 / 3}
                                            disabled={isActive}
                                            onInputChange={(result) => setData('file_upload', result)}
                                        />
                                    </div>
                                </div>

                                <div className="ml-auto pr-3 card flex flex-wrap justify-content-center gap-3">
                                    <Button label="Update" outlined disabled={createActivity} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default renderDisplay;
