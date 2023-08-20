<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Comment;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comments = Comment::all();

        return response()->json([
            "status" => 201,
            "message" => "All Comments",
            "data" => $comments
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
            'place_id' => 'required',
            'comment' => 'required',
        ]);


        $comment = Comment::create($ValidatedData);

        return response()->json([
            "success" => true,
            "message" => "Product created successfully.",
            "data" => $comment
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {

        return response()->json([
            "success" => true,
            "message" => "Details Comment",
            "data" => $comment
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
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


        // $comment->update($ValidatedData);


        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'place_id' => 'required',
            'comment' => 'required'
        ]);        
        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

            $comment->update([
                'user_id'   => $request->user_id, 
                'place_id'   => $request->place_id, 
                'comment'   => $request->comment,
            ]);
   


        return response()->json([
            "success" => true,
            "message" => "Product has been updated",
            "data" => $comment
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {

        Comment::destroy($comment->id);
        return response()->json([
            "success" => true,
            "message" => "Comment Deleted",
            "data" => $comment
        ]);
    }
}
