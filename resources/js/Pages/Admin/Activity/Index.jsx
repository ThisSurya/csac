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

const render = () => {
    const { data, setData, post, processing, error, reset, delete: destroy } = useForm({
        searchquery: ''
    });
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

    const [showHelper, setShowHelper] = useState(false);

    const setHelperActive = () => {
        setShowHelper(true)
    }

    const setHelperDeactive = () => {
        setShowHelper(false)
    }

    function helperModal() {
        return (
            <Modal show={showHelper} onClose={setHelperDeactive}>
                <div className="p-4">
                    <div className="font-bold text-xl border-b-2 border-gray-200 flex">
                        <h1 className="mr-auto">Activity Helper!</h1>
                        <button onClick={setHelperDeactive}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatem est maiores deserunt nostrum ipsa nulla dignissimos, voluptas nobis, ex, vitae consequuntur in minus nemo possimus animi nam qui pariatur.
                    </div>
                </div>
            </Modal>
        )
    }

    function actionRow(rowData) {
        return (
            <Link href={route('activity.edit', rowData.id)}>
                <Button label="Edit" icon="pi pi-pencil" />
            </Link>
        )
    }

    function deleteConfirmation() {
        let arr = []
        selectedProduct.forEach(product => {
            arr += product.id + ","
        })
        destroy(route('activity.delete', arr))
        // getData()
    }

    const showModalDelete = () => {
        setConfDelete(true)
    }

    const closeModalDelete = () => {
        setConfDelete(false)
    }

    return (
        <div className="flex">
            <AuthenticatedLayout />
            <div className="flex flex-col w-full">
                <div className="h-16 my-4 ml-4 flex">
                    <h1 className="text-gray-500 text-xl font-bold mr-2">Current Page: Activity</h1>
                    <HelperCard
                        header={<h1 className="mr-auto">Activity page</h1>}
                        content={<p>Page ini berisi konten aktivitas yang akan ditampilkan pada activities page</p>}
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
                                <Column field="title" header="Title" style={{ width: '15%' }}></Column>
                                <Column field="summary_content" header="Summary" style={{ width: '35%' }}></Column>
                                <Column field="user_id" header="User id" style={{ width: '5%' }}></Column>
                                <Column field="tgl" header="Date release" style={{ width: '10%' }}></Column>
                                <Column field="research_type" header="research type" style={{ width: '15%' }}></Column>
                                <Column header="Action" body={actionRow} style={{ width: '20%' }}></Column>
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
                                <DangerButton>Delete</DangerButton>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>

        </div>


    )
}

export default render;
