

function Contact() {
    return (
        <div className="contact-container w-full h-96 bg-black text-white">
            <div className="contact-inner w-full h-full max-sm:px-14  max-sm:py-14 px-32 py-24 grid grid-cols-3 grid-rows-1 max-sm:grid-cols-2 max-sm:grid-rows-2">
                <div className="contact-column w-auto flex flex-col">
                    <strong className="max-lg:text-2xl text-3xl">Contact</strong>
                    <button type="button" className="text-start ">Email</button>
                    <button type="button" className="text-start">Phone number</button>
                    <button type="button" className="text-start">WhatsApp</button>
                    <button type="button" className="text-start">Slack</button>
                </div>
                <div className="contact-column w-auto flex flex-col">
                    <strong className="max-lg:text-2xl text-3xl">Socials</strong>
                    <button type="button" className="text-start">LinkedIn</button>
                    <button type="button" className="text-start">Twitter</button>
                    <button type="button" className="text-start">Instagram</button>
                    <button type="button" className="text-start">FaceBook</button>
                </div>
            </div>
        </div>
    )
}

export default Contact