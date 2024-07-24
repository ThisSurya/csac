import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { Button } from 'primereact/button';
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import InputError from '@/Components/InputError';

const render = () => {
    const { data, setData, post, processing, errors, reset, delete: destroy } = useForm({
        description: '',
    });
    const [results, setResult] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [confDelete, setConfDelete] = useState(false);
    const [addFormModal, setaddFormModal] = useState(false);
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        async function fetchData() {
            const get = await fetch('/position/getPosition')

            setResult(await get.json())
        }
        fetchData()
    }, [])

    const getData = async () => {
        axios.get('/position/getPosition').then(function (response) {
            try {
                setResult(response.data)
            } catch (error) {
                console.log(error.message.status)
            }
        })
    }

    function showModalDelete() {
        setConfDelete(true)
    }

    function closeModalDelete() {
        setSelectedProduct(null)
        setConfDelete(false)
    }

    function showAddForm() {
        setaddFormModal(true)
    }

    function closeModalAddForm() {
        setData('description', '')
        setaddFormModal(false)
    }

    function deleteConfirmation(e) {
        e.preventDefault()
        let arr = []
        selectedProduct.forEach(product => {
            arr += product.id + ","
        })
        console.log(arr)
        destroy(route('position.delete', arr))
        getData()
    }


    function Submit(e) {
        e.preventDefault();

        post(route('position.store'))
        getData()
    }

    return (
        <div className="flex">
            <AuthenticatedLayout />
            <div className="flex flex-col w-full">
                <div className="h-16 mt-4 ml-4">
                    <h1 className="text-gray-500 text-xl font-bold">Current Page: Position</h1>
                </div>

                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2  mx-2 mb-2">
                    <div className="p-5">
                        <div className="flex">
                            <div className="">
                                <Button label="Delete" onClick={showModalDelete} />
                            </div>
                            <div className="ml-auto">
                                <SecondaryButton onClick={showAddForm}>Tambah posisi</SecondaryButton>
                            </div>
                        </div>
                        <div className="mt-4">
                            <DataTable value={results} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                                selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
                            >
                                <Column selectionMode="multiple"></Column>
                                <Column field="id" header="ID" style={{ width: '25%' }}></Column>
                                <Column field="description" header="Deskripsi" style={{ width: '25%' }}></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={confDelete} onClose={closeModalDelete}>
                <div className="p-4">
                    <div className="mb-4">
                        <p>Apakah kamu yakin ingin menghapus data tersebut? </p>
                        <p className="text-rose-600 font-bold">Aksi ini tidak dapat diurungkan</p>
                    </div>
                    <div className="flex mt-4 justify-end">
                        <div className="mr-2">
                            <SecondaryButton onClick={closeModalDelete}>Batal</SecondaryButton>
                        </div>
                        <div className="ml-2">
                            <DangerButton onClick={deleteConfirmation}>Delete</DangerButton>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal show={addFormModal} onClose={closeModalAddForm}>
                <div className="p-4">
                    <div className="mb-4">
                        <h1 className="text-gray-300 text-xl">Tambah Posisi</h1>
                        <div className="grid grid-cols-3">
                            <div className="col-span-1 py-1">
                                <h1>Posisi</h1>
                            </div>
                            <form action="" method="POST" onSubmit={Submit} className="ml-20">
                                <div className="col-span-2 py-1">
                                    <TextInput
                                        id='description'
                                        name='description'
                                        value={data.description}
                                        className=""
                                        isFocused={true}
                                        onChange={(e) => setData('description', e.target.value)}
                                        required
                                        placeholder='nama user'
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                </div>
                                <div className="col-span-3 py-1 mr-auto ">
                                    <PrimaryButton>Tambah</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default render;
