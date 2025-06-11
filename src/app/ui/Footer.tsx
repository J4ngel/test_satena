import Link from "next/link";


export default function Footer (){
  return(
    <footer className="grid grid-cols-3 p-4 md:p-8 bg-gray-800 text-white">
      <section id="contact" className="space-y-4">
        <h3 className="font-bold">Contacto</h3>

        <div>
          <h4>Ubicación</h4>
          <p>Madrid, Cundinamarca, centro</p>
        </div>

        <div>
          <h4>WhatsApp</h4>
          <p>304000000000</p>
        </div>

        <div>
          <h4>Correo</h4>
          <p>test@user.com</p>
        </div>
        
      </section>

      <section className="space-y-4">
        <h3 className="font-bold">Información comercial</h3>

        <div>
          <h4>LinkedIn</h4>
          <Link href={"https://www.linkedin.com/in/jaime-andres-angel-melgarejo-62a53420a/"}>Jaime Andrés Ángel</Link>
        </div>
        
        <div>
          <h4>Repositorio del proyecto</h4>
          <Link href={"https://github.com/J4ngel/test_satena"}>test_satena</Link>
        </div>

        <div>
          <h4>Perfil de Github</h4>
          <Link href={"https://github.com/J4ngel"}>J4ngel</Link>
        </div>
      </section>

    <section className="space-y-4">
      <h3 className="font-bold">Links de interés</h3>

      <Link href={"/Glosario"}>Glosario</Link>
      
      <Link href={"/politicas_de_privacidad"}>políticas de privacidad</Link>
    </section>
    <p className="mt-4 col-span-3 text-center text-sm text-gray-500">© {2025} made with ❤️ by Jaime Angel</p>
  </footer> 
  )
}