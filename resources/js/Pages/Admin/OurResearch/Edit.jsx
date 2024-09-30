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
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from 'primereact/calendar';
import UploadImage from "@/Components/UploadFile";

const renderDisplay = (id) => {
    let today = new Date()
    let month = today.getMonth()
    let year = today.getFullYear()
    let prevMonth = month === 0 ? 11 : month - 1
    let prevYear = prevMonth === 11 ? year - 1 : year
    let nextMonth = month === 11 ? 0 : month + 1
    let nextYear = nextMonth === 0 ? year + 1 : year

    let minDate = new Date()
    let maxDate = new Date()

    minDate.setMonth(prevMonth)
    minDate.setFullYear(prevYear)
    maxDate.setMonth(nextMonth)
    maxDate.setFullYear(nextYear)


    const { data, setData, post, processing, errors, reset } = useForm({
        title: id.id[0].title,
        deskripsi: id.id[0].deskripsi,
        tanggal_mulai: id.id[0].tanggal_mulai,
        file_upload: '',
        id: id.id[0].id
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

    const [textLength, setTextLength] = useState([]);
    const charCounter = (word) => {
        setTextLength(word.length)
    }

    const [createActivity, setCreateActivity] = useState(true);
    const canCreateOurResearch = (result) => {
        if (result) {
            setCreateActivity(false);
        } else {
            setCreateActivity(true)
        }
    }


    function submit(e) {
        e.preventDefault()
        post(route('ourresearch.update'), {
            onSuccess: () => {
                showMessage('success', 'Success', 'Data berhasil di ubah!, kamu akan di redirect dalam 2 detik');
                RedirectTo('ourresearch')
            },
            onError: () => { showMessage('error', 'Warning', 'tidak bisa edit data'); setisActive(false) }
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
            <div className="flex flex-col w-screen">
                <div className="h-16 py-4 ml-4">
                    <h1 className="text-gray-500 text-xl font-bold">Current Page: Create Our Research</h1>
                </div>

                <div className="mx-2 mb-2 border-2 border-gray-200 shadow-md bg-white">
                    <div className="p-5">
                        <div className="font-bold text-2xl text-gray-400">
                            <h1>Add Research</h1>
                        </div>

                        <div className="py-2">
                            <form action="" method="post" onSubmit={submit}>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Title: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <TextInput
                                            id='title'
                                            name='title'
                                            value={data.title}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => setData('title', e.target.value)}
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
                                        <InputTextarea
                                            id='deskripsi'
                                            name='deskripsi'
                                            value={data.deskripsi}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => { setData('deskripsi', e.target.value); charCounter(e.target.value) }}
                                            rows={5} cols={30}
                                            disabled={isActive}
                                        />
                                        <p className="text-gray-300 font-semibold text-sm">Jumlah karakter: {textLength}</p>
                                        <InputError message={errors.deskripsi} className="mt-2" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Tanggal: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <Calendar value={data.tanggal_mulai} onChange={(e) => setData('tanggal_mulai', e.value)}
                                            className="col-span-2 rounded-lg" minDate={minDate} maxDate={maxDate} readOnlyInput
                                            dateFormat="yy/mm/dd"
                                            inputStyle={{
                                                borderRadius: "10px",
                                                borderColor: "#d1d5db"
                                            }}
                                            disabled={isActive}

                                        />
                                    </div>
                                    <InputError message={errors.tanggal_mulai} className="mt-2" />
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Sampul depan</h1>
                                    </div>
                                    <div className="col-span-9 my-auto">
                                        {/* <CropImage
                                            ratio={1}
                                            disabled={isActive}
                                            onInputChange={(result) => {setData('file_upload', result)}}
                                        /> */}

                                        <UploadImage
                                            onInputChange={(result) => { setData('file_upload', result); }}
                                            disabledComp={isActive}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Sampul poto</h1>
                                    </div>
                                    <div className="col-span-9 my-auto">
                                        <img src={`${id.id[0].sampulpath}`} alt="" width={200} />
                                    </div>
                                </div>

                                <div className="ml-auto pr-3 card flex flex-wrap justify-content-center gap-3">
                                    <Button label="Update" outlined />
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
