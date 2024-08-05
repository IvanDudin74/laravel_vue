<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function __invoke() {
        $persons = [
            [
                'id' => 1,
                'name' => 'Yury',
                'age'=> '44',
                'weight' => 80
            ],
            [
                'id' => 2,
                'name' => 'Denis',
                'age'=> '48',
                'weight' => 87
            ],
            [
                'id' => 3,
                'name' => 'Yulya',
                'age'=> '41',
                'weight' => 57
            ],
            [
                'id' => 4,
                'name' => 'Sergey',
                'age'=> '21',
                'weight' => 90
            ],
        ];
        return $persons;
    }
}
