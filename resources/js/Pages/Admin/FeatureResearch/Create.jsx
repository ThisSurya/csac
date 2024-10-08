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
import { InputTextarea } from 'primereact/inputtextarea';
import UploadImage from "@/Components/UploadFile";
import { RedirectTo } from '@/Components/RedirectTo';
const renderDisplay = () => {
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        titleResearch: '',
        deskripsi: '',
        isShown: false,
        file_upload: '',
    });

    const [createActivity, setCreateActivity] = useState(true);
    const [isActive, setisActive] = useState(false);
    const toast = useRef(null);
    const showMessage = (type, summary, message) => {
        setisActive(true)
        if (message) {
            toast.current.show({ severity: type, summary: summary, detail: message, life: 10000 });
        }
    }

    const [textLength, setTextLength] = useState([]);
    const charCounter = (word) => {
        setTextLength(word.length)
    }

    const canCreateFeatureResearch = (result) => {
        if (result) {
            setCreateActivity(false);
        } else {
            setCreateActivity(true)
        }
    }

    function submit(e) {
        e.preventDefault()
        post(route('feature.store'), {
            onSuccess: () => {showMessage('success', 'Success', 'Data berhasil ditambahkan!, kamu akan di redirect dalam 2 detik'); RedirectTo('feature')},
            onError: () => {showMessage('error', 'tidak bisa tambah data'); setisActive(false)}
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
                    <h1 className="text-gray-500 text-xl font-bold">Current Page: Create Feature Research</h1>
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
                                            id='titleResearch'
                                            name='titleResearch'
                                            value={data.titleResearch}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => setData('titleResearch', e.target.value)}
                                            required
                                            disabled={isActive}

                                        />
                                        <InputError message={errors.titleResearch} className="mt-2" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Deskripsi: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        {/* <TextInput
                                            id='deskripsi'
                                            name='deskripsi'
                                            value={data.deskripsi}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => setData('deskripsi', e.target.value)}
                                            required
                                        /> */}
                                        <InputTextarea
                                            id='deskripsi'
                                            name='deskripsi'
                                            value={data.deskripsi}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => {setData('deskripsi', e.target.value); charCounter(e.target.value)}}
                                            rows={5} cols={30}
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
                                            onChange={(e) => setData('isShown', e.target.checked)}
                                            disabled={isActive}

                                        />
                                        <InputError message={errors.isShown} className="mt-2" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Sampul</h1>
                                    </div>
                                    <div className="col-span-9 my-auto">
                                        {/* <CropImage
                                            ratio={4 / 3}
                                            onInputChange={(result) => {setData('file_upload', result); canCreateFeatureResearch(result)}}
                                            disabled={isActive}
                                        /> */}

                                        <UploadImage
                                            onInputChange={(result) => {setData('file_upload', result); canCreateFeatureResearch(result)}}
                                            disabledComp={isActive}
                                        />
                                    </div>
                                </div>

                                <div className="ml-auto pr-3 card flex flex-wrap justify-content-center gap-3">
                                    <Button label="Create" outlined disabled={createActivity}/>
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

// export default function App() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         file_upload: ''
//     });

//     const [imgSrc, setImgSrc] = useState();
//     const [crop, setCrop] = useState();
//     const [completedCrop, setCompletedCrop] = useState(null);

//     const imgRef = useRef(null);
//     const canvasRef = useRef(null);

//     const handleFileSelect = (e) => {
//         if (e.target.files && e.target.files.length > 0) {
//             const reader = new FileReader();
//             reader.addEventListener('load', () => setImgSrc(reader.result));
//             reader.readAsDataURL(e.target.files[0]);
//         }
//     };

//     const handleCompleteCrop = async (crop) => {
//         console.log(crop)
//         drawImageOnCanvas(imgRef.current, canvasRef.current, crop);
//         const img = await generateImage(canvasRef.current, completedCrop);
//         setData('file_upload', img)
//         setCompletedCrop(crop);
//     };

//     // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
//     const canvasStyles = {
//         width: Math.round(completedCrop?.width ?? 0),
//         height: Math.round(completedCrop?.height ?? 0),
//     };

//     function submit(e) {
//         e.preventDefault()
//         post(route('feature.store'))
//     }

//     return (
//         <div className='App'>
//             <div className='FileSelector'>
//                 <input
//                     id='file'
//                     type='file'
//                     accept='image/*'
//                     onChange={handleFileSelect}
//                     placeholder='Choose file'
//                 />
//             </div>

//             <div className='CropperWrapper'>
//                 <ReactCrop
//                     crop={crop}
//                     onChange={setCrop}
//                     aspect={1.7}
//                     onComplete={handleCompleteCrop}
//                 >
//                     {imgSrc && <img ref={imgRef} src={imgSrc} alt='cropper image' />}
//                 </ReactCrop>
//                 {!imgSrc && <p className='InfoText'>Choose file to crop</p>}
//                 <div className='CanvasWrapper'>
//                     {/* Canvas to display cropped image */}
//                     <canvas ref={canvasRef} style={canvasStyles} />
//                 </div>
//             </div>

//             <div>

//                 <form action="" method='POST'>
//                     <button
//                         type='button'
//                         disabled={!completedCrop}
//                         onClick={submit}
//                     >
//                         Cek!
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }
