import Img from '../images/doctor.png'
const Support= () =>{
    return (
        <div className='w-[80%] m-auto mt-7 '>
            <div className='sm:text-2xl mb-8'>Наши специалисты всегда готовы помочьи поддержать пожилых людей в любой ситуации</div>
            <div className=' w-[100%] justify-between  gap-3 md:flex'>
                <div className='flex flex-col items-center '>
                    <img src={Img} alt="" className='w-[230px]' />
                    <h1>Ирина Доброва</h1>
                    <p>Врач-невролог</p>
                    <p>Стаж более 25 лет</p>
                    <p>Смотреть подробнее</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={Img} alt="" className='w-[230px]' />
                    <h1>Ирина Доброва</h1>
                    <p>Врач-невролог</p>
                    <p>Стаж более 25 лет</p>
                    <p>Смотреть подробнее</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={Img} alt="" className='w-[230px]' />
                    <h1>Ирина Доброва</h1>
                    <p>Врач-невролог</p>
                    <p>Стаж более 25 лет</p>
                    <p>Смотреть подробнее</p>
                </div>
            </div>
        </div>
    )
}
export default Support