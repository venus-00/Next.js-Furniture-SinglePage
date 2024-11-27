import React from 'react';

function Hero() {
    return (
        <div className="hero-container">
            <section className="hero">
                <div className="container mx-auto px-7 py-5" id="hero-section">
                    <div className="flex flex-wrap items-center md:justify-between">
                        {/* Text Column */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="main-title text-3xl md:text-5xl font-bold leading-tight mb-4">
                                Discover Elegant and Modern Furniture
                            </h1>
                        </div>
                        {/* Image Column */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end img-section">
                            <img
                                src="/images/hero2.png"
                                alt="Hero"
                                className="mt-8 pt-8 rounded-t-xl"
                                style={{ width: '500px', height: '550px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
