<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardRaport extends Controller
{
    public function dashboard()
    {
        // dd(Auth::user());
        $birdept = [
            'A' => ['bph', 'Badan Pengawas Harian'],
            'B' => ['internal', 'Biro Internal'],
            'C' => ['komit', 'Biro Kolaborasi dan Kemitraan'],
            'D' => ['risbang', 'Biro Riset Pengembangan'],
            'E' => ['medbrand', 'Biro Media Branding'],
            'F' => ['peraga', 'Departemen Pemudan dan Olahraga'],
            'G' => ['senbud', 'Departemen Seni Budaya'],
            'H' => ['slh', 'Departemen Sosial dan Lingkungan Hidup'],
            'I' => ['adkesmah', 'Departemen Advokasi Kesejahteraan Mahasiswa'],
            'J' => ['psdm', 'Departemen Pengembangan Sumberdaya Mahasiswa'],
            'K' => ['akpres', 'Departemen Akademik dan Prestasi'],
            'L' => ['ekraf', 'Departemen Ekonomi Kreatif'],
            'M' => ['kastrat', 'Departemen Kajian Aksi Strategis'],
        ];
        $data = [
            'nama' => Auth::user()->nama,
            'nim' => Auth::user()->nim,
            'email' => Auth::user()->email,
            'kode' => Auth::user()->kode,
            'birdept' => $birdept[substr(Auth::user()->kode, 0, 1)],
        ];
        //dd($data)

        return Inertia::render('rapor', $data);
    }

    public function raport($id)
    {
        // $nama_file = Auth::user()->kode . '_' . $id . '.pdf';
        // dd($nama_file);
        return Inertia::render('detailrapor', [
            'file' => Auth::user()->kode . '_' . $id . '.pdf',
            'nama' => Auth::user()->nama,
            'id' => $id,
        ]);
    }
}
