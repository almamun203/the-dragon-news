import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightNav = () => {
    return (
        <div className="text-center">
             <h2 className="text-2xl font-semibold">Login With</h2>
             <p className="hover:text-indigo-500 hover:border-indigo-500 py-2 text-center border-solid rounded-lg"><FaGoogle /> Google</p>
             <p className="hover:text-indigo-500 hover:border-indigo-500 py-2 text-center border-solid rounded-lg"><FaGithub/> Github</p>

             <h2 className="text-2xl font-semibold">Find Us On</h2>
             <p className="hover:text-indigo-500 hover:border-indigo-500 py-2 text-center border-solid rounded-lg"><FaFacebook /> Facebook</p>
             <p className="hover:text-indigo-500 hover:border-indigo-500 py-2 text-center border-solid rounded-lg"><FaInstagram/> Instagram</p>
             <p className="hover:text-indigo-500 hover:border-indigo-500 py-2 text-center border-solid rounded-lg"><FaTwitter/> Twitter</p>
             
        </div>
    );
};

export default RightNav;