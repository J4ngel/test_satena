import Image from "next/image";
import Review from "./ui/Review";
import ServiceCard from "./ui/ServiceCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8  sm:p-20 font-[family-name:var(--font-geist-sans)]">
 
      <main className="flex flex-col gap-[40px] row-start-2 items-center sm:items-start">
        <section className="flex flex-col md:flex-row justify-between">
          <div className="space-y-8">
            <h1 className="text-5xl">Test Satena airline</h1>
            <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi itaque accusantium molestiae alias eius officia libero provident possimus fugiat consequuntur iusto nam facere eligendi ipsum nemo atque optio, ducimus eveniet.</i>
          </div>

          <Image
            src={'/next.svg'}
            className="mt-4 md:mt-0 mx-auto md:ml-4"
            alt="Company logo"
            width={250}
            height={150}
          />
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-center text-4xl">Servicios</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus ex eveniet fugiat. Qui magnam iure distinctio rerum. Eligendi vitae quisquam quod eveniet commodi assumenda, obcaecati provident voluptas. Exercitationem, consectetur!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ServiceCard 
              title={"Vuelos nacionales"} 
              description={"Vuelos nacionales"} 
              url={"/Vuelos nacionales"}/>

            <ServiceCard 
              title={"Vuelos internacionales"} 
              description={"Vuelos internacionales"} 
              url={"/Vuelos internacionales"}/>

            <ServiceCard 
              title={"Mantenimiento de aeronaves"} 
              description={"Mantenimiento de aeronaves"} 
              url={"/Mantenimiento de aeronaves"}/>

            <ServiceCard
              title={"Envíos"} 
              description={"Envíos a todo el país con seguimiento satelital"} 
              url={"/envios"}/>
          </div>
            
          
        </section>
        
        <section className="flex flex-col gap-8">
          <h2 className="text-center text-4xl">Reseñas</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus ex eveniet fugiat. Qui magnam iure distinctio rerum. Eligendi vitae quisquam quod eveniet commodi assumenda, obcaecati provident voluptas. Exercitationem, consectetur!
          </p>

          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8">
            <Review 
            name={"Test"} 
            qualification={5} 
            destiny={"Destiny test"} 
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore qui autem neque corporis exercitationem ratione ad id placeat quisquam voluptatem dicta nisi, perspiciatis, delectus officiis esse. Delectus, debitis repellendus!"}/>

            <Image 
              className="mx-auto"
              src={"/unknown_landscape.svg"} 
              alt={"Landscape image"}
              width={200}
              height={200}/>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Image
              className="mx-auto"
              src={"/unknown_landscape.svg"} 
              alt={"Landscape image"}
              width={200}
              height={200}
              />

            <Review 
            name={"Test 2"} 
            qualification={4} 
            destiny={"Destiny test 2"} 
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore qui autem neque corporis exercitationem ratione ad id placeat quisquam voluptatem dicta nisi, perspiciatis, delectus officiis esse. Delectus, debitis repellendus!"}/>
          </div>
        </section>
      </main>
    </div>
  );
}
