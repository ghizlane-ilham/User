<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks' ;

    protected $fillable = [
        'text',
        'startat',
        'endat',
        'isallday',
 
    ];

    public function user() {
        return $this->hasOne(User::class);
    }
        
}
