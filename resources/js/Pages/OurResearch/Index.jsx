import Header from '@/Layouts/GuestLayout';
import '../../../css/activity.css';

const render = () => {
    return (
        <div className="container bg-cover bg-local bg-center h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center h-[86vh]">

                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="white" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                <h1 className='text-white text-5xl'>Our Research</h1>
                <p className='text-white text-lg px-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem corrupti asperiores placeat adipisci labore magni eos omnis ipsum illum libero laudantium voluptas, aspernatur neque modi unde rem repellendus! Tempora, vero?</p>
            </div>

            <div className="my-10">
                <div className="">
                    <div className="border-b-2">
                        <h1 className="text-center text-4xl text-blue-900 font-semibold pb-5">What are we do in CSAC?</h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 shadow-md">
                    <div className="col-span-1 bg-white p-10 my-auto">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900">
                            <h1>Research 1</h1>
                        </div>
                        <div className="text-blue-900 text-sm">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet, pariatur fuga aspernatur autem corrupti obcaecati maxime quasi eum impedit error dolor optio iure laudantium sunt, quae, dolorum officia sit!</p>
                        </div>
                    </div>
                    <div className="col-span-1 bg-blue-900 p-10 my-auto">
                        {/* Add image here */}
                        <div className="flex justify-center">
                            <div className="">
                                <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src="https://via.placeholder.com/150" />
                                <div className="text-white font-medium text-2xl text-center">
                                    <h1>Research 1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 shadow-md">
                    <div className="col-span-1 bg-white p-10 my-auto">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900">
                            <h1>Research 1</h1>
                        </div>
                        <div className="text-blue-900 text-sm">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet, pariatur fuga aspernatur autem corrupti obcaecati maxime quasi eum impedit error dolor optio iure laudantium sunt, quae, dolorum officia sit!</p>
                        </div>
                    </div>
                    <div className="col-span-1 bg-blue-900 p-10 my-auto">
                        {/* Add image here */}
                        <div className="flex justify-center">
                            <div className="">
                                <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src="https://via.placeholder.com/150" />
                                <div className="text-white font-medium text-2xl text-center">
                                    <h1>Research 1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 shadow-md">
                    <div className="col-span-1 bg-blue-900 p-10 my-auto">
                        {/* Add image here */}
                        <div className="flex justify-center">
                            <div className="">
                                <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src="https://via.placeholder.com/150" />
                                <div className="text-white font-medium text-2xl text-center">
                                    <h1>Research 1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white p-10 my-auto">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900 text-end">
                            <h1>Research 1</h1>
                        </div>
                        <div className="text-blue-900 text-sm text-end">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet, pariatur fuga aspernatur autem corrupti obcaecati maxime quasi eum impedit error dolor optio iure laudantium sunt, quae, dolorum officia sit!</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 shadow-md">
                    <div className="col-span-1 bg-blue-900 p-10 my-auto">
                        {/* Add image here */}
                        <div className="flex justify-center">
                            <div className="">
                                <img className="border-2 p-2 bg-white rounded-lg" loading="lazy" src="https://via.placeholder.com/150" />
                                <div className="text-white font-medium text-2xl text-center">
                                    <h1>Research 1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white p-10 my-auto">
                        <div className="text-blue-900 font-medium text-2xl border-b-2 border-b-blue-900 text-end">
                            <h1>Research 1</h1>
                        </div>
                        <div className="text-blue-900 text-sm text-end">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet, pariatur fuga aspernatur autem corrupti obcaecati maxime quasi eum impedit error dolor optio iure laudantium sunt, quae, dolorum officia sit!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default render;
