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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('token');
            $table->string('sku');
            $table->string('order_id');
            $table->String('product_name');
            $table->string('customer_no');
            $table->unsignedBigInteger('user_id');
            $table->integer('status_id');
            $table->integer('category_id');
//            $table->integer('amount_last');
            $table->integer('amount');
            $table->string('desc')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->on('users')->references('id')->onDelete('cascade')->onUpdate('cascade');
//            $table->foreign('category_id')->on('blog_categories')->references('id')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
};
