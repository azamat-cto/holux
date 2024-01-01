import Header from '@/components/header'
import Home from '@/components/home'
import Brands from '@/components/brands'
import Popular from '@/components/popular'
import Value from '@/components/value'
import Contact from '@/components/contact'
import Subscribe from '@/components/subscribe'
import Footer from '@/components/footer'

function App() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Home />
        <Brands />
        <Popular />
        <Value />
        <Contact />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}

export default App
