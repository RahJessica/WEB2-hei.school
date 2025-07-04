import '../App.css'

function CarrersSection(){
    return(
        <div className='flex flex-row px-50 py-10 gap-30'>
            <div className='w-[60vw] flex flex-col gap-7 justify-center'>
                <h2 className='font-light text-5xl text-[var(--blue_color)]'> Quelques débouchés</h2>
                <p className='text-[var(--blue_color)]'>
                    Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
                </p>
                <p className='text-[var(--blue_color)]'>
                    Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
                </p>
            </div>
            <div className='w-[50vw]'>
                <img src="https://hei.school/wp-content/uploads/2024/11/IMG-02-e1720543344824-987x1024-1.webp" alt="" 
                className='w-[30vw]'
                />
            </div>
        </div>
    )
}

export default CarrersSection