 import Logo from '../assets/logo.png'
 import { Link } from 'react-router-dom'
 const Footer = () => {
  return (
            <footer className="bg-white shadow dark:bg-gray-900 mt-4 mb-0">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={Logo} className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NorZah Cinema</span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://www.instagram.com/kitanorman1?igsh=MWJzcG1hZ25sYjMybg==" target="_blank" className="hover:underline me-4 md:me-6" rel="noreferrer">instagram</a>
                            </li>
                            <li>
                                <a href="www.linkedin.com/in/norman-kita-aa6499207" target="_blank" className="hover:underline me-4 md:me-6" rel="noreferrer">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com/Normankita" target="_blank" className="hover:underline me-4 md:me-6" rel="noreferrer">
                                <span className="">GitHub</span></a>
                            </li>
                            <li>
                                <a href="https://wa.me/+255762028554" target="_blank" className="hover:underline" rel="noreferrer">WhatsApp</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">NorZah™</a>. All Rights Reserved.</span>
                </div>
            </footer>
  )
}
export default Footer
