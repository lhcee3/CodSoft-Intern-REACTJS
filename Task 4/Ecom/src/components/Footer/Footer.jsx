import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const Footer = () => {
    return (
        <div className="w-full bg-darkBgColor mt-6">
            <div className="flex flex-col md:flex-row items-center text-white justify-evenly py-3 text-lg font-semibold">
                <p>This was made by Sai Aneesh.</p>
                <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-3">
                        <AiOutlineMail className="border-2 rounded-full p-1" style={{width: "30px", height: "30px"}}/>
                        <p>codsoft intenship task</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <AiOutlinePhone className="border-2 rounded-full p-1" style={{width: "30px", height: "30px"}}/>
                        <p>+91 919191919191</p>
                    </div>
                </div>
            </div>
        </div>
    )
}