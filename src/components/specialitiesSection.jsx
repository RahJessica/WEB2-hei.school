import '../App.css'

function SpecialitiesSection(){
    return( 
        <div className='flex flex-col  items-center bg-gray-200 px-50 py-10'>
            <h2 className='text-[var(--blue_color)] font-semibold text-5xl mb-5'>Domaines</h2>
            <p className='text-[var(--blue_color)] mb-10'>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
        <div className='flex flex-row gap-8 justify-around'>
            <section className='bg-white rounded-xl w-[25vw] h-[70vh] flex flex-col items-center text-center px-6 pt-5'>
                <img src="https://hei.school/wp-content/uploads/2024/05/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png" alt="" />
                <h3 className='text-[var(--yellow_color)] text-3xl mb-5'>Cloud et cybersécurité</h3>
                <p className='text-[var(--blue_color)] text-[2.1ch] text-sm/7'>
                    Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.
                </p>
            </section>
            <section className='bg-white rounded-xl w-[25vw] h-[70vh] flex flex-col items-center text-center px-6 pt-5'>
                <img src="https://hei.school/wp-content/uploads/2024/05/Intelligence-artificielle_Plan-de-travail-1-150x150.png" alt="" />
                <h3 className='text-[var(--yellow_color)] text-3xl mb-5'>Intelligence artificielle</h3>
                <p className='text-[var(--blue_color)] text-[2.1ch] text-sm/7'>
                   Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI
                </p>
            </section>
            <section className='bg-white rounded-xl w-[25vw] h-[70vh] flex flex-col items-center text-center px-6 pt-5'>
                <img src="https://hei.school/wp-content/uploads/2024/05/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png" alt="" />
                <h3 className='text-[var(--yellow_color)] text-3xl mb-5'>Ingénierie logicielle</h3>
                <p className='text-[var(--blue_color)] text-[2.1ch] text-sm/7'>
                    Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.
                </p>

            </section>
        </div>
        </div>
    )
}

export default SpecialitiesSection