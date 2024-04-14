import room1Img from "../images/room1.png";
import room2Img from "../images/room2.png";
import room3Img from "../images/room3.png";
import room4Img from "../images/room4.png";
import RoomCards from "./roomCards";
const Room = () => {
  return (
    <div className="flex flex-col w-[80%] m-auto">
      <div>
        Мы предлагаем уютные комнаты с удобной мебелью и всем необходимым для
        комфортного проживания
      </div>
      <div className="md:flex m-auto">
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <img src={room1Img} alt="" className="w-[160px]" />
              <img src={room2Img} alt="" className="w-[160px]" />
            </div>
            <div className="flex gap-3">
              <img src={room3Img} alt="" className="w-[160px]" />
              <img src={room4Img} alt="" className="w-[160px]" />
            </div>
          </div>
        </div>
        <div>
          <RoomCards/>
        </div>
      </div>
    </div>
  );
};
export default Room;
