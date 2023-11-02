import "./About.css"

function About () {
    return (
        <div className="about-container bg-black">
            <div className="about-inner w-full h-auto p-2">
                <div className="bg-yellow-200 w-full h-80 flex">
                    <div className="w-2/5 h-full bg-yellow-400 grid place-content-center">your picture here</div>
                    <div className="w-3/5 h-full grid place-content-center">topic one here</div>
                </div>
                <div className="bg-yellow-200 w-full h-80 flex">
                    <div className="w-2/5 h-full bg-yellow-400 grid place-content-center">your picture here</div>
                    <div className="w-3/5 h-full grid place-content-center">topic one here</div>
                </div>
            </div>
        </div>
    )
}

export default About