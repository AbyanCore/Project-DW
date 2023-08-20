<?php

namespace App\Http\Controllers;

use App\Models\Place;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StorePlaceRequest;
use App\Http\Requests\UpdatePlaceRequest;

class PlaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $places = Place::all();
        // return view('pages.places', [
        //     'places' => $places
        // ]);
        // return response()->json($places);

        return response()->json([
            "status" => 201,
            "message" => "All Places",
            "data" => $places
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
            'category_id' => 'required',
            'user_id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'locate' => 'required',
            'Mainimage' => 'required|file|mimes:jpg,jpeg,png,gif|max:1024',
            'open_at' => 'required',
            'close_at' => 'required',
            'ticket_price' => 'required',
        ]);

        $string_image = $request->file('Mainimage')->getClientOriginalName();
        $file_image = str_replace(' ', '', $string_image);

        $request->file('Mainimage')->move('images', $file_image);

        $ValidatedData['Mainimage'] = $file_image;

        $place = Place::create($ValidatedData);

        return response()->json([
            "success" => true,
            "message" => "Product created successfully.",
            "data" => $place
        ]);
        // return back()->with('CreateSuccess', 'CreateSuccess');
    }

    /**
     * Display the specified resource.
     */
    public function show(Place $place)
    {
        // return view('pages.place', [
        //     "place" => $place
        // ]);

        return response()->json([
            "success" => true,
            "message" => "Details Place",
            "data" => $place
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Place $place)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Place $place)
    {
        $validator = Validator::make($request->all(), [
           'category_id' => 'required',
           'user_id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'locate' => 'required',
            'Mainimage' => 'required|file|mimes:jpg,jpeg,png,gif|max:1024',
            'open_at' => 'required',
            'close_at' => 'required',
            'ticket_price' => 'required',
        ]);        
        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if ($request->hasFile('Mainimage')) {
            // $image = $request->file('image');
            // $image->storeAs('public/images', $image->hashName());

            $string_image = $request->file('Mainimage')->getClientOriginalName();
            $file_image = str_replace(' ', '', $string_image);
    
            $request->file('Mainimage')->move('images', $file_image);
            $image = $file_image;

            Storage::delete('public/images/'.$place->image);

            $place->update([
                'category_id'   => $request->category_id, 
                'user_id'   => $request->user_id, 
                'name' => $request->name,
                'description' => $request->description,
                'locate' => $request->locate,
                'Mainimage'     => $image,
                'open_at' => $request->open_at,
                'close_at' => $request->close_at,
                'ticket_price' => $request->ticket_price

            ]);
        } else {
            $place->update([
                'category_id'   => $request->category_id, 
                'user_id'   => $request->user_id, 
                'name' => $request->name,
                'description' => $request->description,
                'locate' => $request->locate,
                'open_at' => $request->open_at,
                'close_at' => $request->close_at,
                'ticket_price' => $request->ticket_price
            ]);
        }


        return response()->json([
            "success" => true,
            "message" => "Product has been updated",
            "data" => $place
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Place $place)
    {
        Place::destroy($place->id);
        return response()->json([
            "success" => true,
            "message" => "Place Deeleted",
            "data" => $place
        ]);
        // return redirect('/dashboard')->with('DeleteSuccess', 'Delete Success');
    }
}