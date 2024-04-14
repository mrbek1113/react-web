import Img1 from '../images/cencor1.png'
import Img2 from '../images/cencor2.png'
import Img3 from '../images/cencor3.png'
const CorouselCenter=()=>{
    return (
        <div>
            <div className="flex justify-between w-[80%] m-auto">
                <h2 className="text-md md:text-[30px]">Вы получите незабываемые впечатления в нашей резиденции</h2>
                <button className='bg-green-600  px-[2px] text-sm rounded-xl'>Заказать звонок</button>
            </div>
            <div className='mt-[30px] flex items-center gap-4 w-[80%] m-auto'>
                <img src={Img2} alt="" className='hidden md:inline-block md:w-[28%] h-[400px]' />
                <img src={Img1} alt="" className=' m-auto md:w-[40%] h-[400px]' />
                <img src={Img3} alt="" className='hidden md:inline-block md:w-[28%] h-[400px]' />
            </div>
        </div>
    )
}
export default CorouselCenter