export default function Footer() {
    return (
        <div className="border-t-2 border-[#16cdd8] bg-primary5 px-6 py-6 sm:px-8">
            {/* Copyright Section */}
            <div className="flex justify-center border-[#248da8] pt-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-xs text-[#b8f2ff] md:text-left md:text-sm">
                        © {new Date().getFullYear()} Biro Riset Pengembangan - Ormawa Eksekutif PKU IPB
                    </p>
                </div>
            </div>
        </div>
    );
}
