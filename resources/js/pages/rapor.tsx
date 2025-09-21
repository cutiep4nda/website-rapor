import { Link } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from './footer';

export default function Rapor() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });

        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary5 via-primary4 to-primary5 font-poppins text-white">
            <AnimatePresence mode="wait">
                {showSplash ? (
                    <motion.div
                        key="splash"
                        className="flex h-screen w-screen items-center justify-center"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div
                            className="rounded-full border-2 border-primary4 bg-white ring-2 ring-white transition duration-700 hover:scale-110"
                            data-aos="zoom-in"
                        >
                            <img src="/logo/Home1.png" alt="logo1" className="aspect-square h-32 w-32 scale-125 object-contain md:h-44 md:w-44" />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <div className="container mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-4 px-4 py-16 md:gap-12">
                            <div className="flex flex-col text-center">
                                <p className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="0">
                                    Halo, Azka Raditya Hafidz
                                </p>
                                <p data-aos="fade-up" data-aos-delay="100">
                                    Biro Riset dan Pengembangan
                                </p>
                            </div>

                            <div className="flex max-w-5xl items-center justify-center gap-4 md:gap-12">
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    className="rounded-full border-2 border-primary4 bg-white ring-2 ring-white"
                                >
                                    <img
                                        src="/logo/Home1.png"
                                        alt="logo1"
                                        className="aspect-square h-32 w-32 scale-125 object-contain md:h-44 md:w-44"
                                    />
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    className="rounded-full border-2 border-primary4 bg-white ring-2 ring-white"
                                >
                                    <img
                                        src="/logo/ekraf.png"
                                        alt="logo2"
                                        className="aspect-square h-32 w-32 scale-90 object-contain md:h-44 md:w-44"
                                    />
                                </div>
                            </div>

                            <div className="max-w-3xl text-justify">
                                <h1 className="mb-8 text-center text-4xl font-bold" data-aos="fade-up" data-aos-delay="400">
                                    Rapor Kinerja Ormawa
                                </h1>

                                <p data-aos="fade-up" data-aos-delay="500">
                                    Rapor kinerja ini mencakup berbagai aspek seperti kegiatan yang telah dilaksanakan, pencapaian target, partisipasi
                                    anggota, dan dampak yang dihasilkan. Kami berkomitmen untuk transparansi dan akuntabilitas dalam setiap kegiatan
                                    yang kami lakukan.
                                </p>
                            </div>

                            <div className="flex w-full flex-col items-center justify-center gap-6">
                                <div className="flex w-full flex-col items-center justify-center" data-aos="fade-up" data-aos-delay="0">
                                    <Link
                                        href="/raport/1"
                                        className="flex w-full max-w-xl justify-center rounded-2xl border-2 border-primary4 bg-white py-3 font-semibold text-primary4 shadow-md transition duration-500 hover:bg-primary4 hover:text-white hover:shadow-lg"
                                    >
                                        Rapor 1
                                    </Link>
                                </div>
                                <div className="flex w-full flex-col items-center justify-center" data-aos="fade-up" data-aos-delay="0">
                                    <Link
                                        href="/raport/1"
                                        className="flex w-full max-w-xl justify-center rounded-2xl border-2 border-primary4 bg-white py-3 font-semibold text-primary4 shadow-md transition duration-500 hover:bg-primary4 hover:text-white hover:shadow-lg"
                                    >
                                        Rapor 1
                                    </Link>
                                </div>
                                <div className="flex w-full flex-col items-center justify-center" data-aos="fade-up" data-aos-delay="0">
                                    <Link
                                        href="/raport/1"
                                        className="flex w-full max-w-xl justify-center rounded-2xl border-2 border-primary4 bg-white py-3 font-semibold text-primary4 shadow-md transition duration-500 hover:bg-primary4 hover:text-white hover:shadow-lg"
                                    >
                                        Rapor 1
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
