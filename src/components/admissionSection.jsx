import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function AdmissionSection(){
    return(
        <div className='bg-indigo-400 flex flex-col px-50 py-20'>
            <h2 className='text-white font-semibold text-5xl items-center text-center mb-5'>Admission</h2>
            <p className='text-center text-lg/10 text-white mb-10'>Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau : <br />une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. </p>
        <div className='flex flex-row'>
            <div className='bg-orange-200 flex flex-col w-[25vw] h-[35vh] px-7 py-6 '>
                <h3 className='text-white font-semibold text-5xl mb-5'>01</h3>
                <div className='flex flex-row gap-5 '>
                    <p className='text-[var(--blue_color)] text-lg'> <b>Dépôt de dossiers :</b> pour les bacheliers de toutes séries sans limite d’âge</p>
                    <FontAwesomeIcon icon={faArrowRight} className='text-white text-6xl ' />
                </div>
            </div>
            <div className='bg-amber-200 flex flex-col w-[25vw] h-[35vh] px-7 py-6  '>
                <h3 className='text-white font-semibold text-5xl mb-5'>02</h3>
                <div className='flex flex-row gap-5 '>
                    <p className='text-[var(--blue_color)] text-lg'> <b>Test de niveau :</b>  composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D</p>
                    <FontAwesomeIcon icon={faArrowRight} className='text-white text-6xl ' />
                </div>
            </div>
            <div className='bg-orange-300 flex flex-col w-[25vw] h-[35vh] px-7 py-6  '>
                <h3 className='text-white font-semibold text-5xl mb-5'>03</h3>
                <div className='flex flex-row gap-5 '>
                    <p className='text-[var(--blue_color)] text-lg'><b>Inscription définitive</b>  (si test réussi)</p>
                </div>
            </div>
        </div>
        <div className='flex flex-row gap-10 justify-center mt-10'>
            <button className='cursor-pointer border-solid border-3 border-white rounded-sm px-4 py-2 text-white text-2xl hover:bg-[var(--blue_color)] hover:border-[var(--blue_color)]'>Inscrivez-vous ici</button>
            <button className='cursor-pointer bg-[var(--blue_color)] border-white rounded-sm px-4 py-2 text-white text-2xl hover:bg-gray-100 hover:text-[var(--blue_color)]'>Résultat concours </button>
        </div>
        </div>
    )
}

export default AdmissionSection