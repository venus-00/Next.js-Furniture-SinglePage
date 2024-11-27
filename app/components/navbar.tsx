"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () =>
        setIsOpen(!isOpen);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8 bg-white">
                <div className="flex flex-1">
                    <h1 className="text-xl font-bold">Your Company</h1>
                </div>
                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
                        onClick={toggleNav}
                    >
                        {isOpen ? <IoMdClose size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Product</a>
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Features</a>
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Marketplace</a>
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Company</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">Log in</button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30"
                        onClick={toggleNav}
                    ></div>

                    <div
                        className={`fixed inset-y-0 right-0 z-40 w-[300px] bg-white p-6 shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold">Your Company</h1>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
                                onClick={toggleNav}
                            >
                                <IoMdClose size={24} />
                            </button>
                        </div>
                        <div className="mt-6 space-y-4">
                            <a href="#" className="block text-base font-semibold text-gray-700 hover:text-gray-900">Product</a>
                            <a href="#" className="block text-base font-semibold text-gray-700 hover:text-gray-900">Features</a>
                            <a href="#" className="block text-base font-semibold text-gray-700 hover:text-gray-900">Marketplace</a>
                            <a href="#" className="block text-base font-semibold text-gray-700 hover:text-gray-900">Company</a>
                        </div>
                        <div className="mt-6">
                            <a href="#" className="block text-base font-semibold text-gray-700 hover:text-gray-900">Log in</a>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}

export default Navbar
