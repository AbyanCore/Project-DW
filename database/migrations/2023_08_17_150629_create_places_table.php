<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('places', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id');
            $table->string('name');
            $table->text('description');
            $table->string('locate');
            $table->string('Mainimage');
            $table->string('image_Sec1');
            $table->string('image_Sec2');
            $table->string('image_Sec3');
            $table->string('open_at');
            $table->string('close_at');
            $table->integer('ticket_price');
            $table->timestamp('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('places');
    }
};
