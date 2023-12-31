function Brands() {
  return (
    <section className="pt-[4.5rem] pb-8">
      <div className="container">
        <div className="pt-8">
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 justify-items-center">
            <div>
              <img
                className="h-[60px] opacity-[0.2] transition-opacity hover:opacity-[0.6]"
                src="/src/assets/images/logo1.png"
                alt="Prologics"
              />
            </div>
            <div>
              <img
                className="h-[60px] opacity-[0.2] transition-opacity hover:opacity-[0.6]"
                src="/src/assets/images/logo2.png"
                alt="American Tower"
              />
            </div>
            <div>
              <img
                className="h-[60px] opacity-[0.2] transition-opacity hover:opacity-[0.6]"
                src="/src/assets/images/logo3.png"
                alt="Equinix"
              />
            </div>
            <div>
              <img
                className="h-[60px] opacity-[0.2] transition-opacity hover:opacity-[0.6]"
                src="/src/assets/images/logo4.png"
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
