@extends('layout.index')


@section('container')
<div class="main text-center">
  @if (session()->has('RegisterSuccess'))
    <div class="alert alert-success">
      Register Success  
    </div>    
  @endif
  @if (session()->has('LoginError'))
    <div class="alert alert-danger">
      Login Gagal  
    </div>    
  @endif
    <div class="container">

        <main class="form-signin w-50 m-auto mt-5">
          <form action="/login" method="post">
                @csrf
                <h1 class="h3 mb-3 fw-normal">Please Login</h1>
                 
                <div class="form-floating">
                    <input type="text" class="form-control @error('username') is-invalid @enderror" id="username" placeholder="Your Username" name="username" value="{{ old('username') }}">
                    <label for="username">Username</label>
                    @error('username')
                      <div class="invalid-feedback">
                        {{ $message }}
                      </div>
                    @enderror
                </div>

                <div class="form-floating">
                    <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" placeholder="Password" name="password">
                    <label for="password">Password</label>
                    @error('password')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                @enderror
                </div>
                
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>


                <p class="mt-5 mb-3 text-muted">Not Have Account?? <a href="/register">Register Now!!</a></p>
                <br>
                <p class="mt-5 mb-3 text-muted"><a href="/home">Back to Home</a></p>
            </form>
        </main>
        
    </div>
</div>    
@endsection
