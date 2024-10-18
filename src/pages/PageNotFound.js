import PageNotFoundImage from '../assets/Position.gif'
import { Link } from 'react-router-dom'
import { useTitle } from '../hooks'
const PageNotFound = ({title}) => {
  useTitle(title)
  return (
    <main className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4" >
        <p className="text-7xl font-bold my-10 text-gray-700 dark:text-white">Oops! Sorry, Page not Found "404"</p>
        <img className='rounded-3xl' src={PageNotFoundImage} alt="" />
      </div>
      <div className='flex justify-center'>
        <Link to="/">
        <button type="button" className="text-white font-medium m-2 rounded-lg py-2.5 px-5 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...">Back to Home Page</button>
        </Link>
      </div>
    </main>
  )
}

export default PageNotFound
