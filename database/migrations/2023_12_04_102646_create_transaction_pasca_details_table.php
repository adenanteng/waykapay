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
        Schema::create('transaction_pasca_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pasca_id');
            $table->string('periode')->nullable();
            $table->string('nilai_tagihan')->nullable();
            $table->string('meter_awal')->nullable();
            $table->string('meter_akhir')->nullable();
            $table->string('admin')->nullable();
            $table->string('denda')->nullable();
            $table->string('biaya_lain')->nullable();
            $table->timestamps();

            $table->foreign('pasca_id')->on('transaction_pascas')->references('id')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_pasca_details');
    }
};
