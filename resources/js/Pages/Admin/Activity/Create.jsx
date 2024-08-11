import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import { Editor } from 'primereact/editor';
import { Button } from "primereact/button";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { Dropdown } from "primereact/dropdown";
import InputError from "@/Components/InputError";
import { Calendar } from 'primereact/calendar';
import { useRef, useState } from "react";
import CropImage from '@/Components/CropImage';
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from 'primereact/toast';
import { RedirectTo } from "@/Components/RedirectTo";
const render = (user) => {

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

    const [createActivity, setCreateActivity] = useState(true);
    const [isActive, setisActive] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
        summary_content: '',
        file_upload: [],
        sampul: '',
        tgl: '',
        research_type: '',
    });

    const canCreateActivity = (result) => {
        if (result) {
            setCreateActivity(false);
        } else {
            setCreateActivity(true)
        }
    }

    const toast = useRef(null);
    const showMessage = (type, summary, message) => {
        setisActive(true)
        if (message) {
            console.log(message)
            toast.current.show({ severity: type, summary: summary, detail: message, life: 10000 });
        }
    }

    const research_category = [
        { type: 'Robotics' },
        { type: '3D Reconstruction' },
        { type: 'Applied AI' },
        { type: 'New Media and Emerging Media' },
    ]

    function submit(e) {
        e.preventDefault();

        post(route('activity.store'), {
            onSuccess: () => {showMessage('success', 'Success', 'Data berhasil ditambahkan!, kamu akan di redirect dalam 2 detik'); RedirectTo('activity')},
            onError: () => {showMessage('error', 'tidak bisa tambah data'); setisActive(false)}
        });
    };

    function handleMultipleChange(event) {
        setData('file_upload', [...event.target.files]);
    }
    return (
        <div className="flex">
            <AuthenticatedLayout />
            <Toast ref={toast} />
            <div className="flex flex-col w-screen">
                <div className="h-16 py-4 ml-4">
                    <h1 className="text-gray-500 text-xl font-bold">Current Page: Create Activity</h1>
                </div>

                <div className="mx-2 mb-2 border-2 border-gray-200 shadow-md bg-white">
                    <div className="p-5">
                        <div className="font-bold text-2xl text-gray-400">
                            <h1>Add activity</h1>
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
                                    </div>
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Summary: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <InputTextarea
                                            id='summary_content'
                                            name='summary_content'
                                            value={data.summary_content}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => setData('summary_content', e.target.value)}
                                            rows={5} cols={30}
                                            disabled={isActive}
                                        />
                                    </div>
                                    <InputError message={errors.summary_content} className="mt-2" />
                                </div>

                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Tanggal: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <Calendar value={data.tgl} onChange={(e) => setData('tgl', e.value)}
                                            className="col-span-2 rounded-lg" minDate={minDate} maxDate={maxDate} readOnlyInput
                                            dateFormat="yy/mm/dd"
                                            inputStyle={{
                                                borderRadius: "10px",
                                                borderColor: "#d1d5db"
                                            }}
                                            disabled={isActive}

                                        />
                                    </div>
                                    <InputError message={errors.tgl} className="mt-2" />
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Research type: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <Dropdown
                                            value={data.research_type}
                                            onChange={(e) => setData('research_type', e.value)}
                                            options={research_category}
                                            optionLabel="type"
                                            style={{
                                                borderWidth: '1px',
                                                borderRadius: '10px',
                                                borderColor: '#d1d5db'
                                            }}
                                            disabled={isActive}

                                        />
                                    </div>
                                    <InputError message={errors.research_type} className="mt-2" />
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-12 my-auto">
                                        <h1>Text: </h1>
                                        <div className="card">
                                            <Editor
                                                value={data.content}
                                                onTextChange={(e) => setData('content', e.htmlValue)}
                                                style={{ height: '150px' }}
                                                readOnly={isActive}
                                            />

                                        </div>
                                    </div>
                                    <InputError message={errors.content} className="mt-2" />
                                </div>

                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Sampul</h1>
                                    </div>
                                    <div className="col-span-9 my-auto">
                                        <CropImage
                                            ratio={1}
                                            onInputChange={(result) => { setData('sampul', result); canCreateActivity(result) }}
                                            disabled={isActive}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Dokumentasi</h1>
                                    </div>
                                    <div className="col-span-9 my-auto">
                                        <input type="file" multiple onChange={handleMultipleChange}
                                            disabled={isActive}
                                        />
                                        <InputError message={errors.file_upload} className="mt-2" />
                                    </div>
                                </div>
                                <div className="ml-auto pr-3 card flex flex-wrap justify-content-center gap-3">
                                    <Button label="Create" outlined disabled={createActivity} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default render;
