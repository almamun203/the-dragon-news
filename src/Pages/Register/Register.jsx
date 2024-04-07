import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";



const Register = () => {
    return (
        <div className='bg-slate-200 pb-10 px-2'>
            <Navbar/>
            <h2 className="text-3xl text-center">Please Register</h2>
            <form className=" w-3/4 md:w-[500px] mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          
          <input name='name' type="text" placeholder="Name" className="input bg-white rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Picture</span>
          </label>
          
          <input name='photo' type="text" placeholder="Photo URL" className="input bg-white rounded-none" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          
          <input name='email' type="email" placeholder="Email" className="input bg-white rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input bg-white rounded-none" required />
          <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          
          <input name='confirmPassword' type="password" placeholder="Confirm Password" className="input bg-white rounded-none" required />
        </div>
         
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already registered?</Link>
          </label>
        </div>
        <div className="form-control mt-4">
          <button className="btn btn-sm bg-cyan-400 text-gray-light hover:bg-cyan-500 rounded-none">Register</button>
        </div>
      </form>
        </div>
    );
};

export default Register;