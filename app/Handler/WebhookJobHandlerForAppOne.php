<?php

namespace App\Handler;

use Illuminate\Support\Facades\Response;
use Spatie\WebhookClient\Jobs\ProcessWebhookJob;

class WebhookJobHandlerForAppOne extends ProcessWebhookJob
{
    /**
     * The number of seconds the job can run before timing out.
     *
     * @var int
     */
    public $timeout = 120;

    public function handle()
    {
        //You can perform an heavy logic here
        logger($this->webhookCall);
        sleep(10);
        logger("I am done");

        return Response::json(['status' => 'ok'], 200);
    }
}
