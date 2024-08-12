import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import HelperCard from '@/Components/HelperCard';

const renderDisplay = () => {
    const [results, setResult] = useState([]);

    function actionRow(rowData) {
        return (
            <Link href={route('landing.admin.edit', rowData.id)}>
                <Button label="Edit" icon="pi pi-pencil" />
            </Link>
        )
    }

    useEffect(() => {
        async function fetchData() {
            const get = await fetch('/landing/getLanding?searchquery=')

            setResult(await get.json())
        }
        fetchData()
    }, [])

    return (
        <div className="flex">
            <AuthenticatedLayout />
            <div className="flex flex-col w-full">
                <div className="h-16 my-4 ml-4 flex">
                    <h1 className="text-gray-500 text-xl font-bold mr-2">Current Page: Dashboard Content editor</h1>
                    <HelperCard
                        header={<h1>Dashboard Content Editor</h1>}
                        content={<p>Dashboard content editor adalah bagian yg mengotrol teks utama (tepat dibawah judul persis) kamu bisa mendeksripsikan dari setiap page pada page ini. Terdiri 7 bagian page</p>}
                    />
                </div>

                <div className="bg-white shadow-lg rounded-lg border-gray-300 border-2  mx-2 mb-2">
                    <div className="p-5">
                        <div className="flex">
                        </div>
                        <div className="my-5">
                            <DataTable value={results} tableStyle={{ minWidth: '50rem' }}
                                dataKey="id"
                            >
                                <Column field="section" header="Section" style={{ width: '35%' }}></Column>
                                <Column field="deskripsi" header="Summary" style={{ width: '35%' }}></Column>
                                <Column header="Action" body={actionRow} style={{ width: '20%' }}></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default renderDisplay;
