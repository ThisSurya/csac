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
        Schema::create('activities', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->text('content');
            $table->text('summary_content')->nullable();
            $table->foreignId('user_id')->references('id')->on('users');
            $table->text('fileupload')->nullable();
            $table->date('tgl');
            $table->enum('research_type', ['Robotics', '3D Reconstruction', 'Applied AI', 'New Media and Emerging Media'])->default('Robotics');
            $table->integer('total_view')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
