<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_settings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('desc')->nullable();
            $table->integer('fees')->default(0);
//            $table->string('midtrans_id_merchant')->nullable();
//            $table->string('midtrans_client_key')->nullable();
//            $table->string('midtrans_server_key')->nullable();
//            $table->string('flip_secret')->nullable();
//            $table->string('flip_token')->nullable();
            $table->string('digiflazz_username')->nullable();
            $table->string('digiflazz_key')->nullable();
            $table->bigInteger('digiflazz_saldo')->nullable();
            $table->bigInteger('ayoconnect_saldo')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_settings');
    }
};
