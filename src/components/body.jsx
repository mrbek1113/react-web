import Bg from "../images/bg.png";
import Comfort from "./comfort";
import CorouselCenter from "./corouselCenter";
import Room from "./room";
import CenterImg from '../images/center.png'
import Support from "./support";

const Body = () => {
  return (
    <div>
      <div className="flex bg-[url(./images/bg.png)] h-[400px] bg-center bg-cover w-[85%] mx-auto flex-col justify-evenly text-white mt-[30px]">
        <div className=" pl-40px">
          <h2 className="text-xl sm:text-2xl">Подмосковная резиденция</h2>
          <h1 className="text-2xl font-semibold sm:text-3xl">"ЛЕСНАЯ УСАДЬБА"</h1>
        </div>
        <div className=" pl-[40px] hidden lg:flex">
          <nav className="w-[230px]">Для тех, кто любитсвоих родных и близких</nav>
          <nav className="w-[230px]">Безопасная среда и интересный досуг</nav>
          <nav className="w-[260px]">Долгосрочные и краткосрочные программы пребывания
          </nav>
        </div>
      </div>
      <Comfort/>
      <Room/>
      <CorouselCenter/>
      <div><img src={CenterImg} alt="" className="mt-5 w-[80%] m-auto"/></div>
      <Support/>
    </div>
  )
}
export default Body;
