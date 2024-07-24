import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 text-gray-100 focus:border-indigo-300 '
                    : 'border-transparent text-white hover:text-gray-200 hover:border-b-gray-200 focus:text-gray-400 focus:border-b-gray-400 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
