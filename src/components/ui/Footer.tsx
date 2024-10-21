import styles from "@/styles";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`bg-black text-white w-full font-rubik`}>
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth} ${styles.paddingY} mx-auto md:flex`}>
          <div className="md:w-[35%] text-center md:text-left">
            <h2 className="text-white uppercase text-2xl font-anurati">
              Pro<span className="text-secondary">route</span>
            </h2>
            <span>&#169; 2024, Todos los derechos reservados.</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:w-[65%] mt-[4rem] md:mt-0">
            <div className="mb-[3rem] md:mb-0">
              <h3 className="text-[1.2rem] font-bold font-poppins">Pagina</h3>

              <ul className="flex flex-col gap-[.3rem] mt-[.6rem] text-dimWhite">
                <li>Home</li>
                <li>Blog</li>
                <li>Comunidad</li>
                <li>Guias</li>
                <li>Retos</li>
                <li>Pruebas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[1.2rem] font-bold font-poppins">Soporte</h3>
              <ul className="flex flex-col gap-[.3rem] mt-[.6rem] text-dimWhite">
                <li>Contacto</li>
                <li>PyR</li>
                <li>Email</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[1.2rem] font-bold font-poppins">Siguenos</h3>
              <ul className="flex flex-col gap-[.3rem] mt-[.6rem] text-dimWhite">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[1.2rem] font-bold font-poppins">Legal</h3>
              <ul className="flex flex-col gap-[.3rem] mt-[.6rem] text-dimWhite">
                <li>Politica de privacidad</li>
                <li>Terminos y condiciones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`p-[1rem] w-full`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3>Creado por <span className="text-secondary">ProRoute INC.</span></h3>

            <div className="flex gap-[1rem]">
              <FaInstagram size={'20px'}/>
              <FaFacebook size={'20px'}/>
              <FaTwitter size={'20px'} />
              <FaYoutube size={'20px'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
