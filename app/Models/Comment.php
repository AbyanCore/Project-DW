<?php

namespace App\Models;

use App\Models\User;
use App\Models\Place;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;

      protected $fillable = [
        'comment',
        'user_id',
        'place_id'
    ];

    public function user () {
      return $this->belongsTo(User::class);
  }

  public function place () {
      return $this->belongsTo(Place::class);
  }
}
