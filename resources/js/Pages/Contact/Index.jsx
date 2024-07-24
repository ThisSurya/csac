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
                <h1 className='text-white text-5xl'>Contact Us</h1>
                <p className='text-white text-lg px-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem corrupti asperiores placeat adipisci labore magni eos omnis ipsum illum libero laudantium voluptas, aspernatur neque modi unde rem repellendus! Tempora, vero?</p>
            </div>

            <div className="grid grid-cols-2">
                <div className="cols-span-1 bg-white">
                    <div className="flex flex-col justify-center items-center p-8">
                        <h1 className='text-blue-900 text-2xl font-bold'>Bagaimana cara menghubungi kami?</h1>
                        <p className='text-blue-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quaerat aliquid doloremque commodi! Libero, suscipit laboriosam aut molestiae sit a cupiditate, dolore nesciunt eos hic, exercitationem sint. Sint, error facilis.</p>
                    </div>
                </div>

                <div className="col-span-1 bg-blue-900">
                    <div className="flex justify-center items-center p-8">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                            </svg>
                            <h1 className='text-white font-bold ml-4 text-xl'>0123456789</h1>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="flex justify-center items-center p-8">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                            <h1 className='text-white font-bold ml-4 text-xl'>surya@gmail.com</h1>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default render
