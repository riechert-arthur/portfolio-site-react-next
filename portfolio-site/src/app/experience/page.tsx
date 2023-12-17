import WorkList from "../../components/WorkList"
/**
 * A page to display previous work experience. 
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function Experience() {
    return (
        <main className='flex flex-strat pb-24 min-h-screen font-mono'>
            <div className='py-48 w-full'>
                <div className='flex items-end mb-6'>
                    <h1 className='text-6xl mr-7'>Work Experience</h1>
                </div>
                <WorkList />
            </div>
        </main>
    )
}