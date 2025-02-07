<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stock;
use App\Models\StockMovement;
use App\Models\Product;
use Inertia\Inertia;
class StockController extends Controller
{
    public function index()
    {
        $stocks = Stock::with('product')->get();
        return Inertia::render('Dashboard/Admin/Pages/Stock/Index', [
            'stocks' => $stocks,
        ]);
    }
    public function StockCreate($productId)
    {
        $product = Product::find($productId);
        return Inertia::render('Dashboard/Admin/Pages/Stock/Moviments/StockEntry',
            ['product' => $product]);
    }
    public function StockRemove($productId)
    {
        $product = Product::find($productId);
        return Inertia::render('Dashboard/Admin/Pages/Stock/Moviments/StockRemove',
            ['product' => $product]);
    }
    public function increaseStock(Request $request, $productId)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1',
            'price' => 'nullable|numeric', // Opcional: preço do produto
        ]);

        // Buscar o estoque atual
        $stock = Stock::where('product_id', $productId)->first();

        // Se o estoque já existe, apenas aumenta a quantidade
        if ($stock) {
            $stock->quantity += $request->quantity;
        } else {
            // Caso o estoque não exista, cria um novo
            $stock = Stock::create([
                'product_id' => $productId,
                'quantity' => $request->quantity,
            ]);
        }

        // Registrar o movimento de entrada no estoque
        StockMovement::create([
            'product_id' => $productId,
            'movement_type' => 'entrada',
            'quantity' => $request->quantity,
            'price' => ($request->price*$request->quantity), // Opcional
        ]);

        // Salvar alterações no estoque
        $stock->save();

        return redirect()->route('admin.stock.index')->with('success', 'Estoque aumentado com sucesso!');
    }
    public function decreaseStock(Request $request, $productId)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        // Buscar o produto e seu estoque
        $product = Product::findOrFail($productId);
        $stock = $product->stock;

        // Verificar se há estoque suficiente
        if ($stock && $stock->quantity >= $request->quantity) {
            // Diminuir o estoque
            $stock->quantity -= $request->quantity;
            $stock->save();

            // Registrar o movimento de saída no estoque
            StockMovement::create([
                'product_id' => $productId,
                'movement_type' => 'saida',
                'quantity' => $request->quantity,
                'price' => ($product->price*$request->quantity),
            ]);
            return redirect()->route('admin.stock.index')->with('error', 'Estoque diminuído com sucesso!.');
        }
        return redirect()->route('admin.stock.index')->with('error', 'Estoque insuficiente.');
    }

   
}
