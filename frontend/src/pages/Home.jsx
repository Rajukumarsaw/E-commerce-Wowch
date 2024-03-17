
import BrandList from "../components/BrandList"
import NewArrivals from "../components/NewArrivals"
import Banner from '../components/Banner'
//import { useSelector } from "react-redux"
const Home = () => {
  // const user=useSelector((state)=>{state.user.userInfo})
  // console.log("user", user);
  return (
    <>
       <Banner/>
       <BrandList/>
      <NewArrivals/>
      
       
    </>
  )
}

export default Home
