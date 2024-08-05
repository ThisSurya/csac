import Modal from "@/Components/Modal";
import { useState } from "react";

const renderComponent = ({header, content}) => {
    const [showHelper, setShowHelper] = useState(false);

    const setHelperActive = () => {
        setShowHelper(true)
    }

    const setHelperDeactive = () => {
        setShowHelper(false)
    }

    function modalHelper() {
        return (
            <Modal show={showHelper} onClose={setHelperDeactive}>
                <div className="p-4">
                    <div className="font-bold text-xl border-b-2 border-gray-200 flex">
                        {header}
                        <button onClick={setHelperDeactive} className="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-sm content">
                        {content}
                    </div>
                </div>
            </Modal>
        )
    }
    return (
        <div className="">
            {
                modalHelper()
            }

            <button className="mb-auto" onClick={setHelperActive}>
                <svg xmlns="http://www.w3.org/2000/svg" className="" width="26" height="26" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                </svg>
            </button>
        </div>
    )
}

export default renderComponent;
