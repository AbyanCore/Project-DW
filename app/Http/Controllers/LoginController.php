<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
// use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     return view('pages.login');
    // }

    public function auth(Request $request) {
        $ValidatedData = $request->validate([
            'username' => 'required|alpha|lowercase|min:4|max:10',
            'password' => 'required|max:20'
        ]);

        if ($token = auth()->guard('api')->attempt($ValidatedData)) {
            $request->session()->regenerate();
            // return redirect('/places');
            return response()->json([
                'success' => true,
                'user'    => auth()->guard('api')->user(),
                'token'   => $token
            ], 200);
        }

        // return back()->with('LoginError', 'LoginError');
        return response()->json([
            "status" => 401,
            "message" => "Login Failed",
            "data" => []
        ]);
    }


    public function logout(Request $request) {
        $removeToken = JWTAuth::invalidate(JWTAuth::getToken());

        if($removeToken) {
            //return response JSON
            return response()->json([
                'success' => true,
                'message' => 'Logout Berhasil!',  
            ]);
        }
    }


}







