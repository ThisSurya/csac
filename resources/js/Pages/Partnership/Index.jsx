import Header from '@/Layouts/GuestLayout';
import '../../../css/activity.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const renderDisplay = () => {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (

        <div className="container bg-cover bg-local bg-center h-screen">
            <Header />
            {/* Header CSAC  */}
            <div className="flex flex-col items-end justify-center px-10 inset-0 p-32">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"
                viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path d="M12.5 15.5l2 2" /><path d="M15 13l2 2" />
                </svg>
                <h1 className="text-9xl text-white font-bold">Partnership</h1>
                <p className="text-xl text-white text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil quisquam fugiat facere deleniti natus modi pariatur unde ipsam sequi, atque, distinctio velit cumque ab. Voluptatibus fuga repudiandae aliquam ratione.</p>
            </div>
            {/* Content carousel */}
            <div className="bg-white py-8">
                <div className="px-10">
                    <div className="border-b-2">
                        <h1 className="text-center text-4xl text-blue-900 font-semibold pb-5">Our partnership</h1>
                    </div>
                </div>
                <div className="mx-32 mt-8">
                    <Carousel
                        additionalTransfrom={0}
                        autoPlay
                        autoPlaySpeed={1}
                        customTransition="all 1s linear"
                        dotListClass=""
                        infinite
                        removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        transitionDuration={3000}
                    >
                        <div className="px-8">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-gray-600 flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-70 p-2" />
                            </a>
                        </div>
                        <div className="px-8">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-gray-600 flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-70 p-2" />
                            </a>
                        </div>
                        <div className="px-8">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-gray-600 flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-70 p-2" />
                            </a>
                        </div>

                    </Carousel>;
                </div>

                <div className="mx-10  py-2">
                    <div className="text-[#252f3f] text-xl font-medium">
                        <h1>Bukti kepercayaan mereka pada kami:</h1>
                    </div>
                    <div className="border-gray-200 rounded-lg shadow-md border-2 border-b-4 border-b-blue-900 m-2">
                        <div className="p-2">
                            <div className="grid grid-cols-12">
                                <div className="col-span-2">
                                </div>
                                <div className="col-span-10">
                                    <div className="text-xl font-semibold">
                                        <h1>Ini adalah Judul partnership</h1>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam laudantium cum alias, quam harum saepe consectetur in mollitia ullam, tempore sequi eaque ipsum iste quia iure cumque, nihil delectus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 rounded-lg shadow-md border-2 border-b-4 border-b-blue-900 m-2">
                        <div className="p-2">
                            <div className="grid grid-cols-12">
                                <div className="col-span-2">
                                </div>
                                <div className="col-span-10">
                                    <div className="text-xl font-semibold">
                                        <h1>Ini adalah Judul partnership</h1>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam laudantium cum alias, quam harum saepe consectetur in mollitia ullam, tempore sequi eaque ipsum iste quia iure cumque, nihil delectus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 rounded-lg shadow-md border-2 border-b-4 border-b-blue-900 m-2">
                        <div className="p-2">
                            <div className="grid grid-cols-12">
                                <div className="col-span-2">
                                </div>
                                <div className="col-span-10">
                                    <div className="text-xl font-semibold">
                                        <h1>Ini adalah Judul partnership</h1>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam laudantium cum alias, quam harum saepe consectetur in mollitia ullam, tempore sequi eaque ipsum iste quia iure cumque, nihil delectus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-10 py-6">
                    <div className="grid grid-cols-2">

                        <div className="col-span-1 font-semibold text-[#252f3f] text-5xl border-r-gray-200 border-r-2 mx-2 my-auto">
                            <h1>Ingin menjadi bagian dari kami?</h1>
                        </div>
                        <div className="col-span-1 mx-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid doloremque assumenda sunt quia officia cumque necessitatibus, saepe nesciunt totam, ea quasi ipsum ullam iusto, sequi sapiente fugit ducimus consequuntur?</p>
                            <div className='mt-auto'>
                                <a href="#" className="flex text-[#252f3f] items-center font-medium underline decoration-1">
                                    <p className='text-xl mr-2'>Klik Disini</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#252f3f" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="bg-blue-900">
                <h1 className='text-white text-center'>&#169; Udinus all right reserved</h1>
            </div>
        </div>
    )
}

export default renderDisplay;
