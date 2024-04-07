import Header from "../../Components/Shared/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../Components/Shared/Navbar";
import LeftNav from "./LeftNav";
import NewsCard from "./NewsCard";
import RightNav from "./RightNav";


const Home = () => {
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
           <div className="grid md:grid-cols-4 grid-cols-1 gap-y-2 gap-6">
             <LeftNav />
             <NewsCard />
             <RightNav/>



           </div>



        </div>
    );
};

export default Home;