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
                                <a className="font-medium mr-8 mx-16 text-white hover:text-red-400">
                                    Music-Universe
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="font-medium mr-8 text-white hover:text-red-400">
                                    FanSpace
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="font-medium mr-8  text-white hover:text-red-400">
                                    Nfts
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
