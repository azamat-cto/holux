import Header from '@/components/header'
import Home from '@/components/home'
import Brands from '@/components/brands'

function App() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Home />
        <Brands />
        <Popular />
      </main>
    </>
  )
}

export default App
