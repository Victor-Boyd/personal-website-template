import "./About.css"

function About () {
    return (
        <div className="about-container w-full bg-black">
            <div className="about-inner w-full h-auto">
                <div className="bg-yellow-200 w-full h-80 flex">
                    <div className="w-2/5 h-full text-2xl font-bold bg-yellow-400 grid place-content-center">your picture here</div>
                    <div className="w-3/5 h-full text-2xl font-bold grid place-content-center">topic one here</div>
                </div>
                <div className="bg-yellow-300 w-full h-80 flex">
                    <div className="w-3/5 h-full text-2xl font-bold grid place-content-center">topic two here</div>
                    <div className="w-2/5 h-full text-2xl font-bold bg-yellow-500 grid place-content-center">your picture here</div>
                </div>
                <div className="bg-yellow-200 w-full h-80 flex">
                    <div className="w-2/5 h-full text-2xl font-bold bg-yellow-400 grid place-content-center">your picture here</div>
                    <div className="w-3/5 h-full text-2xl font-bold grid place-content-center">topic three here</div>
                </div>
            </div>
        </div>
    )
}

export default About