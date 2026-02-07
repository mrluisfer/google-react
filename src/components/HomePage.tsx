import google_logo from '../assets/Google_logo.svg'
import FeelingInDesk from './FeelingInDesk'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
import Footer from './Footer'

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 flex flex-col items-center justify-center pb-[100px]">
        <img
          src={google_logo}
          alt="Google"
          draggable="false"
          className="h-[92px] w-[272px] mb-[24px] select-none"
          title="Google"
        />
        <SearchBar />
        <FeelingInDesk />
      </div>
      <Footer />
    </div>
  )
}
