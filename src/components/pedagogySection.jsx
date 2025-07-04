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
                    <button className='border-solid border-3 border-[var(--blue_color)] px-2 py-2 w-[13vw] cursor-pointer text-xl hover:bg-[var(--blue_color)] hover:text-white'>Notre programme</button>
                </div>
            </div>
        </div>
    )
}

export default PedagogySection