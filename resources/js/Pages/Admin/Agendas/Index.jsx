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
import DangerButton from "@/Components/DangerButton";
import { Calendar } from 'primereact/calendar';
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { Dropdown } from "primereact/dropdown";
const render = () => {

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

    const { data, setData, post, processing, errors, reset, delete: destroy } = useForm({
        activity: '',
        tgl: '',
        type:''
    });

    const [results, setResult] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [confDelete, setConfDelete] = useState(false);
    const [activeDeleteButton, setActiveDeleteButton] = useState(true);
    const [addFormModal, setaddFormModal] = useState(false);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;
    const filterType = [
        { title: 'Sekarang'},
        { title: 'Selesai'},
        { title: 'Akan datang'},
    ]

    function showModalDelete() {
        setConfDelete(true)
    }

    function closeModalDelete() {
        setConfDelete(false)
    }

    const getData = async (searchquery='') => {
        axios.get('agenda/getFilterData',
            {
                params:
                    { searchquery: searchquery }
            }).then(function (response) {
                try {
                    setResult(response.data)
                } catch (error) {
                    console.log(error.message.status)
                }
            })
    }

    // const getData = async (searchquery='') =>{
    //     const response = await fetch(`/getFilterData?searchquery=${searchquery}`)

    //     setResult(await response.json())
    // }

    useEffect(() => {
        async function fetchData() {
            const get = await fetch(route('agenda.getData'))

            setResult(await get.json())
        }
        fetchData()
    }, [])

    function showAddFormModal() {
        setaddFormModal(true)
    }

    function activateButton() {
        setActiveDeleteButton(false)
    }

    function deactivateButton() {
        setActiveDeleteButton(true)
    }

    function closeAddModalForm() {
        setaddFormModal(false)
    }

    function deleteConfirmation() {
        let arr = []
        selectedProduct.forEach(product => {
            arr += product.id + ","
        })
        destroy(route('agenda.delete', arr))
        deactivateButton()
        getData()
    }

    function Submit(e) {
        e.preventDefault()

        post(route('agenda.store'))
        getData()
    }

    return (
        <div className="flex">
            <AuthenticatedLayout />
            <div className="flex flex-col w-full">
                <div className="h-16 mt-4 ml-4">
                    <h1 className="text-gray-500 text-xl font-bold">Current Page: Agenda</h1>
                </div>

                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2  mx-2 mb-2">
                    <div className="p-5">
                        <div className="flex">
                            <div className="my-auto">
                                <Button label="Delete" onClick={showModalDelete}
                                    disabled={activeDeleteButton || selectedProduct == '' ? true : false} />
                            </div>
                            <div className="ml-2 flex flex-col">
                                <Dropdown
                                    value={data.type} onChange={(e) => {setData('type',e.value); getData(e.value)}}
                                    options={filterType} optionLabel="title"
                                    optionValue="title"
                                    placeholder="Filter.."
                                />
                            </div>
                            <div className="ml-auto">
                                <SecondaryButton onClick={showAddFormModal}>Tambah</SecondaryButton>
                            </div>
                        </div>
                        <div className="mt-4">
                            <DataTable value={results} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                                selection={selectedProduct} onSelectionChange={(e) => { setSelectedProduct(e.value); activateButton() }} dataKey="id"
                            >
                                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                                <Column field="activity" header="Deskripsi" style={{ width: '25%' }}></Column>
                                <Column field="tgl" header="Tanggal" style={{ width: '25%' }}></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={addFormModal} onClose={closeAddModalForm}>
                <div className="p-4">
                    <div className="mb-4">
                        <h1 className="text-gray-300 text-xl">Tambah Agenda kegiatan</h1>
                        <form action="" onSubmit={Submit}>
                            <div className="grid grid-cols-3">
                                <h1 className="col-span-1 my-auto">Agenda</h1>
                                <TextInput
                                    id='activity'
                                    name='activity'
                                    value={data.activity}
                                    className="col-span-2"
                                    isFocused={true}
                                    onChange={(e) => setData('activity', e.target.value)}
                                    required
                                    placeholder='Agenda kegiatan...'
                                />
                                <InputError message={errors.activity} className="mt-2" />
                            </div>
                            <div className="grid grid-cols-3 py-2">
                                <h1 className="col-span-1 my-auto">Tanggal kegiatan</h1>
                                <Calendar value={data.tgl} onChange={(e) => setData('tgl', e.value)}
                                    className="col-span-2 rounded-lg" minDate={minDate} maxDate={maxDate} readOnlyInput
                                    dateFormat="yy/mm/dd"
                                    inputStyle={{
                                        borderRadius: "10px",
                                        borderColor: "#d1d5db"
                                    }}
                                />
                                <InputError message={errors.tgl} className="mt-2" />
                            </div>
                            <PrimaryButton>Add</PrimaryButton>
                        </form>
                    </div>
                </div>
            </Modal>
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
                            <DangerButton onClick={deleteConfirmation}>Delete</DangerButton>
                        </div>
                    </div>
                    <form action="" method="DELETE" onSubmit={deleteConfirmation}>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default render;
