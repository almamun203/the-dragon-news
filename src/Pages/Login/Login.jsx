import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";


const Login = () => {
  const handleLogin =e=>{
      e.preventDefault()
      const  form = new FormData(e.currentTarget)
      const email = form.get('email')
      const password = form.get('password')
      console.log(email,password);
  }
    return (
        <div className='bg-slate-200 pb-10 px-2'>
            <Navbar/>
            <h2 className="text-3xl text-center">Please Login</h2>
            <form onSubmit={handleLogin} className=" w-3/4 md:w-[500px] mx-auto">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="Email" className="input bg-white rounded-none " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="Password" className="input bg-white rounded-none" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">Not registered?</Link>
          </label>
        </div>
        <div className="form-control mt-4">
          <button type='submit' className="btn btn-sm bg-cyan-400 text-gray-light hover:bg-cyan-500 rounded-none">Login</button>
        </div>
      </form>
        </div>
    );
};

export default Login;