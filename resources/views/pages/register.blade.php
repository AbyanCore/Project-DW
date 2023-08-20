@extends('layout.index')

@section('container')
  <div class="main text-center">
      <div class="container">

          <main class="form-signin w-50 m-auto mt-5">
              <form action="/register" method="post">
                  @csrf
                  <h1 class="h3 mb-3 fw-normal">Please Register</h1>
                  
                  <div class="form-floating">
                    <input type="text" class="form-control @error('username') is-invalid @enderror" id="username" placeholder="name@example.com" name="username" value="{{ old('username') }}">
                    <label for="username">Username</label>
                    @error('username')
                      <div class="invalid-feedback">
                        {{ $message }}
                      </div>
                    @enderror
                </div>

                  <div class="form-floating">
                      <input type="text" class="form-control @error('email') is-invalid @enderror" id="email" placeholder="name@example.com" name="email" value="{{ old('email') }}">
                      <label for="email">Email</label>
                      @error('email')
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


                  <p class="mt-5 mb-3 text-muted">Already Have Account?? <a href="/login">Login Now!!</a></p>
                  <br>
                  <p class="mt-5 mb-3 text-muted"><a href="/home">Back to Home</a></p>
              </form>
          </main>
          
      </div>
  </div>
@endsection
