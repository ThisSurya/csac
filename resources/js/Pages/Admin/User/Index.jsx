import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import HelperCard from '@/Components/HelperCard';

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
        axios.get('/user/getUser',
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
            const get = await fetch('/user/getUser?searchquery=')

            setResult(await get.json())
        }
        fetchData()
    }, [])

    const [enableButton, setEnableButton] = useState(true);
    const enableDelButton = () => {
        if(selectedProduct.length > 0){
            setEnableButton(false)
        }else{
            setEnableButton(true)
        }
    }

    function actionRow(rowData) {
        return (
            <Link href={route('user.edit', rowData.id)}>
                <Button label="Edit" icon="pi pi-pencil" />
            </Link>
        )
    }

    function deleteConfirmation() {
        let arr = []
        selectedProduct.forEach(product => {
            arr += product.id + ","
        })
        destroy(route('user.delete', arr))
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
            <div className="flex flex-col w-full">
                <div className="h-16 mt-4 ml-4 flex">
                    <h1 className="text-gray-500 text-xl font-bold mr-2">Current Page: User</h1>
            <HelperCard
                header={<h1>User Page</h1>}
                content={<p>Disini kamu bisa membuat member untuk setiap anggota dan bisa nentuin role dari masing masing member dengan mencentang bagian is Admin!</p>}
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
                                    onChange={(e) => { setData('searchquery', e.target.value); getData(); }}
                                    placeholder="search...."
                                />
                            </div>
                            <div className="ml-auto">
                                <Link href={route('user.create')}>
                                    Add user
                                </Link>
                            </div>
                        </div>
                        <div className="mt-4">
                            <DataTable value={results} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                                selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
                            >
                                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                                <Column field="email" header="Email" style={{ width: '25%' }}></Column>
                                <Column field="isadmin" header="Admin" style={{ width: '25%' }}></Column>
                                <Column field="nim" header="nim" style={{ width: '25%' }}></Column>
                                <Column header="Action" body={actionRow} style={{ width: '25%' }}></Column>
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
                    <div className="border-b-2 border-gray-200">
                    </div>
                    <div className="flex mt-4 justify-end">
                        <div className="mr-2">
                            <SecondaryButton onClick={closeModalDelete}>Batal</SecondaryButton>
                        </div>
                        <div className="ml-2">
                            <DangerButton onClick={deleteConfirmation} disabled={enableButton}>Delete</DangerButton>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default render;
