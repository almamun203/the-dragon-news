import Header from "../../Components/Shared/Header";
import Navbar from "../../Components/Shared/Navbar";
import Marquee from "react-fast-marquee";

const Career = () => {
    return (
        <div>
             <Header/>
           <div className="flex  bg-slate-200">
            <button className="btn btn-sm  bg-cyan-400 text-gray-light hover:bg-cyan-500 rounded-none">Breaking News</button>
           <Marquee>
            I can be a React component, multiple React components, or just some text.
            </Marquee>
           
           </div>
            <Navbar/>
            Career
        </div>
    );
};

export default Career;