<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Str;
class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Dashboard/Admin/Pages/Category/Index',[
            'categories' => $categories
        ]);
    }
    public function create()
    {
        return Inertia::render('Dashboard/Admin/Pages/Category/Create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $request->merge(['slug' => Str::slug($request->name)]);
        $category = Category::create($request->all());
        return redirect()->route('admin.categories')->with('success', 'Category created successfully.');
    }
    public function edit($slug)
    {
        $category = Category::where('slug', $slug)->first();
        return Inertia::render('Dashboard/Admin/Pages/Category/Edit', [
            'category' => $category
        ]);
    }
    public function update(Request $request, $slug)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
  
        $request->merge(['slug' => Str::slug($request->name)]);
        $category = Category::where('slug', $slug)->first();
        $category->update($request->all());
        return redirect()->route('admin.categories')->with('success', 'Category updated successfully.');
    }
    public function destroy($slug)
    {
        $category = Category::where('slug', $slug)->first();
        $category->delete();
        return redirect()->route('admin.categories')->with('success', 'Category deleted successfully.');
    }
}
