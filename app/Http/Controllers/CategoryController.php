<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();

        return response()->json([
            "status" => 201,
            "message" => "All Categorys",
            "data" => $categories
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return view('dashboard.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return @dd($request);
        $ValidatedData = $request->validate([
            'name' => 'required',
        ]);


        $role = Category::create($ValidatedData);

        return response()->json([
            "success" => true,
            "message" => "Product created successfully.",
            "data" => $role
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $role)
    {

        return response()->json([
            "success" => true,
            "message" => "Details Category",
            "data" => $role
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $role)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $role)
    {
        // $ValidatedData = $request->validate([
        //     'user_id' => 'required',
        //     'title' => 'required|min:5|max:100',
        //     'image' => 'required',
        //     'description' => 'required|min:5'
        // ]);

        // if ($request->file('image')) {
        //     $ValidatedData['image'] = $request->file('image')->store('');
        // }


        // $string_image = $request->file('image')->getClientOriginalName();
        // $file_image = str_replace(' ', '', $string_image);
        
        // $request->file('image')->move('images', $file_image);

        // $ValidatedData['image'] = $file_image;


        // $role->update($ValidatedData);


        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);        
        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

            $role->update([
                'name'   => $request->name,
            ]);
   


        return response()->json([
            "success" => true,
            "message" => "Product has been updated",
            "data" => $role
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $role)
    {

        Category::destroy($role->id);
        return response()->json([
            "success" => true,
            "message" => "Category Deleted",
            "data" => $role
        ]);
    }
}
