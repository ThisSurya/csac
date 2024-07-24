import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";

const render = (user) => {
    return (
        <div className="flex">
            <AuthenticatedLayout />
            <div className="h-16 flex items-center ml-4">
                    <h1 className="text-gray-500 text-xl font-bold">Current Page: Dashboard</h1>
                <div className="">

                </div>
            </div>
        </div>
    )
}

export default render;
