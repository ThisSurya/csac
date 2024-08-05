import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'p-3 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none' +
                (active
                    ? 'border-b-2 border-blue-900'
                    : 'border-transparent hover:text-gray-800 hover:bg-gray-200 focus:border-b-gray-800 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
