<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();

        return response()->json([
            "status" => 201,
            "message" => "All Blogs",
            "data" => $users
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json([
            "success" => true,
            "message" => "Details Blog",
            "data" => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'role_id' => 'required'
        ]);        
        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user->update([
            'role_id'   => $request->role_id
        ]);

        
        return response()->json([
            "success" => true,
            "message" => "Product has been updated",
            "data" => $user
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
