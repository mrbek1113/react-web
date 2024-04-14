import comfortImg from  '../images/comfort.png'
const Comfort = () => {
  return (
    <div className="flex flex-col  mt-[40px] w-[80%] sm:flex-row mx-auto items-center gap-[30px]">
      <div className=''>
        <div className='text-2xl mb-[20px]'>Мы стремимся создать для вас комфортные условия проживания</div>
        <div className='sm:hidden md:inline-block'>
          Загородный пансионат предлагает комфортное пространство для пожилых
          людей и инвалидов для долговременного проживания.Мы помогаем людям с
          возрастными особенностями здоровья жить без стресса и боли, сохранять
          душевное равновесие и теплые отношения с близкими
        </div>
      </div>
      <img src={comfortImg} alt="" className='w-[400px] '/>
    </div>
  );
};
export default Comfort;
