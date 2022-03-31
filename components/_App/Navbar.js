import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {

    return (
        <section>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative" aria-label="Global">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link href="/">
                                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                    Home
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                    Nav1
                                </a>
                            </Link>
                            <Link href="/store">
                                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                    store
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Navbar;
