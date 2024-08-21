<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Models\Person;

class DestroyController extends Controller
{
    public function __invoke(Person $person) {
        $person->delete();
        return response([]);
    }
}
