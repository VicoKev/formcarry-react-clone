import { Mail } from "lucide-react";
import lightning_icon from "../assets/lightning_icon.svg";
import formcarry_icon from "../assets/formcarry_icon.svg";
// import form_1 from "../assets/form_1.png";

const FormAPI = () => {
    return (
        <div className="w-full pb-20">
            <div className="w-full max-w-[1120px] mx-auto px-6">
                <div className="flex flex-col items-center text-center mt-14">
                    {/* Desktop Header - Desktop */}
                    <p className="hidden lg:block  text-[#0052FF] font-medium mb-4">FORM API</p>
                    {/* Desktop Title - Desktop */}
                    <h1 className="hidden lg:block text-[#171531] text-6xl font-semibold mb-6">
                        Receive emails <img className="inline-block align-middle mx-2" src={lightning_icon} alt="Lightning Icon" /> instantly<br />
                        from your website <img className="inline-block align-middle mx-2" src={formcarry_icon} alt="Formcarry Icon" /> form
                    </h1>
                    {/* Description - Desktop */}
                    <p className="hidden lg:block text-[#6c6f93] text-lg max-w-3xl mb-12">
                    Never worry about the backend of your form again. Create your HTML form, <br />
                    connect to our API, get email notifications, block spam, and use <br />
                    over 3000 integrations.
                    </p>
                    {/* Email Form - Desktop */}
                    <div className="hidden lg:block w-full max-w-xl relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                        type="email"
                        placeholder="Your email address..."
                        className="w-full pl-12 pr-32 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-[#0052FF] text-gray-600"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0052FF] text-white px-6 py-2 rounded-full hover:bg-[#0043d1] transition-colors">
                        Get Started
                        </button>
                    </div>
                    {/* <img className="w-full max-w-2xl mt-[-30px]" src={form_1} alt="Form 1" /> */}
                </div>

                <div className="lg:text-center text-left">
                    {/* Mobile Header - Mobile */}
                    <p className="lg:hidden text-[#0052FF] font-medium mb-4">COLLECT FORM SUBMISSIONS</p>
                    {/* Mobile Title - Mobile */}
                    <h1 className="lg:hidden text-[#171531] text-5xl font-semibold mb-6">
                        Get emails and messages from your HTML form.
                    </h1>
                    {/* Description - Mobile */}
                    <p className="lg:hidden text-[#6c6f93] text-lg mb-12">
                        Code your own HTML form and style it,
                        then point your form to formcarry to get
                        email notifications, upload files, block
                        spam and integrate with other apps.
                    </p>
                    {/* Email Form - Mobile */}
                    <div className="lg:hidden flex flex-col space-y-3 mt-8">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                            <div className="pl-3 pr-2">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                            type="email"
                            placeholder="Your email address..."
                            className="w-full py-4 rounded-lg border-none focus:outline-none focus:border-[#0052FF] text-gray-600"
                            />
                        </div>
                        <button className="w-full py-3 text-center bg-[#0052FF] text-white px-10 text-base rounded-full hover:bg-[#0043d1] transition-colors">
                            Get Started
                        </button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default FormAPI