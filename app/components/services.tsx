"use client";
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaHome, FaTruckMoving, FaCogs, FaHandshake, FaChair, FaCheck } from "react-icons/fa";
import './services.css';

function Services() {
    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 4,
            spacing: 15,
        },
    })
    return (
        <>
            <div className="text-left p-10">
                <h1 className="font-bold text-3xl mb-4">Our Services</h1>
            </div>
            <div ref={ref} className="keen-slider text-primary">
                <div className="keen-slider__slide number-slide1">
                    <div>
                        <FaTruckMoving size={100} />
                        <p className='ml-3'>Delivery</p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2 ">
                    <div>
                        <FaCheck size={100} />
                        <p className='ml-3'>Assembly</p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide3">
                    <div>
                        <FaChair size={100} />
                        <p>Customization</p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide4">
                    <div>
                        <FaCogs size={100} />
                        <p className='ml-3'>Repair</p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide5">
                    <div>
                        <FaHome size={100} />
                        <p className='ml-3'>Design</p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide6">
                    <div>
                        <FaHandshake size={100} />
                        <p>Consultation</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Services
