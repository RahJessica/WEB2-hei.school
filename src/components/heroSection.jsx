import '../App.css'

function HeroSection() {
    return (
        <div className=" h-[90vh] bg-cover bg-center mt-[-3.2vh] flex flex-col items-center text-center px-[30vh]"
            style={{ backgroundImage: "url('https://hei.school/wp-content/uploads/2024/09/hei-banner-1.webp')", opacity: "85%", objectFit: "cover" }}>

            <div>
                <h1 className="text-7xl text-white pt-30 font-semibold">Haute Ecole d'Informatique</h1>
                <p className="text-white text-2xl pt-17">Une infrastructure de qualité et un programme pédagogique qui répond aux besoins du marché pour l'employabilité de nos étudiants</p>

            </div>
            <div className='flex flex-row gap-20 py-25'>
                <button className='bg-white text-[var(--blue_color)] font-bold text-xl px-8 py-3 rounded-sm cursor-pointer hover:opacity-90'>
                    Inscrivez-vous ici
                </button>
                <button className='bg-[var(--yellow_color)] text-white font-bold text-xl px-8 py-3 rounded-sm cursor-pointer hover:opacity-90'>
                    Emploi du temps 
                </button> 
                <button className='bg-[var(--blue_color)] text-white font-bold text-xl px-8 py-3 rounded-sm cursor-pointer hover:opacity-90'>
                    Programme pédagogique
                </button>
            </div>
            <p className='font-sm text-white text-2xl pt-5'>Habilitation MESupRES, suivant l'arrêté n°31309/2023</p>
        </div>
    )
}
export default HeroSection