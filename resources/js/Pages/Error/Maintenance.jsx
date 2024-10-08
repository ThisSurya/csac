import Header from '@/Layouts/GuestLayout';
import maintenanceimg from '../../../img/Maintenace.svg';
const renderDisplay = () => {
    return (
        <div className="">
            <Header />
            <div className="flex justify-center flex-col">
                <div className="mx-auto">
                    <img src={maintenanceimg} alt="" width={650} />
                </div>
                <div className="text-center">
                    <h1 className='text-3xl font-bold'>Website sedang pengembangan!</h1>
                </div>
                <span className='text-xs text-gray-500 text-center'>Compouter science in art and culture research center!</span>
            </div>
        </div>
    )
}

export default renderDisplay;
