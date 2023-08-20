<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     return view('pages.register');
    // }

    public function regist(Request $request) {
        $ValidatedData = $request->validate([
            'username' => 'required|alpha|lowercase|min:4|max:10',
            'role_id' => 'max:1',
            'email' => 'min:5',
            'password' => 'required|max:20'
        ]);

        $ValidatedData['password'] =  bcrypt($ValidatedData['password']);
        
        $user = User::create($ValidatedData);

        // return redirect('/login')->with('RegisterSuccess', 'RegisterSuccess');
        return response()->json([
            "status" => 201,
            "message" => "Register Success",
            "data" => $user
        ]);
    }


}
