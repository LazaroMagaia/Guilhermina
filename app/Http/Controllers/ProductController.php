<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Stock;
use Illuminate\Support\Facades\Storage;
use App\Models\Category;
use Illuminate\Support\Str;
class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->get();
        return Inertia::render('Dashboard/Admin/Pages/Product/Index',[
            'products'=>$products
        ]);
    }
    public function create()
    {        $categories = Category::all();
        return Inertia::render('Dashboard/Admin/Pages/Product/Create',[
            'categories'=>$categories
        ]);
    }
    public function singleProduct($slug)
    {
        return Inertia::render('Product/Single',['slug'=>$slug]);
    }
    
    public function store(Request $request)
    {
        // Validação dos dados
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'discount' => 'nullable|numeric|min:0|max:100', // Desconto de 0 a 100%
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category_id' => 'required|exists:categories,id',
        ]);

        // Gerar o slug
        $validated['slug'] = Str::slug($validated['name']);

        // Calcular o preço com o desconto, se houver
        if (isset($validated['discount']) && $validated['discount'] > 0) {
            $validated['price'] = $validated['price'] * (1 - $validated['discount'] / 100);
        }

        // Criar o produto
        $product = Product::create($validated);

        // Lidar com o upload da imagem, se houver
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $product->update(['image' => $path]);
        }

        // Criar o estoque inicial (com 0 unidades)
        Stock::create([
            'product_id' => $product->id,
            'quantity' => 0, // Inicialmente sem estoque
        ]);

        return redirect()->route('admin.products');
    }
    public function edit(Product $product)
    {
        $categories = Category::all();
        $product = Product::with('category')->find($product->id);
        return Inertia::render('Dashboard/Admin/Pages/Product/Edit', [
            'product' => $product,
            'categories' => $categories
        ]);
    }
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'nullable|image',
            'category_id' => 'required|exists:categories,id',
        ]);
        $validated['slug'] = Str::slug($validated['name']);
        if ($request->hasFile('image') && $product->image) {
            Storage::disk('public')->delete($product->image);
        }
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $product->update(['image' => $path]);
        }
        $product->update($validated);

        return redirect()->route('admin.products');
    }
    public function updateImage(Request $request,$id)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $product = Product::findOrFail($id);
        // Excluir a imagem antiga, se existir
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
    
        // Salvar a nova imagem
        $path = $request->file('image')->store('images', 'public');
        $product->update(['image' => $path]);
    
        return redirect()->route('admin.products');
    }
    
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }
}
