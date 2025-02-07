<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Newsletters;
class NewsletterController extends Controller
{
    
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:newsletters,email',
        ]);
    
        // Adicionar o email à base de dados ou realizar a lógica de inscrição
        Newsletters::create(['email' => $request->email]);
        return response()->json(['message' => 'Inscrição realizada com sucesso!']);
    }
}
