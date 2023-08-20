<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all();

        return response()->json([
            "status" => 201,
            "message" => "All Orders",
            "data" => $orders
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
            'quantity' => 'required',
            'total_price' => 'required',
        ]);


        $order = Order::create($ValidatedData);

        return response()->json([
            "success" => true,
            "message" => "Product created successfully.",
            "data" => $order
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {

        return response()->json([
            "success" => true,
            "message" => "Details Order",
            "data" => $order
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
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


        // $order->update($ValidatedData);


        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'place_id' => 'required',
            'quantity' => 'required',
            'total_price' => 'required'
        ]);        
        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

            $order->update([
                'user_id'   => $request->user_id, 
                'place_id'   => $request->place_id, 
                'quantity'     => $request->quantity,
                'total_price'   => $request->total_price,
            ]);
   


        return response()->json([
            "success" => true,
            "message" => "Product has been updated",
            "data" => $order
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {

        Order::destroy($order->id);
        return response()->json([
            "success" => true,
            "message" => "Order Deleted",
            "data" => $order
        ]);
    }
}
