import { ConnectWallet } from "@thirdweb-dev/react";
import {Routes, Route} from "react-router-dom";
import { Home, Profile,CampaignDetails,CreateCampaign } from "./pages";
import {Sidebar,Navbar} from "./components";
// import "./styles/Home.css";

export default function App() {
  return (
    <div className="relative sm:-8 p-8 bg-[#13131a] min-h-screen flex flex-row">
    <div className="sm:flex hidden mr-10 relative">
      <Sidebar/>
      </div>  
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>        
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/create-campaign" element={<CreateCampaign/>}/>
        <Route path="/campaign-details/:id" element={<CampaignDetails/>}/>
        <Route/>
      </Routes>
      </div>
      
    </div>
  );
}
