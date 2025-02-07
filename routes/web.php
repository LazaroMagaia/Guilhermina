<?php

use App\Http\Controllers\{ProfileController,
        HomeController,ProductController,CategoryController,ContactController,
        NewsletterController};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
//Service
Route::get('/services', [HomeController::class, 'service'])->name('services');
//Contact
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');
//Service Pirotecnico
Route::get('/services/pirotecnico', [HomeController::class, 'servicePirotecnico'])
->name('services.pirotecnico');
Route::get('/services/legalidade', [HomeController::class, 'serviceLegalidade'])
->name('services.legality');
//newsletter
Route::post('/newsletter/subscribe', [NewsletterController::class, 'store'])->name('newsletter.subscribe');

//Product
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/{slug}', [ProductController::class, 'singleProduct'])->name('products.single');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Admin
require __DIR__.'/backend/admin.php';
//User
require __DIR__.'/backend/user.php';

require __DIR__.'/auth.php';
