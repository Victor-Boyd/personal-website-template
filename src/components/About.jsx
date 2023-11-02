import "./About.css"

function About () {
    return (
        <div className="about-container w-full bg-black">
            <div className="about-inner w-full h-auto">
                <div className="about-topic-container bg-yellow-200 w-full h-96 flex max-sm:flex-col">
                    <div className="w-2/5 h-full max-sm:w-full max-sm:h-3/5 max-sm:text-base text-2xl font-bold max-sm:bg-yellow-100 bg-yellow-400 grid place-content-center">your picture here</div>
                    <div className="w-3/5 h-full max-sm:w-full max-sm:h-2/5 max-sm:text-base text-2xl font-bold grid place-content-center">topic one here</div>
                </div>
                <div className="about-topic-container bg-yellow-200 w-full h-96 flex max-sm:flex-col-reverse">
                    <div className="w-3/5 h-full max-sm:w-full max-sm:h-2/5 max-sm:text-base text-2xl font-bold grid place-content-center">topic two here</div>
                    <div className="w-2/5 h-full max-sm:w-full max-sm:h-3/5 max-sm:text-base text-2xl font-bold max-sm:bg-yellow-100 bg-yellow-400 grid place-content-center">your picture here</div>
                </div>
                <div className="about-topic-container bg-yellow-200 w-full h-96 flex max-sm:flex-col">
                    <div className="w-2/5 max-sm:w-full max-sm:h-3/5 h-full max-sm:text-base text-2xl font-bold max-sm:bg-yellow-100 bg-yellow-400 grid place-content-center">your picture here</div>
                    <div className="w-3/5 h-full max-sm:w-full max-sm:h-2/5 max-sm:text-base text-2xl font-bold grid place-content-center">topic three here</div>
                </div>
            </div>
        </div>
    )
}

export default About