import BrandCard from "./BrandCard"
import rolexLogo from "../assets/rolex-logo.png"
import boatLogo from '../assets/BoatLogo.png'
import FastrackLogo from '../assets/Fastrack.png'
import FossilLogo from '../assets/FossilLogo.png'
import TimexLogo from '../assets/TimexLogo.png'
import TitanLogo from '../assets/TitanLogo.png'

const BrandList = () => {
  return (
    <>
      <div className="text-center m-5 font-baleny font-bold  text-3xl text-emerald-900 mt-20 mb-10 underline">Shop by Brand</div>
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center ">
      <BrandCard brandLogo={rolexLogo} brand="Rolex" />
      <BrandCard brandLogo={boatLogo} brand="Boat"/>
      <BrandCard brandLogo={FastrackLogo} brand="Fastrack" />
      <BrandCard brandLogo={FossilLogo} brand="Fossil"/>
      <BrandCard brandLogo={TitanLogo} brand="Titan"/>
      <BrandCard brandLogo={TimexLogo} brand="Timex" />
      </div>

      
      
    </>
  )
}

export default BrandList
