<?php

use App\Http\Controllers\{ProfileController, AdminController, UserController,
    HomeController,ProductController};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')->middleware(['role:user'])->group(function () {
    Route::get('/user', [UserController::class, 'index'])->name('user.index');
});