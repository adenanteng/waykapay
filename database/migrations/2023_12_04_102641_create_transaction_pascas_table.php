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
        Schema::create('transaction_pascas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('transaction_id');
            $table->integer('lembar_tagihan');
            $table->string('tarif')->nullable();
            $table->string('daya')->nullable();
            $table->string('jumlah_peserta')->nullable();
            $table->string('item_name')->nullable();
            $table->string('no_pol')->nullable();
            $table->string('tahun_pajak')->nullable();
            $table->string('kab_kota')->nullable();
            $table->string('kode_iuran')->nullable();
            $table->string('kode_program')->nullable();
            $table->string('kantor_cabang')->nullable();
            $table->string('tgl_efektif')->nullable();
            $table->string('tgl_expired')->nullable();
            $table->timestamps();

            $table->foreign('transaction_id')->on('transactions')->references('id')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_pascas');
    }
};
