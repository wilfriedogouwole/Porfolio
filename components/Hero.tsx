import { Button } from "@nextui-org/button";

const Hero = () => {

  const pink_gradiant = 'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]'
  const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]'
  const blue_gradiant = 'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]'
  const bg_discount_gradient = 
  'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'/* 'bg-gradient-to-tr from-gray-700 to-indigo-900'*/
  const text_gradient = ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text'

  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-0 py-6 w-full sm:items-center">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className={`flex flex-row items-center py-[6px] px-4 ${bg_discount_gradient} rounded-[10px] mb-2`}>
          <img src={'https://i.imgur.com/5BZrGDw.png'} alt="discount" className="w-[32px] h-[32px]" />
          <p className="font-exo font-regular text-dimWhite text-[10px] leading-[30.8px] ml-2">
            <span className="text-white">DERRICK OGOUWOLE</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-exo font-extrabold ss:text-[32px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
            CHEF DE PROJET  <br className="sm:block hidden" />{" "}
            <span className={`${text_gradient}`}>DIGITAL</span>{" "}
          </h1>
          
        </div>
        <p className="font-exo font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 text-justify">Bienvenue sur mon portfolio en ligne ! Je suis un chef de projet digital passionné, avec des compétences solides en webdesign, développement web et gestion de projets digitaux. J'ai travaillé sur divers projets et collaboré avec des équipes pour créer des solutions digitales innovantes.
        </p>
        <Button color="secondary" className="mt-6"> ME CONTACTER </Button>
      </div>

      <div className={`flex-1 flex ${"flex justify-center items-center"} md:my-0 my-10 relative`}>
        <img src={'https://derrickogouwole.fr/wp-content/uploads/2024/01/Derrick1-scaled.webp'} alt="billing" className="w-[100%] h-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className={`absolute z-[0] w-[40%] h-[35%] top-0 ${pink_gradiant} `} />
        <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${white_gradiant} bottom-40`} />
        <div className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${blue_gradiant}`} />
        {/* gradient end */}
      </div>

    
    </section>
  );
};

export default Hero;