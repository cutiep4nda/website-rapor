<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('rapor');
})->name('home');

Route::get('/raport', function () {
    return Inertia::render('rapor');
})->name('rapor');
Route::get('/raport/1', function () {
    return Inertia::render('detailrapor');
})->name('rapor');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
