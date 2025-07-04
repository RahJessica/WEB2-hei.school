import '../App.css'

function PartnershipSection() {
    return (
        <div className='flex flex-col justify-center text-center px-70 p-15 pb-30'>
            <h2 className='text-[var(--blue_color)] text-5xl font-semibold pb-6'>Nos partenaires</h2>
            <p className='text-[var(--blue_color)] text-lg/8'>L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires</p>
            <div className='flex flex-row gap-15 pt-15 w-[70vw] '>
                <div className='flex flex-col w-[30vw] justify-center gap-14 '>
                    <img src="https://hei.school/wp-content/uploads/2024/05/LOGO-NEXTA.webp" alt="" className='w-[20vw] h-[10vh]' />
                    <img src="https://hei.school/wp-content/uploads/2024/06/Logo-Numer-vf.png" alt="" className='w-[20vw] h-[10vh]' />
                </div>
                <div className='flex flex-col w-[30vw] justify-center gap-14'>
                    <img src="https://hei.school/wp-content/uploads/2024/05/PN_Logo_baseline_color_ENG.png" alt="" className='w-[20vw] h-[10vh]' />
                    <img src="https://hei.school/wp-content/uploads/2024/05/bp-logo-full-1024x331.webp" alt="" className='w-[20vw] h-[10vh]' />
                </div>
                <div className='flex flex-col w-[30vw] justify-center gap-14'>
                    <img src="https://hei.school/wp-content/uploads/2024/05/Yooz-2023-Logo-2.webp" alt="" className='w-[15vw] h-[7vh]' />
                    <img src="https://hei.school/wp-content/uploads/2024/05/YIF_LOGO_512x512_BL_on_WH-1.webp" alt="" className='w-[15vw] h-[10vh]' />
                </div>
                <div className='flex flex-col w-[30vw] justify center gap-14'>
                    <img src="https://hei.school/wp-content/uploads/2024/05/logo-etech.png" alt="" className='w-[10vw] h-[7vh]' />
                    <img src="https://hei.school/wp-content/uploads/2024/05/logo-kante-company-1.png" alt="" className='w-[20vw] h-[15vh]' />
                </div>
                <div className='flex flex-col w-[30vw]'>
                    <img src="https://hei.school/wp-content/uploads/2024/09/logo_emit.png" alt="" className='w-[10vw] h-[7vh]' />
                </div>
            </div>
        </div>
    )
}

export default PartnershipSection