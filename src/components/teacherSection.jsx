import "../App.css"

function TeacherSection(){
    return(
        <div className="bg-indigo-400 py-20 flex items-center justify-center flex-col text-center px-55 gap-5">
            <h2 className="text-5xl text-white font-semibold">L'équipe pédagogique</h2>
            <p className="text-white">
                Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
            </p>
            <div className="flex flex-row gap-8 justify-around mt-8">
                
                <section className="bg-white flex flex-col pt-7 px-3 rounded-2xl w-[23vw] h-[52vh] items-center ">
                    <img src="https://hei.school/wp-content/uploads/2025/03/ryan-min-150x150.webp" alt="" 
                        className="rounded-[50%] border-gray-200 border-solid border-6 w-[13vw] mb-5 "
                    />
                    <h3 className="text-[var(--blue_color)] font-semibold text-xl mb-2">Ryan ANDRIAMAHERY</h3>
                    <p className="text-[var(--blue_color)]">Développeur back end | Cofondateur et directeur des opérations chez HEI </p>
                </section>
                <section className="bg-white flex flex-col pt-7 px-3 rounded-2xl w-[23vw] h-[52vh] items-center ">
                    <img src="https://hei.school/wp-content/uploads/2022/01/97-portraits-97_edited-e1716502895676-150x150.jpg" alt="" 
                     className="rounded-[50%] border-gray-200 border-solid border-6 w-[13vw] mb-5 "
                    />
                    <h3 className="text-[var(--blue_color)] font-semibold text-xl mb-2">Dr Lou Maurica</h3>
                    <p className="text-[var(--blue_color)]">Docteur-ingénieur en informatique | Fondateur et directeur pédagogique de HEI</p>
                </section>
                <section className="bg-white flex flex-col pt-7 px-3 rounded-2xl w-[23vw] h-[52vh] items-center ">
                    <img src="https://hei.school/wp-content/uploads/2022/01/Tahina-OK-e1716502943928-150x150.png" alt="" 
                     className="rounded-[50%] border-gray-200 border-solid border-6 w-[13vw] mb-5 "
                    />
                    <h3 className="text-[var(--blue_color)] font-semibold text-xl mb-2">Dr Lou Maurica</h3>
                    <p className="text-[var(--blue_color)]">Docteur-ingénieur en informatique | Fondateur et directeur pédagogique de HEI</p>
                </section>
            </div>
        </div>
    )
}

export default TeacherSection