import linkedin from '../../assets/img/linkedin.png'
import whatsapp from '../../assets/img/whatsapp.png'
import '../../assets/styles/Footer/Footer.sass'

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <p>Desenvolvido por Ítalo Góes</p>
            
            <div>
                <a href="https://www.linkedin.com/in/italo-goes">
                    <img src={linkedin} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/italo-goes">
                    <img src={whatsapp} alt="" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer