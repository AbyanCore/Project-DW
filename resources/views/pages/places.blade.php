@extends('layout.index')

@section('container')

<div class="container mt-2">
    <h1 class="text-center mb-5">All Products Here</h1>

    <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">

<div class="col">
    <div class="card h-100">
      <img style="height: 15rem" src="https://www.tempatwisata.pro/users_media/3136/26287225_384636805327292_8061911901040279552_n.jpg" class="card-img-top " alt="..." >
      <div class="card-body">
        <h5 class="card-title"><a href="" class="text-decoration-none">TITLE</a></h5>
        <h6 class="card-text text-success">RP.</h6>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary" style="text-transform: uppercase">
          <ion-icon name="location-sharp"  class="text-primary"></ion-icon>
          KOTA 
        </small>
        <small class="text-body-secondary" style="text-transform: capitalize"><br>
          <ion-icon name="person-sharp" class="text-primary"></ion-icon>
          HH</small>
      </div>
    </div>
  </div>

  
</div>

</div>    
@endsection