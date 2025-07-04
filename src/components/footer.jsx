import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='bg-[var(--blue_color)] flex flex-row gap-15 justify-around items-center px-30 pb-17 mt-[-5vh]'>
            <div className='flex flex-col gap-4 w-[15vw]'>
                <img src="https://hei.school/wp-content/uploads/2022/09/Logo-e1662790239183.png" alt="hei_logo" className='w-[8vw] mb-3' />
                <p className='text-white text-[2ch] text-sm/loose ml-5 mb-2'>
                    Formation habilitée par l’Etat suivant le système LMD
                </p>
                <p className='text-white text-[2ch] text-sm/loose ml-5'>
                    Habilitation MESupRes n°31309/2023
                </p>
            </div>
            <div className='flex flex-col gap-4 w-[15vw] mt-20'>
                <h3 className='text-white text-2xl mb-2'>Adresse</h3>
                <p className='text-white text-[2ch] text-xl/loose'>
                    II J 161 R Ambodivoanjo

                    Ivandry Antananarivo

                    101, Madagascar
                </p>
            </div>
            <div className='flex flex-col gap-4 mt-40 w-[15vw]'>
                <h3 className='text-white text-2xl'>Navigation</h3>
                <ul className='flex flex-col gap-4'>
                    <li className='text-[var(--yellow_color)] text-[2.5ch] cursor-pointer'>Accueil</li>
                    <li className='text-white text-[2ch] cursor-pointer hover:text-[var(--yellow_color)]'>Actualités</li>
                    <li className='text-white text-[2ch] cursor-pointer hover:text-[var(--yellow_color)]' >Bourses d'études</li>
                    <li className='text-white text-[2ch] cursor-pointer hover:text-[var(--yellow_color)]'>Inscription</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 w-[15vw] mt-13'>
                <h3 className='text-white text-2xl'>Média sociaux</h3>
                <div className='flex flex-row gap-4'>
                    <FontAwesomeIcon icon={faFacebookF} className='text-[var(--yellow_color)] bg-white border-8 border-[var(--yellow_color)] rounded-full text-xl w-7 h-10 py-1' />
                    <FontAwesomeIcon icon={faLinkedin} className='text-[var(--yellow_color)] bg-white border-8 border-[var(--yellow_color)] rounded-full text-xl w-7 h-10 py-1' />
                    <FontAwesomeIcon icon={faInstagram} className='text-[var(--yellow_color)] bg-white border-8 border-[var(--yellow_color)] rounded-full text-xl w-7 h-10 py-1' />
                </div>
            </div>
        </div>
    )
}

export default Footer