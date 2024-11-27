import React from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";

function Cards() {
    return (
        <div>
            <div className="text-left p-10">
                <h1 className="font-bold text-4xl mb-4">Our Products</h1>
            </div>
            <section id="cards"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {/* CARD-1 */}

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="/images/sofa.jpg"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <div className="ml-auto">
                                    <MdOutlineAddShoppingCart size={20} />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* CARD-2 */}

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="/images/chair.jpg"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <div className="ml-auto">
                                    <MdOutlineAddShoppingCart size={20} />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* CARD-3 */}

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="/images/table.jpg"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <div className="ml-auto">
                                    <MdOutlineAddShoppingCart size={20} />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* CARD-4 */}

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="/images/sofa.jpg"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <div className="ml-auto">
                                    <MdOutlineAddShoppingCart size={20} />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* CARD-5 */}

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="/images/chair.jpg"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <div className="ml-auto">
                                    <MdOutlineAddShoppingCart size={20} />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* CARD-6 */}

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="/images/table.jpg"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <div className="ml-auto">
                                    <MdOutlineAddShoppingCart size={20} />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>


            </section>
        </div>
    )
}

export default Cards
