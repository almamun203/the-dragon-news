import { useEffect, useState } from "react";


const LeftNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="lg:text-left text-center">
            <h2 className="text-2xl font-semibold">All Category</h2>
            {
                categories.map((category)=>{
                    
                    return(
                        <div key={category.id}>
                        <p className=" bg-slate-200 hover:bg-slate-300 p-4">{category.name}</p>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default LeftNav;