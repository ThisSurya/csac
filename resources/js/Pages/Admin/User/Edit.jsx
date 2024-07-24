import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout2";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import PrimaryButton from '@/Components/PrimaryButton';
import Checkbox from '@/Components/Checkbox';
import InputError from "@/Components/InputError";

const renderDisplay = (id) => {
    const { data, setData, post, errors } = useForm({
        username: id.id[0].name,
        email: id.id[0].email,
        nim: id.id[0].nim,
        id_user: '',
        password: id.id[0].password,
        isAdmin: id.id[0].isadmin,
    });

    function submit(e) {
        e.preventDefault()
        setData('id_user', id.id[0].id)
        post(route('user.update'))
    }

    return (
        <div className="flex">
            <AuthenticatedLayout />
            <div className="flex flex-col w-screen">
                <div className="h-16 py-4 ml-4">
                    <h1 className="text-gray-500 text-xl font-bold">Current Page: Add user</h1>
                </div>

                <div className="mx-2 mb-2 border-2 border-gray-200 shadow-md bg-white">
                    <div className="p-5">
                        <div className="font-bold text-2xl text-gray-400">
                            <h1>Harap isi semua form berikut: </h1>
                        </div>
                        <div className="py-2">
                            <form action="" method='POST'>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Username: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <TextInput
                                            id='username'
                                            name='username'
                                            value={data.username}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => setData('username', e.target.value)}
                                            required
                                            placeholder='nama user'
                                        />
                                        <InputError message={errors.username} className="mt-2" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Email: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <TextInput
                                            id='email'
                                            name='email'
                                            value={data.email}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            placeholder='example@gmail.com'
                                        />
                                        <InputError message={errors.email} className="mt-2" />
                                    </div>

                                </div>

                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Nim: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <TextInput
                                            id='nim'
                                            name='nim'
                                            value={data.nim}
                                            className=""
                                            isFocused={true}
                                            onChange={(e) => setData('nim', e.target.value)}
                                            required
                                            placeholder='a12.34567.890'
                                        />
                                        <InputError message={errors.nim} className="mt-2" />
                                    </div>

                                </div>

                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Password: </h1>
                                    </div>
                                    <div className="col-span-9">
                                        <TextInput
                                            id='password'
                                            name='password'
                                            value={data.password}
                                            className=""
                                            isFocused={true}
                                            type='password'
                                            onChange={(e) => setData('password', e.target.value)}

                                        />
                                        <InputError message={errors.password} className="mt-2" />
                                    </div>

                                </div>

                                <div className="grid grid-cols-12 py-2">
                                    <div className="col-span-3 my-auto">
                                        <h1>Is Admin</h1>
                                    </div>
                                    <div className="col-span-9">
                                        <Checkbox
                                            id='isAdmin'
                                            name='isAdmin'
                                            value={data.isAdmin}
                                            onChange={(e) => setData('isAdmin', e.target.checked)}
                                        />
                                        <InputError message={errors.isAdmin} className="mt-2" />
                                    </div>

                                </div>

                                <div className="mx-auto">
                                    <PrimaryButton
                                        onClick={submit}
                                    >
                                        Add
                                    </PrimaryButton>
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
