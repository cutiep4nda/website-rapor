<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardRaport;
use App\Http\Controllers\Auth\GoogleController;

Route::get('/', function () {
    return Inertia::render('login');
})->name('login');

Route::get('/auth/google', [GoogleController::class, 'redirectToGoogle'])->name('login.google');
Route::get('/auth/google-callback', [GoogleController::class, 'handleGoogleCallback'])->name('google.callback');

Route::middleware(['auth:sakarsian'])->group(function () {
    Route::get('/dashboard', [DashboardRaport::class, 'dashboard'])->name('rapor');

    Route::get('/raport/{id}', [DashboardRaport::class, 'raport'])->name('raport');

    Route::post('/logout', function () {
        Auth::logout();

        request()->session()->invalidate();
        request()->session()->regenerateToken();

        return redirect('/');
    })->name('logout');
});
require __DIR__ . '/settings.php';
// require __DIR__ . '/auth.php';
