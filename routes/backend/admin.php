<?php

use App\Http\Controllers\{ProfileController, AdminController, UserController,
    HomeController,ProductController,CategoryController,StockController,
    StockMovimentsController};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')->middleware(['role:admin'])->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.index');

    //Categories
    Route::get('/categories', [CategoryController::class, 'index'])->name('admin.categories');
    Route::get('/categories/create', [CategoryController::class, 'create'])->name('admin.categories.create');
    Route::post('/categories', [CategoryController::class, 'store'])->name('admin.categories.store');
    Route::get('/categories/{slug}/edit', [CategoryController::class, 'edit'])->name('admin.categories.edit');
    Route::put('/categories/{slug}', [CategoryController::class, 'update'])->name('admin.categories.update');
    Route::delete('/categories/{slug}', [CategoryController::class, 'destroy'])->name('admin.categories.destroy');
    //Products
    Route::get('/products', [ProductController::class, 'index'])->name('admin.products');
    Route::get('/products/create', [ProductController::class, 'create'])->name('admin.products.create');
    Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('admin.products.edit');
    
    Route::post('/products/{id}/image', [ProductController::class, 'updateImage'])
    ->name('admin.products.image.store');
    Route::post('/products', [ProductController::class, 'store'])->name('admin.products.store');
    Route::put('/products/{product}', [ProductController::class, 'update'])->name('admin.products.update');
    Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('admin.products.destroy');
    
    //Stock Moviments
    Route::get('/stock', [StockController::class, 'index'])->name('admin.stock');
    Route::put('/products/{productId}/increase-stock', [StockController::class, 'increaseStock'])
    ->name('admin.stock.increase');
    Route::put('/products/{productId}/decrease-stock', [StockController::class, 'decreaseStock'])
    ->name('admin.stock.decrease');
    // Moviments
    Route::get('/stock/moviments/create/{productId}', [StockController::class, 'StockCreate'])
    ->name('admin.stock.moviments_create');
    Route::get('/stock/moviments/remove/{productId}', [StockController::class, 'StockRemove'])
    ->name('admin.stock.moviments_remove');
});