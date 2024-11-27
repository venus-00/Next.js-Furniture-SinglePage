import React from 'react'

function Categories() {
    return (
        <div>
            <div className="text-left p-10">
                <h1 className="font-bold text-2xl mb-4">Popular Categories</h1>
            </div>
            <div className="container relative z-40 m-auto mt-12">

                <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">

                    <a href="#" className="block w-1/2 py-10 text-center lg:w-1/4">
                        <div>
                            <img src="/images/sofa.jpg" className="h-60 w-52 block mx-auto" />

                            <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                                Sofas
                            </p>
                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center lg:w-1/4">
                        <div>
                            <img src="/images/bed1.jpg" className="h-60 w-52 block mx-auto" />

                            <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                                Beds
                            </p>
                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center lg:w-1/4">
                        <div>
                            <img src="/images/bookshelf.jpg" className="h-60 w-52 block mx-auto" />

                            <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                                Bookshelves
                            </p>
                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center lg:w-1/4">
                        <div>
                            <img src="/images/table.jpg" className="h-60 w-52 block mx-auto" />

                            <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                                Tables
                            </p>
                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center lg:w-1/4">
                        <div>
                            <img src="/images/bath.png" alt="Product" className="h-60 w-52 block mx-auto" />

                            <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                                Bathrooms
                            </p>
                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center lg:w-1/4">
                        <div>
                            <img src="/images/homedecor1.png" className="h-60 w-52 block mx-auto" />

                            <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                                Home Decor
                            </p>
                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center lg:w-1/4">
                        <div>
                            <img src="/images/chair.jpg" className="h-60 w-52 block mx-auto" />

                            <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                                Chair
                            </p>
                        </div>
                    </a>

                    <a href="#" className="block w-1/2 py-10 text-center lg:w-1/4">
                        <div>
                            <img src="/images/lamp1.png" className="h-60 w-52 block mx-auto" />

                            <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                                Lighting
                            </p>
                        </div>
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Categories
