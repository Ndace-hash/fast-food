<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(
        private MenuController $menuController
    ) {
    }

    public function index()
    {
        return Inertia::render('index', [
            'meals' => $this->menuController->getFeaturedMeals(),
            // Add other data from different controllers here
        ]);
    }
}
