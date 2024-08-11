import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { DataTable } from 'primereact/datatable';
import HelperCard from '@/Components/HelperCard';

const renderDisplay = () => {
    const { data, setData, post, processing, errors, reset, delete: destroy } = useForm({
        searchquery: '',
        id: '',
        carousel: '',
    });

    const toast = useRef(null);
    const [expandedRows, setExpandedRows] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState([])
    const [allData, setAllData] = useState([]);
    const [shownableData, setShownableData] = useState([])
    const [confDelete, setConfDelete] = useState(false);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        async function fetchData() {
            const get = await fetch('/feature/getFResearch?searchquery=')
            setAllData(await get.json())

            const get2 = await fetch('/feature/getFResearch/shownable')
            setShownableData(await get2.json())
        }
        fetchData()

        if(errors.length){
            showWarn
        }
    }, [])

    const getData = async () => {
        axios.get('/feature/getFResearch',
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
        axios.get('/feature/getFResearch/shownable',
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
        if(selectedProduct.length > 0){
            setEnableButton(false)
        }else{
            setEnableButton(true)
        }
    }

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Warning', detail:'Message Content', life: 3000});
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
            <Link href={route('feature.edit', rowData.id)}>
                <Button label="Edit" icon="pi pi-pencil" />
            </Link>
        )
    }

    function deleteConfirmation() {
        let arr = []
        selectedProduct.forEach(product => {
            arr += product.id + ","
        })
        destroy(route('feature.delete', arr))
    }

    function showError(){
        if(errors.carousel){
            showWarn()
        }
    }

    return (
        <div className="flex">
            <AuthenticatedLayout />
            {
                showError()
            }

            <div className="flex flex-col w-full">
                <div className="h-16 my-4 ml-4 flex">
                    <h1 className="text-gray-500 text-xl font-bold mr-2">Current Page: Feature Research</h1>
                    <HelperCard
                        header={<h1 className="mr-auto">Feature Research page</h1>}
                        content={<p>Page ini berisi data yang akan ditampilkan sebagai carousel, dengan limitasi carousel sebanyak 4. Kamu bisa mengganti data yang akan ditampilkan dengan mengubah value menjadi true pada bagian kolom is shown</p>}
                    />
                </div>
                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2  mx-2 mb-2">
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
                                    onChange={(e) => { setData('searchquery', e.target.value); getData() }}
                                    placeholder="search...."
                                />
                            </div>
                            <div className="ml-auto">
                                <Link href={route('feature.create')} className="hover:text-gray-300 hover:decoration-underline">
                                    Input
                                </Link>
                            </div>
                        </div>
                        <div className="my-5">
                            <DataTable value={allData} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                                selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
                            >
                                <Column selectionMode="multiple" headerStyle={{ width: '5%' }}></Column>
                                <Column field="title_research" header="Judul" headerStyle={{ width: '25%' }}></Column>
                                <Column field="deskripsi" header="deskripsi" style={{ width: '25%' }}></Column>
                                <Column field="is_shown" header="Ditampilkan" style={{ width: '20%' }}></Column>
                                <Column header="Action" body={actionRow} style={{ width: '25%' }}></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2  mx-2 mb-2">
                    <div className="p-5">
                        <div className="h-16 my-4 ml-4">
                            <h1 className="text-gray-500 text-xl font-bold">Data yang akan ditampilkan di landing</h1>
                        </div>
                        <div className="my-5">
                            <DataTable value={shownableData} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                                selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
                            >
                                <Column field="title_research" header="Judul" headerStyle={{ width: '25%' }}></Column>
                                <Column field="deskripsi" header="deskripsi" style={{ width: '25%' }}></Column>
                                <Column field="is_shown" header="Ditampilkan" style={{ width: '20%' }}></Column>
                                <Column header="Action" body={actionRow} style={{ width: '25%' }}></Column>
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

export default renderDisplay;
