<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
class HomeController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->get();
        return Inertia::render('Index',[
            'products'=>$products
        ]);
    }
    public function service()
    {
        return Inertia::render('Services/Index');
    }
    public function Contact()
    {
        return Inertia::render('Contact/Index');
    }
    public function servicePirotecnico()
    {
        return Inertia::render('Services/Pirotecnicos');
    }
    public function serviceLegalidade()
    {
        return Inertia::render('Services/legality');
    }
    
}
