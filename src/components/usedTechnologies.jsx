import '../App.css'

function UsedTechnologies(){
    return (
        <div className='bg-gray-200 flex flex-col gap-7 items-center text-center px-50 py-20'>
            <h2 className='text-5xl font-semibold text-[var(--blue_color)]'>Les technos et langages utilisées</h2>
            <p className='text-[var(--blue_color)] text-lg/7 font-light'>
                Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
            </p>
            <div className='flex flex-row flex-wrap gap-13 py-10 items-center justify-around'>
                <img src="https://hei.school/wp-content/uploads/2024/06/Java.png" alt="java_logo" className='w-[10vw] h-[15vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/06/python.png" alt="python_logo" className='w-[8vw] h-[18vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/06/JS.png" alt="javascript_logo" className='w-[9vw] h-[18vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/06/C.png" alt="c_logo" className='w-[8vw] h-[17vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/06/TS.png" alt="ts_logo" className='w-[9vw] h-[18vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/09/docker.png" alt="docker_logo" className='w-[10vw] h-[8vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/09/next.png" alt="nextJs_logo" className='w-[8vw] h-[10vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/09/aws.png" alt="aws_logo" className='w-[8vw] h-[10vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/09/serverless.png" alt="serverless_logo" className='w-[10vw] h-[15vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/09/react.png" alt="react_logo" className='w-[10vw] h-[8vh]'/>
                <img src="https://hei.school/wp-content/uploads/2024/09/openapi.png" alt="openApi_logo" className='w-[12vw] h-[15vh]'/>
            </div>
        </div>
    )
}

export default UsedTechnologies