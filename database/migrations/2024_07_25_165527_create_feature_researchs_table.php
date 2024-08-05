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
        Schema::create('feature_researchs', function (Blueprint $table) {
            $table->id();
            $table->string('title_research');
            $table->string('deskripsi');
            $table->string('sampulpath')->nullable();
            $table->string('sampulname')->nullable();
            $table->boolean('is_shown')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feature_researchs');
    }
};
