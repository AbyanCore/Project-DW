<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Role;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::all();

        return response()->json([
            "status" => 201,
            "message" => "All Roles",
            "data" => $roles
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


        $role = Role::create($ValidatedData);

        return response()->json([
            "success" => true,
            "message" => "Product created successfully.",
            "data" => $role
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {

        return response()->json([
            "success" => true,
            "message" => "Details Role",
            "data" => $role
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
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
    public function destroy(Role $role)
    {

        Role::destroy($role->id);
        return response()->json([
            "success" => true,
            "message" => "Role Deleted",
            "data" => $role
        ]);
    }
}
