import { Link } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from "react";

const renderComponent = ({ classNames, children, ...props }) => {
    const [isShow, setShow] = useState(false);
    const dropdownDiv = useRef();

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [])

    const handleClickOutside = (event) => {
        if (dropdownDiv.current && !dropdownDiv.current.contains(event.target)) {
        }
    }

    function changeShow() {
        setShow(!isShow)
        console.log(isShow)
    }

    return (
        <div className="" ref={dropdownDiv}>
            <button onClick={changeShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>
            {/* <Dropdown /> */}

            {isShow && (
                <div className="absolute right-4 mt-2 w-48">
                    <div className={'overflow-scroll border-2 border-gray-400 rounded-lg bg-white max-w-full shadow-lg' + classNames}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}

export default renderComponent;
