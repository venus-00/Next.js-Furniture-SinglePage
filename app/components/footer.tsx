import React from 'react'
import { FaTwitter, FaLinkedin, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className='pt-5'>
                <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                    <div className="p-5">
                        <h3 className="font-bold text-xl text-primary">Company Name</h3>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-primary font-bold">Products</div>
                        <a className="my-3 block" href="/#">Services <span className="text-teal-600 text-xs p-1"></span></a><a
                            className="my-3 block" href="/#">About Us<span className="text-teal-600 text-xs p-1"></span></a><a
                                className="my-3 block" href="/#">Contact <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-primary font-bold">Support</div>
                        <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a><a
                            className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a><a
                                className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-primary font-bold">Contact us</div>
                        <a className="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA
                            <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">contact@yourcompany.com
                            <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                </div>
            </div>

            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="/#" className="w-6 mx-1">
                            <FaTwitter size={14} />
                        </a>
                        <a href="/#" className="w-6 mx-1">
                            <FaLinkedin size={14} />
                        </a>
                        <a href="/#" className="w-6 mx-1">
                            <FaFacebookSquare size={14} />
                        </a>
                        <a href="/#" className="w-6 mx-1">
                            <FaInstagram size={14} />
                        </a>
                        <a href="/#" className="w-6 mx-1">
                            <FaYoutube size={14} />
                        </a>
                    </div>
                    <div className="my-5">© Copyright 2024. All Rights Reserved.</div>
                </div>
            </div>


        </div>
    )
}

export default Footer
