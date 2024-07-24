import { useForm } from "@inertiajs/react";
const renderComponent = ({content = '', children, className=''}) => {

    const {post} = useForm({})
    function logout(){
        post(route('logout'))
    }
    return(
        <button onClick={logout} className={'px-4 py-2 inline-flex items-center px-1 pt-1text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-700 text-gray-100 text-sm border-transparent text-white hover:text-[#e11d48] hover:border-gray-700 focus:text-gray-300 focus:border-gray-700 ' +
            className}>
            {content}
        {children}
        </button>
    )
}

export default renderComponent;
