import logo_nba from '../assets/logo_nba.svg'
import logo_continental from '../assets/logo_continental.svg'
import logo_vixen from '../assets/logo_vixen.svg'
import logo_yeezy from '../assets/logo_yeezy.svg'
import logo_festival from '../assets/logo_festival.svg'

const TopBrand = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="text-center mb-6">
        <p className="text-base font-medium text-gray-500 tracking-wide uppercase">
          Trusted by top brands worldwide
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Logos des marques */}
        <img
          src={logo_nba}
          alt="NBA Logo"
          className="h-16 md:h-20 object-contain"
        />
        <img
          src={logo_continental}
          alt="Continental Logo"
          className="h-16 md:h-20 object-contain"
        />
        <img
          src={logo_vixen}
          alt="Vixen Logo"
          className="h-16 md:h-20 object-contain"
        />
        <img
          src={logo_yeezy}
          alt="Yeezy Logo"
          className="h-16 md:h-20 object-contain"
        />
        <img
          src={logo_festival}
          alt="Festival de Cannes Logo"
          className="h-16 md:h-20 object-contain"
        />
      </div>
    </div>
  )
}

export default TopBrand