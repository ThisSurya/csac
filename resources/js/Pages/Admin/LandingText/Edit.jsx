import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "@inertiajs/react";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import { RedirectTo } from '@/Components/RedirectTo';
import InputError from "@/Components/InputError";
import Authenticated from "@/Layouts/AuthenticatedLayout2";
import { InputTextarea } from "primereact/inputtextarea";

const renderDisplay = (id) => {
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        deskripsi: id.id[0].deskripsi,
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

    useEffect(() => {
        console.log(route('landing.admin.update'))
    })

    function submit(e) {
        e.preventDefault()
        post(route('landing.admin.update'), {
            onSuccess: () => {
                showMessage('success', 'Success', 'Data berhasil diubah!, kamu akan di redirect dalam 2 detik');
                RedirectTo('landing.admin')
            },
            onError: () => {showMessage('error', 'Warning', 'tidak bisa ubah data'); setisActive(false)}
        })
    }

    return (
        <div className="flex">
            <Authenticated />
            <Toast ref={toast} />
            <div className="flex flex-col w-screen">
                <div className="h-16 py-4 ml-4">
                    <h1 className="text-gray-500 text-xl font-bold">Current Page: Edit Activity</h1>
                </div>

                <div className="mx-2 mb-2 border-2 border-gray-200 shadow-md bg-white">
                    <div className="p-5">
                        <div className="font-bold text-2xl text-gray-400">
                            <h1>Edit activity</h1>
                        </div>
                        <div className="py-2">
                            <form action="" onSubmit={submit} method='POST'>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Deskripsi </h1>
                                    </div>
                                    <div className="col-span-9">
                                    <InputTextarea
                                            id='deskripsi'
                                            name='deskripsi'
                                            value={data.deskripsi}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => setData('deskripsi', e.target.value)}
                                            rows={5} cols={30}
                                            disabled={isActive}

                                        />
                                        <InputError message={errors.deskripsi} className="mt-2" />
                                    </div>
                                </div>
                                <div className="ml-auto pr-3 card flex flex-wrap justify-content-center gap-3">
                                    <Button label="Create" outlined />
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
