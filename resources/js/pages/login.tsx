import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Login() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-primary5 via-primary4 to-primary5 font-poppins text-white">
            <div className="container mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-4 px-4 py-16 md:gap-12">
                <div className="flex max-w-5xl items-center justify-center gap-4 transition duration-500 hover:scale-110 md:gap-12">
                    <div data-aos="fade-up" data-aos-delay="200" className="rounded-full border-2 border-primary5 bg-white ring-2 ring-white">
                        <img src="/logo/Home1.png" alt="logo1" className="aspect-square h-32 w-32 scale-125 object-contain md:h-44 md:w-44" />
                    </div>
                </div>

                <div className="max-w-3xl text-justify">
                    <h1 className="mb-2 text-center text-4xl font-bold" data-aos="fade-up" data-aos-delay="400">
                        Login Rapor Ormawa
                    </h1>
                    <p className="text-center text-lg" data-aos="fade-up" data-aos-delay="500">
                        Masuk untuk mengakses rapor kinerja kamu
                    </p>
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-6">
                    <div className="flex w-full flex-col items-center justify-center" data-aos="fade-up" data-aos-delay="600">
                        <a
                            href="/auth/google"
                            className="flex w-full max-w-xs items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6 text-primary4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span className="text-sm font-medium">Login dengan Google</span>
                        </a>
                        {/* <a href="/auth/google">Login with Google</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
