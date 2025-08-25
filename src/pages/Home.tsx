import MainLayout from "@/layouts/MainLayout";
import Hero from "../components/Hero"

const Home = () =>{
    return(
        
        <>
        <MainLayout />
        <div className="flex h-screen justify-center items-center">
            <div className="border-3 p-2 bg-blue-300 border-black rounded-lg">
                <h1 className="font-bold text-xl">This is the Homepage</h1>
            </div>
        </div>
       </>
        
    );
}

export default Home;