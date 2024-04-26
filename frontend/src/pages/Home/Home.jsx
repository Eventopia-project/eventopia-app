import Carrousel from "../../components/Carrousel/Carrousel"
import Categories from "../../components/Categories/Categories"
import './Home.css'

function Home() {
  return (
    <div className="container">
      <Carrousel />
      <Categories />
    </div>
  )
}

export default Home
