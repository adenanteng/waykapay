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
        Schema::table('app_settings', function (Blueprint $table) {
            $table->integer('pulsa_25')->default(0);
            $table->integer('pulsa_50')->default(0);
            $table->integer('pulsa_75')->default(0);
            $table->integer('pulsa_100')->default(0);
            $table->integer('pulsa_200')->default(0);
            $table->integer('pulsa_500')->default(0);
            $table->integer('pulsa_1000')->default(0);
            $table->integer('pulsa_max')->default(0);

            $table->integer('emoney_25')->default(0);
            $table->integer('emoney_50')->default(0);
            $table->integer('emoney_75')->default(0);
            $table->integer('emoney_100')->default(0);
            $table->integer('emoney_200')->default(0);
            $table->integer('emoney_500')->default(0);
            $table->integer('emoney_1000')->default(0);
            $table->integer('emoney_max')->default(0);

            $table->integer('games_25')->default(0);
            $table->integer('games_50')->default(0);
            $table->integer('games_75')->default(0);
            $table->integer('games_100')->default(0);
            $table->integer('games_200')->default(0);
            $table->integer('games_500')->default(0);
            $table->integer('games_1000')->default(0);
            $table->integer('games_max')->default(0);

            $table->integer('voucher_25')->default(0);
            $table->integer('voucher_50')->default(0);
            $table->integer('voucher_75')->default(0);
            $table->integer('voucher_100')->default(0);
            $table->integer('voucher_200')->default(0);
            $table->integer('voucher_500')->default(0);
            $table->integer('voucher_1000')->default(0);
            $table->integer('voucher_max')->default(0);

            $table->integer('pln_25')->default(0);
            $table->integer('pln_50')->default(0);
            $table->integer('pln_75')->default(0);
            $table->integer('pln_100')->default(0);
            $table->integer('pln_200')->default(0);
            $table->integer('pln_500')->default(0);
            $table->integer('pln_1000')->default(0);
            $table->integer('pln_max')->default(0);

            $table->integer('internet_25')->default(0);
            $table->integer('internet_50')->default(0);
            $table->integer('internet_75')->default(0);
            $table->integer('internet_100')->default(0);
            $table->integer('internet_200')->default(0);
            $table->integer('internet_500')->default(0);
            $table->integer('internet_1000')->default(0);
            $table->integer('internet_max')->default(0);

            $table->integer('tv_25')->default(0);
            $table->integer('tv_50')->default(0);
            $table->integer('tv_75')->default(0);
            $table->integer('tv_100')->default(0);
            $table->integer('tv_200')->default(0);
            $table->integer('tv_500')->default(0);
            $table->integer('tv_1000')->default(0);
            $table->integer('tv_max')->default(0);

            $table->integer('etoll_25')->default(0);
            $table->integer('etoll_50')->default(0);
            $table->integer('etoll_75')->default(0);
            $table->integer('etoll_100')->default(0);
            $table->integer('etoll_200')->default(0);
            $table->integer('etoll_500')->default(0);
            $table->integer('etoll_1000')->default(0);
            $table->integer('etoll_max')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('app_settings', function (Blueprint $table) {
            //
        });
    }
};
