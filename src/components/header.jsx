import Logo from '../icons/Logo.png'
const Header = () =>{
    return (
        <div className='flex items-center justify-between px-[50px] py-[10px] w-full'>
            <img src={Logo} alt="" className='w-[140px]' />
            <div className=' items-center gap-9 hidden lg:flex'>
                <a href="#">О нас</a>
                <a href="#">Услуги</a>
                <a href="#">Специалисты</a>
                <a href="#">Контакты</a>
            </div>
            <span className='hidden sm:inline-block'>+7 495 797 77 35</span>
            <button className='bg-green-600 py-[2px] px-[2px] text-sm rounded-xl'>Заказать звонок</button>
        </div>
    )
}
export default Header