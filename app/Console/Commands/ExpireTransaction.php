<?php

namespace App\Console\Commands;

use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Console\Command;

class ExpireTransaction extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:expire-transaction';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Transaction::where('category_id', Transaction::DEPOSIT)
            ->where('status_id', Transaction::PENDING)
//            ->where('created_at', '<=', Carbon::yesterday())
            ->update(['status_id' => Transaction::EXPIRE]);
    }
}
