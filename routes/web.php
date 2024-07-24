<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\ManageUserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    return Inertia::render('Landing/Index');
})->name('landing');
Route::get('/activity', function(){
    return Inertia::render('Activity/Index');
})->name('activity.index');
Route::get('/publication', function(){
    return Inertia::render('Publication/Index');
})->name('publication.index');
Route::get('/researcher', function(){
    return Inertia::render('Researcher/Index');
})->name('research.index');
Route::get('/contact', function(){
    return Inertia::render('Contact/Index');
})->name('contact.index');
Route::get('/ourresearch', function(){
    return Inertia::render('OurResearch/Index');
})->name('ourresearch.index');
Route::get('/partnership', function(){
    return Inertia::render('Partnership/Index');
})->name('partnership.index');

Route::get('/filterActivity', [ActivityController::class, 'getData']);
Route::get('/getData', [ActivityController::class, 'getDataByDate']);
Route::get('/getDate', [ActivityController::class, 'getDate']);
Route::get('/getImage', [ActivityController::class, 'getImage']);
Route::get('/activity/detail/{id}', [ActivityController::class, 'detailPage'])->name('activity.detail');

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function (){
    Route::get('/activity/admin', [ActivityController::class, 'index'])->name('activity');
    Route::get('/activity/admin/create', [ActivityController::class, 'create'])->name('activity.create');
    Route::get('/activity/admin/edit/{id}', [ActivityController::class, 'edit'])->name('activity.edit');
    Route::post('/activity/admin/create', [ActivityController::class, 'store'])->name('activity.store');
    Route::post('/activity/admin/update', [ActivityController::class, 'update'])->name('activity.update');
    Route::delete('/activity/admin/delete/{id}', [ActivityController::class, 'delete'])->name('activity.delete');
    Route::get('/activity/admin/getData', [ActivityController::class, 'getDataByID']);
});


Route::get('/user/getUser', [ManageUserController::class, 'getData']);
Route::middleware('auth')->group(function(){

});

Route::middleware('isAdmin')->group(function(){
    Route::get('user/admin', [ManageUserController::class, 'index'])->name('user');
    Route::get('/user/admin/create', [ManageUserController::class, 'create'])->name('user.create');
    Route::get('/user/admin/edit/{id}', [ManageUserController::class, 'edit'])->name('user.edit');
    Route::post('/user/admin/create', [ManageUserController::class, 'store'])->name('user.store');
    Route::post('/user/admin/edit', [ManageUserController::class, 'update'])->name('user.update');
    Route::delete('/user/admin/delete/{id}', [  ManageUserController::class, 'delete_user'])->name('user.delete');
});

require __DIR__.'/auth.php';
