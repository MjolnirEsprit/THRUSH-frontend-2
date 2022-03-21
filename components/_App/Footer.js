import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-gray-900 pt-1">
                <div className="container mx-auto px-6">
                    <div className="mt-5 flex flex-col items-center">
                        <div className="py-6">
                            <p className="mb-6 text-white text-sm text-primary-2 font-bold">
                                © {new Date().getFullYear()} Thrush
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;