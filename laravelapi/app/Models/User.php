<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Task;

class User extends Model
{
    use HasFactory;
    protected $table = 'users' ;
    protected $fillable = [
        'userName',
        'email',
        'genre',
        'password',
        'age',
        'objectif',
        'temps',
    ];

    public function task() {
        return $this->belongsTo(Task::class);
    }
}
