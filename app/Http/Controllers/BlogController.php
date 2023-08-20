<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::all();

        return response()->json([
            "status" => 201,
            "message" => "All Blogs",
            "data" => $blogs
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
            'user_id' => 'required',
            'title' => 'required',
            'image' => 'required',
            'description' => 'required'
        ]);

        $string_image = $request->file('image')->getClientOriginalName();
        $file_image = str_replace(' ', '', $string_image);

        $request->file('image')->move('images', $file_image);

        $ValidatedData['image'] = $file_image;

        $blog = Blog::create($ValidatedData);

        return response()->json([
            "success" => true,
            "message" => "Product created successfully.",
            "data" => $blog
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {


        return response()->json([
            "success" => true,
            "message" => "Details Blog",
            "data" => $blog
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
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


        // $blog->update($ValidatedData);


        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'title' => 'required|min:5|max:100',
            'description' => 'required|min:5'
        ]);        
        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if ($request->hasFile('image')) {
            // $image = $request->file('image');
            // $image->storeAs('public/images', $image->hashName());

            $string_image = $request->file('image')->getClientOriginalName();
            $file_image = str_replace(' ', '', $string_image);
    
            $request->file('image')->move('images', $file_image);
            $image = $file_image;

            Storage::delete('public/images/'.$blog->image);

            $blog->update([
                'user_id'   => $request->user_id, 
                'image'     => $image,
                'title'     => $request->title,
                'description'   => $request->description,
            ]);
        } else {
            $blog->update([
                'user_id'   => $request->user_id, 
                'title'     => $request->title,
                'description'   => $request->description,
            ]);
        }


        return response()->json([
            "success" => true,
            "message" => "Product has been updated",
            "data" => $blog
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        $image_path = ('public/images/'.$blog->image);
        if (File::exists($image_path)) {
            File::delete($image_path);
        }
        Blog::destroy($blog->id);
        return response()->json([
            "success" => true,
            "message" => "Blog Deeleted",
            "data" => $blog
        ]);
    }
}
