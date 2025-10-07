<?php
// app/Http/Controllers/Auth/GoogleController.php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Sakarsian;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            // dd($googleUser);
            if (!str_ends_with($googleUser->getEmail(), '@apps.ipb.ac.id')) {
                return response()->view('errors.salah-login');
            }

            $user = Sakarsian::where('email', $googleUser->getEmail())->first();
            Auth::guard('sakarsian')->login($user);

            // dd(Auth::user());

            return redirect()->route('rapor');

        } catch (\Exception $e) {
            Log::error('Google Login Error:', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return redirect('/')->with('error', 'Login gagal: ' . $e->getMessage());
        }
    }

}
