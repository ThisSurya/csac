import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import HelperCard from '@/Components/HelperCard';
import DangerButton from "@/Components/DangerButton";
import { Toast } from 'primereact/toast';

const render = () => {
    const { data, setData, post, processing, error, reset, delete: destroy } = useForm({
        searchquery: ''
    });
    const toast = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState([])
    const [results, setResult] = useState([]);
    const [confDelete, setConfDelete] = useState(false);
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    const getData = async () => {
        axios.get('/filterActivity',
            {
                params:
                    { searchquery: data.searchquery }
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

    const showMessage = (type, message) => {
        console.log(message)
        toast.current.show({ severity: type, summary: 'Success', detail: message, life: 20000 });
    }

    function actionRow(rowData) {
        return (
            <Link href={route('activity.edit', rowData.id)}>
                <Button label="Edit" icon="pi pi-pencil" />
            </Link>
        )
    }

    const [enableButton, setEnableButton] = useState(true);
    const enableDelButton = () => {
        if (selectedProduct.length > 0) {
            setEnableButton(false)
        } else {
            setEnableButton(true)
        }
    }

    function deleteConfirmation() {
        let arr = []
        selectedProduct.forEach(product => {
            arr += product.id + ","
        })
        destroy(route('activity.delete', arr), {
            onSuccess: () => showMessage('success', 'Hapus data berhasil!'),
            onError: () => showMessage('error', 'Tidak bisa menghapus data!!')
        })
    }

    function showModalDelete() {
        enableDelButton()
        setConfDelete(true)
    }

    function closeModalDelete() {
        setConfDelete(false)
    }

    return (
        <div className="flex">
            <AuthenticatedLayout />
            <Toast ref={toast} />
            <div className="flex flex-col w-full">
                <div className="h-16 my-4 ml-4 flex">
                    <h1 className="text-gray-500 text-xl font-bold mr-2">Current Page: Activity</h1>
                    <HelperCard
                        header={<h1 className="mr-auto">Activity page</h1>}
                        content={
                            <div className="">
                                <p>1. Page ini berisi konten aktivitas yang akan ditampilkan pada activities page</p>
                                <p>2. Sampul nya memiliki perbandingan ukuran 1:1</p>
                                <p>3. Dokumentasi nya memiliki perbandingan ukuran 4:3</p>
                            </div>
                        }
                    />
                </div>
                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2  mx-2 mb-2">
                    <div className="p-5">
                        <div className="flex">
                            <div className="">
                                <Button label="Delete" onClick={showModalDelete} />
                                <div className="card flex justify-center">
                                </div>
                                <TextInput
                                    id="searchquery"
                                    name="searchquery"
                                    value={data.searchquery}
                                    className="rounded-lg"
                                    isFocused={true}
                                    onChange={(e) => { setData('searchquery', e.target.value); getData() }}
                                    placeholder="search...."
                                />
                            </div>
                            <div className="ml-auto">
                                <Link href={route('activity.create')} className="hover:text-gray-300 hover:decoration-underline">
                                    Input
                                </Link>
                            </div>
                        </div>
                        <div className="my-5">
                            <DataTable value={results} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                                selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
                            >
                                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                                <Column field="title" header="Title" className="w-[15%]"></Column>
                                <Column field="summary_content" header="Summary" className="truncate max-w-[25vh]"></Column>
                                <Column field="user_id" header="User id" className="w-[5%]"></Column>
                                <Column field="tgl" header="Date release" className="w-[10%]"></Column>
                                <Column field="research_type" header="research type" className="w-[15%]"></Column>
                                <Column header="Action" body={actionRow} className="w-[20%]"></Column>
                            </DataTable>
                        </div>
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
                                <SecondaryButton onClick={closeModalDelete}>Batal</SecondaryButton>
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

export default render;
