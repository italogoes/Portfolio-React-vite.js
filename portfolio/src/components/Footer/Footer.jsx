import linkedin from '../../assets/img/linkedin.png'
import whatsapp from '../../assets/img/whatsapp.png'
import '../../assets/styles/Footer/Footer.sass'

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <p>Desenvolvido por Ítalo Góes</p>
            
            <div>
                <a href="https://www.linkedin.com/in/italo-goes" target='_blank'>
                    <img src={linkedin} alt="" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5519837410047&text=Ol%C3%A1,%20%C3%8Dtalo!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio" target='_blank'>
                    <img src={whatsapp} alt="" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer