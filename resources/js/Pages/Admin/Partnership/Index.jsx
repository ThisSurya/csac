import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import { DataTable } from 'primereact/datatable';
import axios from "axios";
import HelperCard from '@/Components/HelperCard';

const renderDisplay = () => {
    const { data, setData, post, processing, error, reset, delete: destroy } = useForm({
        data_user: '',
        searchquery: '',
    });

    const [expandedRows, setExpandedRows] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [allData, setAllData] = useState([]);
    const [shownableData, setShownableData] = useState([]);
    const [confDelete, setConfDelete] = useState(false);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        async function fetchData() {
            const get = await fetch('/partnership/getPartnership?searchquery=')
            setAllData(await get.json())

            const get2 = await fetch(route('partnership.getData.shownable'))
            setShownableData(await get2.json())
        }
        fetchData()
    }, [])

    const getAllData = async () => {
        axios.get('/partnership/getPartnership',
            {
                params:
                    { searchquery: data.searchquery }
            }).then(function (response) {
                try {
                    setAllData(response.data)
                } catch (error) {
                    console.log(error.message.status)
                }
            })
    }

    const getShownableData = async () => {
        axios.get('/partnership/getPartnership/shownable',
            {}).then(function (response) {
                try {
                    setShownableData(response.data)
                } catch (error) {
                    console.log(error.message.status)
                }
            })
    }

    const [enableButton, setEnableButton] = useState(true);
    const enableDelButton = () => {
        if (selectedProduct.length > 0) {
            setEnableButton(false)
        } else {
            setEnableButton(true)
        }
    }

    const toast = useRef(null);
    const showMessage = (type, message) => {
        if (message) {
            console.log(message)
            toast.current.show({ severity: type, summary: 'Success', detail: message, life: 10000 });
        }
    }

    function showModalDelete() {
        enableDelButton()
        setConfDelete(true)
    }

    function closeModalDelete() {
        setConfDelete(false)
    }

    function actionRow(rowData) {
        return (
            <Link href={route('partnership.edit', rowData.id)}>
                <Button label="Edit" icon="pi pi-pencil" />
            </Link>
        )
    }

    function deleteConfirmation() {
        // e.preventDefault()
        let arr = []
        selectedProduct.forEach(product => {
            arr += product.id + ","
        })
        destroy(route('partnership.delete', arr), {
            onSuccess: () => showMessage('success', 'Data berhasil dihapus'),
            onError: () => showMessage('error', 'tidak bisa tambah data')
        });
    }

    return (
        <div className="flex">
            <AuthenticatedLayout />
            <div className="flex flex-col w-full">
                <div className="h-16 my-4 ml-4 flex">
                    <h1 className="text-gray-500 text-xl font-bold mr-2">Current Page: Partnership</h1>
                    <HelperCard
                        header={<h1 className="mr-auto">Partnership page</h1>}
                        content={
                            <div className="">
                                <p>1. Page ini berisi sponsor yang akan ditampilkan dalam carousel, limitasi pada carousel nya ialah 4. Kamu bisa memilih sponsor mana aja yang akan ditampilkan dengan mencentang mengubah menjadi true bagian is shown</p>
                                <p>2. Rekomendasi ukuran foto sampul yang digunakan 4:3</p>
                            </div>
                        }

                    />
                </div>
                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2 mx-2 mb-2">
                    <div className="p-5">
                        <div className="flex">
                            <div className="">
                                <Button label="Delete" onClick={showModalDelete} className="hover:text-gray-300 hover:decoration-underline" />
                                <div className="card flex justify-center">
                                </div>
                                <TextInput
                                    id="searchquery"
                                    name="searchquery"
                                    value={data.searchquery}
                                    className="rounded-lg"
                                    isFocused={true}
                                    onChange={(e) => { setData('searchquery', e.target.value); getAllData() }}
                                    placeholder="search...."
                                />
                            </div>
                            <div className="ml-auto">
                                <Link href={route('partnership.create')} className="hover:text-gray-300 hover:decoration-underline">
                                    Input
                                </Link>
                            </div>
                        </div>
                        <div className="my-5">
                            <DataTable value={allData} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                                dataKey="id" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)}
                            >
                                <Column selectionMode="multiple" headerStyle={{ width: '5%' }}></Column>
                                <Column field="name" header="Nama partner" headerStyle={{ width: '25%' }}></Column>
                                <Column field="deskripsi" header="deskripsi" style={{ width: '25%' }}></Column>
                                <Column field="is_shown" header="Ditampilkan" style={{ width: '20%' }}></Column>
                                <Column header="Action" body={actionRow} style={{ width: '25%' }}></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2 mx-2 mb-2">
                    <div className="p-5">

                        <div className="h-16 my-4 ml-4">
                            <h1 className="text-gray-500 text-xl font-bold">Data yang akan ditampilkan sebagai carousel: </h1>
                        </div>

                        <DataTable value={shownableData} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                            paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                            dataKey="id"
                        >
                            <Column field="name" header="Nama partner" headerStyle={{ width: '25%' }}></Column>
                            <Column field="deskripsi" header="deskripsi" style={{ width: '25%' }}></Column>
                            <Column field="is_shown" header="Ditampilkan" style={{ width: '20%' }}></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
            <Modal show={confDelete} onClose={closeModalDelete}>
                <div className="p-4">
                    <form action="" method="DELETE" onSubmit={deleteConfirmation}>
                        <div className="mb-4">
                            <p>Apakah kamu yakin ingin menghapus data tersebut? </p>
                            <p className="text-rose-600 font-bold">Aksi ini tidak dapat diurungkan</p>
                        </div>
                        <div className="border-b-2 border-gray-200">
                        </div>
                        <div className="flex mt-4 justify-end">
                            <div className="mr-2">
                                <PrimaryButton onClick={closeModalDelete}>Batal</PrimaryButton>
                            </div>
                            <div className="ml-2">
                                <DangerButton disabled={enableButton}>Delete</DangerButton>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default renderDisplay;
