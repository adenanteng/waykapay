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
        Schema::create('transaction_money_transfers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('transaction_id');
            $table->integer('bank_id');
            $table->string('to_name')->nullable();
            $table->string('to_number')->nullable();
            $table->unsignedBigInteger('to_id')->nullable();
            $table->timestamps();

            $table->foreign('transaction_id')->on('transactions')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('to_id')->on('users')->references('id')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_money_transfers');
    }
};
