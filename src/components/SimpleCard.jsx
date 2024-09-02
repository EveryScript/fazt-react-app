import { useState } from "react"

export function SimpleCard({ username = 'unkown', phraseFormat }) {
    const [isLearned, setIsLearned] = useState(false);

    const learnText = isLearned ? 'Learned' : 'Start learning'
    const btnClass = isLearned ? ' bg-cyan-700 text-white hover:text-red-500 hover:border-red-500 hover:bg-gray-200' : 'bg-gray-200 hover:bg-gray-400'

    const handleLearn = () => {
        setIsLearned(!isLearned)
    }
    return (
        <section className='mx-auto w-2/5 bg-white rounded-md p-5 mb-2'>
            <div className="flex gap-4">
                <img className="w-20 max-h-20 rounded-full" src={`https://unavatar.io/${username}`} alt="image avatar" />
                <div className="inline">
                    <h3 className='font-bold text-2xl'>Hello there, my name is {username}</h3>
                    <p className="">My favorite phrase is: <br /> {phraseFormat}</p>
                    <button className={'group border border-gray-400 rounded-md py-1 px-2 mt-2 ' + btnClass}
                        onClick={handleLearn}>
                        <span className={isLearned ? "group-hover:hidden" : "block"}>{learnText}</span>
                        <span className={isLearned ? "hidden group-hover:block" : "hidden"}>Stop learn</span>
                    </button>
                </div>
            </div>
        </section>
    )
}