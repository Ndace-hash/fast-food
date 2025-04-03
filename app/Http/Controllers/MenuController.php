<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meals;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function getFeaturedMeals()
    {
        return Meals::where('is_available', true)
            ->orderBy('created_at', 'desc')
            ->take(8)
            ->get();
    }

    public function addMeal(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image_url' => 'required|url',
            'is_available' => 'boolean'
        ]);

        $meal = Meals::create($validated);

        return response()->json([
            'message' => 'Meal added successfully',
            'meal' => $meal
        ], 201);
    }

    public function getAllMeals()
    {
        $meals = Meals::all();
        return response()->json($meals);
    }
}
