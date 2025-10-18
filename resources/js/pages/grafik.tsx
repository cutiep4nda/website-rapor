import { usePage } from '@inertiajs/react';
import Footer from './footer';

export default function DetailRapor() {
    const { props } = usePage();
    const { file, nama } = props;
    return (
        <div className="">
            <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary5)] p-6 font-poppins">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-3xl font-bold text-white drop-shadow-lg">📄 Grafik Kinerja</h1>
                    <p>{nama}</p>
                </div>

                <div className="mt-4 h-[80vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
                    <iframe src={`/Grafik/${file}`} className="h-full w-full" title="Rapor Siswa" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
