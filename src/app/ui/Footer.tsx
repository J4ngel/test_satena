

export default function Footer (){
  return(
    <footer className="grid grid-cols-3 p-4 md:p-8 bg-gray-800 text-white">
      <section id="contact" className="space-y-4">
        <h3 className="font-bold">Contacto</h3>

        <div>
          <h4>Ubicación</h4>
          <p>304000000000</p>
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
          <p>test@user.com</p>
        </div>
        
        <div>
          <h4>Repositorio del proyecto</h4>
          <p>test@user.com</p>
        </div>

        <div>
          <h4>Perfil de Github</h4>
          <p>test@user.com</p>
        </div>
      </section>

    <section className="space-y-4">
      <h3 className="font-bold">Links de interés</h3>

      <p>Glosario</p>
      
      <p>políticas de privacidad</p>
    </section>
    <p className="mt-4 col-span-3 text-center text-sm text-gray-500">© {2025} made with ❤️ by Jaime Angel</p>
  </footer> 
  )
}