import { Link, router, usePage } from '@inertiajs/react';
import Footer from './footer';

export default function Rapor() {
    const { props }: any = usePage();
    const { nama, nim, email, kode, birdept } = props;

    return (
        <div>
            <div className="bg-gradient-to-b from-primary5 via-primary4 to-primary5 font-poppins text-white">
                <div className="container mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-4 px-4 py-16 md:gap-12">
                    <div className="flex flex-col text-center">
                        <p className="text-4xl font-bold">Hello, {nama}</p>
                        <p>{birdept[1]}</p>
                    </div>

                    <div className="flex max-w-5xl items-center justify-center gap-4 md:gap-12">
                        <div className="rounded-full border-2 border-primary4 bg-white ring-2 ring-white transition duration-700 hover:scale-110">
                            <img src="/logo/Home1.png" alt="logo1" className="aspect-square h-32 w-32 scale-125 object-contain md:h-44 md:w-44" />
                        </div>
                        <div className="rounded-full border-2 border-primary4 bg-white ring-2 ring-white transition duration-700 hover:scale-110">
                            <img
                                src={`/logo/${birdept[0]}.png`}
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
                            anggota, dan dampak yang dihasilkan. Kami berkomitmen untuk transparansi dan akuntabilitas dalam setiap kegiatan yang kami
                            lakukan.
                        </p>
                    </div>

                    <div className="flex w-full flex-col items-center justify-center gap-6">
                        <Link
                            href="/raport/1"
                            className="flex w-full max-w-xl justify-center rounded-2xl border-2 border-primary4 bg-white py-3 font-semibold text-primary4 shadow-md transition duration-500 hover:bg-primary4 hover:text-white hover:shadow-lg"
                        >
                            Rapor 1
                        </Link>
                        <Link
                            href="/raport/2"
                            className="flex w-full max-w-xl justify-center rounded-2xl border-2 border-primary4 bg-white py-3 font-semibold text-primary4 shadow-md transition duration-500 hover:bg-primary4 hover:text-white hover:shadow-lg"
                        >
                            Rapor 2
                        </Link>
                        <Link
                            href="/raport/3"
                            className="flex w-full max-w-xl justify-center rounded-2xl border-2 border-primary4 bg-white py-3 font-semibold text-primary4 shadow-md transition duration-500 hover:bg-primary4 hover:text-white hover:shadow-lg"
                        >
                            Rapor 3
                        </Link>
                    </div>
                    <button onClick={() => router.post('/logout')}>Logout</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
