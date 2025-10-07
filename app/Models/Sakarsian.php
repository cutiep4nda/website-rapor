<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Sakarsian extends Authenticatable
{
    use HasFactory;

    protected $fillable = ['nama', 'nim', 'email', 'kode'];
    public function kode(): HasOne
    {
        return $this->hasOne(Kode::class);
    }
}
