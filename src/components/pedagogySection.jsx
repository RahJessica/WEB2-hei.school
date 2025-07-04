import '../App.css'

function PedagogySection(){
    return(
        <div className='flex flex-col px-50 py-20'>
            <div className='flex flex-row gap-25 '>
                <div className='w-[50vw]'>
                    <img src="https://hei.school/wp-content/uploads/2024/11/IMG-03-e1720537524581-1024x950-1.webp" alt="" 
                    className='w-[40vw]'/>
                </div>
                <div className='w-[50vw] text-[var(--blue_color)] gap-10 flex flex-col justify-center'>
                    <h2 className='text-5xl'>Le programme pédagogique</h2>
                    <p className='text-lg/8'>Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.</p>
                    <button className='border-solid border-3 border-[var(--blue_color)] px-2 py-2 w-[13vw] cursor-pointer text-xl font-semibold hover:bg-[var(--blue_color)] hover:text-white'>Notre programme</button>
                </div>
            </div>
            <div className='flex flex-row gap-8 pt-15'>
                <div className='flex flex-col bg-amber-100 w-[17vw] h-[30vh] rounded-4xl px-5 pt-5 gap-4'>
                    <h3 className='text-[var(--yellow_color)] text-5xl font-semibold'>25%</h3>
                    <p className='text-[var(--blue_color)] font-semibold text-2xl'>Apprentissage théoriques en présentiel</p>
                </div>
                <div className='flex flex-col bg-amber-100 w-[17vw] h-[30vh] rounded-4xl px-5 pt-5 gap-4'>
                    <h3 className='text-[var(--yellow_color)] text-5xl font-semibold'>25%</h3>
                    <p className='text-[var(--blue_color)] font-semibold text-2xl'>Apprentissage sur supports numériques</p>
                </div>
                <div className='flex flex-col bg-amber-100 w-[17vw] h-[30vh] rounded-4xl px-5 pt-5 gap-4'>
                    <h3 className='text-[var(--yellow_color)] text-5xl font-semibold'>25%</h3>
                    <p className='text-[var(--blue_color)] font-semibold text-2xl'>Travaux individuels de l’étudiant</p>
                </div>
                <div className='flex flex-col bg-amber-100 w-[17vw] h-[30vh] rounded-4xl px-5 pt-5 gap-4'>
                    <h3 className='text-[var(--yellow_color)] text-5xl font-semibold'>25%</h3>
                    <p className='text-[var(--blue_color)] font-semibold text-2xl'>Apprentissage en entreprise</p>
                </div>
            </div>
            <div className='flex flex-row gap-10 pt-5'>
                <img src="https://hei.school/wp-content/uploads/2025/05/Mask-group-1.webp" alt="" 
                    className='w-[23vw] h-[55vh]'
                />
                <img src="https://hei.school/wp-content/uploads/2025/05/Mask-group-2.webp" alt="" 
                 className='w-[23vw] h-[55vh]'/>
                <img src="https://hei.school/wp-content/uploads/2025/05/Mask-group-3.webp" alt="" 
                 className='w-[23vw] h-[55vh]'/>
            </div>
        </div>
    )
}

export default PedagogySection