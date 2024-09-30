<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\BackgroundController;
use App\Http\Controllers\FeatureResearchController;
use App\Http\Controllers\GuestPageController;
use App\Http\Controllers\LandingTextController;
use App\Http\Controllers\ManageUserController;
use App\Http\Controllers\OurResearchController;
use App\Http\Controllers\PartnershipController;
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

Route::get('/', [GuestPageController::class, 'LandingIndex'])->name('landing');
Route::get('/activity', function () {
    return Inertia::render('Activity/Index');
})->name('activity.index');
Route::get('/publication', function () {
    return Inertia::render('Error/Maintenance');
})->name('publication.index');
Route::get('/researcher', function () {
    return Inertia::render('Error/Maintenance');
})->name('research.index');
Route::get('/contact', [GuestPageController::class, 'ContactIndex'])->name('contact.index');
Route::get('/partnership', [GuestPageController::class, 'PartnerIndex'])->name('partnership.index');
Route::get('/ourresearchs', [GuestPageController::class, 'OurResearchIndex'])->name('test.index');

Route::get('/filterActivity', [ActivityController::class, 'getData']);
Route::get('/getData', [ActivityController::class, 'getDataByDate']);
Route::get('/getDataFuture', [ActivityController::class, 'getDateFuture']);
Route::get('/getOurResearch', [OurResearchController::class, 'getData']);
Route::get('/getImage', [ActivityController::class, 'getImage']);
Route::get('/activity/detail/{id}', [ActivityController::class, 'detailPage'])->name('activity.detail');
Route::get('feature/getFResearch/shownable', [FeatureResearchController::class, 'getShownableCarousel'])->name('feature.getData.shownable');
Route::get('partnership/getPartnership/shownable', [PartnershipController::class, 'getShownableCarousel'])->name('partnership.getData.shownable');

Route::get('/dashboard', [BackgroundController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/activity/admin', [ActivityController::class, 'index'])->name('activity');
    Route::get('/activity/admin/create', [ActivityController::class, 'create'])->name('activity.create');
    Route::get('/activity/admin/edit/{id}', [ActivityController::class, 'edit'])->name('activity.edit');
    Route::post('/activity/admin/create', [ActivityController::class, 'store'])->name('activity.store');
    Route::post('/activity/admin/update', [ActivityController::class, 'update'])->name('activity.update');
    Route::delete('/activity/admin/delete/{id}', [ActivityController::class, 'delete'])->name('activity.delete');
    Route::get('/activity/admin/getData', [ActivityController::class, 'getDataByID']);


    Route::get('partnership/admin', [PartnershipController::class, 'index'])->name('partnership');
    Route::get('partnership/getPartnership', [PartnershipController::class, 'getData'])->name('partnership.getData');
    Route::get('partnership/admin/create', [PartnershipController::class, 'create'])->name('partnership.create');
    Route::get('partnership/admin/edit/{id}', [PartnershipController::class, 'edit'])->name('partnership.edit');
    Route::post('partnership/admin/edit', [PartnershipController::class, 'update'])->name('partnership.update');
    Route::post('partnership/admin/updateshownable', [PartnershipController::class, 'updateShownable'])->name('partnership.updateshownable');
    Route::post('partnership/admin/create', [PartnershipController::class, 'store'])->name('partnership.store');
    Route::delete('partnership/admin/delete/{id}', [PartnershipController::class, 'destroy'])->name('partnership.delete');


    Route::get('feature/admin', [FeatureResearchController::class, 'index'])->name('feature');
    Route::get('feature/getFResearch', [FeatureResearchController::class, 'getData'])->name('feature.getData');
    Route::get('feature/admin/create', [FeatureResearchController::class, 'create'])->name('feature.create');
    Route::get('feature/admin/edit/{id}', [FeatureResearchController::class, 'edit'])->name('feature.edit');
    Route::delete('feature/admin/delete/{id}', [FeatureResearchController::class, 'destroy'])->name('feature.delete');
    Route::post('feature/admin/edit', [FeatureResearchController::class, 'update'])->name('feature.update');
    Route::post('feature/admin/updateshownable', [FeatureResearchController::class, 'updateShownable'])->name('feature.updateshownable');
    Route::post('feature/admin/feature/create', [FeatureResearchController::class, 'store'])->name('feature.store');

    Route::get('ourresearch/admin', [OurResearchController::class, 'index'])->name('ourresearch');
    Route::get('ourresearch/getOResearch', [OurResearchController::class, 'getData'])->name('ourresearch.getData');
    Route::get('ourresearch/admin/create', [OurResearchController::class, 'create'])->name('ourresearch.create');
    Route::get('ourresearch/admin/edit/{id}', [OurResearchController::class, 'edit'])->name('ourresearch.edit');
    Route::post('ourresearch/admin/edit', [OurResearchController::class, 'update'])->name('ourresearch.update');
    Route::post('ourresearch/admin/create', [OurResearchController::class, 'store'])->name('ourresearch.store');
    Route::delete('ourresearch/admin/delete/{id}', [OurResearchController::class, 'destroy'])->name('ourresearch.delete');
});


Route::middleware('auth')->group(function () {});

Route::middleware('isAdmin')->group(function () {
    Route::get('/user/getUser', [ManageUserController::class, 'getData']);
    Route::get('user/admin', [ManageUserController::class, 'index'])->name('user');
    Route::get('/user/admin/create', [ManageUserController::class, 'create'])->name('user.create');
    Route::get('/user/admin/edit/{id}', [ManageUserController::class, 'edit'])->name('user.edit');
    Route::post('/user/admin/create', [ManageUserController::class, 'store'])->name('user.store');
    Route::post('/user/admin/edit', [ManageUserController::class, 'update'])->name('user.update');
    Route::delete('/user/admin/delete/{id}', [ManageUserController::class, 'delete_user'])->name('user.delete');

    Route::post('/user/admin/edit/background', [BackgroundController::class, 'store'])->name('background.store');

    Route::get('landing/admin', [LandingTextController::class, 'index'])->name('landing.admin');
    Route::get('landing/admin/edit/{id}', [LandingTextController::class, 'edit'])->name('landing.admin.edit');
    Route::post('landing/admin/edit', [LandingTextController::class, 'update'])->name('landing.admin.update');
});
Route::get('landing/getLanding', [LandingTextController::class, 'getData'])->name('landing.getData');

require __DIR__ . '/auth.php';
