import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMedal } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
function AboutSection() {
    return (
        <div className='flex flex-row justify-around text-[var(--blue_color)] py-10 px-50 gap-30'>
            <div className='w-[50vw] flex flex-row'>
                <img src="https://hei.school/wp-content/uploads/2024/11/A-propos-left-1.webp" alt="" />
            </div>
            <div className='w-[50vw] '>
                <h2 className='text-5xl font-semibold mb-3.5' >A propos de nous  </h2>
                <section className='flex gap-5 flex-col pt-6'>
                    <div className='flex flex-row gap-4 items-center'>
                        <FontAwesomeIcon icon={faGraduationCap} className='text-[var(--yellow_color)] text-4xl' />
                        <p className='text-2xl font-bold'>+3ans </p>
                    </div>
                    <p>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>
                </section>
                 <section className='flex gap-5 flex-col pt-15'>
                    <div className='flex flex-row gap-4 items-center'>
                        <FontAwesomeIcon icon={faUserFriends} className='text-[var(--yellow_color)] text-4xl' />
                        <p className='text-2xl font-bold'>+250 étudiants </p>
                    </div>
                    <p>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.</p>
                </section>
                <section className='flex gap-5 flex-col pt-15'>
                    <div className='flex flex-row gap-4 items-center'>
                        <FontAwesomeIcon icon={faMedal} className='text-[var(--yellow_color)] text-4xl' />
                        <p className='text-2xl font-bold'>Notre mission</p>
                    </div>
                    <p>Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.</p>
                </section>
            </div>
        </div>

    )
}
export default AboutSection