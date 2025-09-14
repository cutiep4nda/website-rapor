import Footer from './footer';

export default function DetailRapor() {
    return (
        <div className="">
            <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[var(--color-primary4)] to-[var(--color-primary5)] p-6 font-poppins">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-3xl font-bold text-white drop-shadow-lg">📄 Detail Rapor 1</h1>
                    <p>Azka Raditya Hafidz</p>
                </div>

                <div className="mt-4 h-[80vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
                    <iframe
                        src="/rapor/rapor.pdf" // ganti sesuai path PDF
                        className="h-full w-full"
                        title="Rapor Siswa"
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
