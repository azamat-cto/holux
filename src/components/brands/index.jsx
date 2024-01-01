import Logo1 from '@/assets/images/logo1.png'
import Logo2 from '@/assets/images/logo2.png'
import Logo3 from '@/assets/images/logo3.png'
import Logo4 from '@/assets/images/logo4.png'

function Brands() {
  return (
    <section className="pt-[4.5rem] pb-8">
      <div className="container">
        <div className="pt-8">
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 justify-items-center">
            <div>
              <img
                className="h-[60px] opacity-[0.2] transition-opacity hover:opacity-[0.6]"
                src={Logo1}
                alt="Prologics"
              />
            </div>
            <div>
              <img
                className="h-[60px] opacity-[0.2] transition-opacity hover:opacity-[0.6]"
                src={Logo2}
                alt="American Tower"
              />
            </div>
            <div>
              <img
                className="h-[60px] opacity-[0.2] transition-opacity hover:opacity-[0.6]"
                src={Logo3}
                alt="Equinix"
              />
            </div>
            <div>
              <img
                className="h-[60px] opacity-[0.2] transition-opacity hover:opacity-[0.6]"
                src={Logo4}
                alt="Digital Reality"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
