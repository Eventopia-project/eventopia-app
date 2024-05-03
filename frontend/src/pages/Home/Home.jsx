import Carrousel from '../../components/Carrousel/Carrousel'
import Categories from '../../components/Categories/Categories'
import ComingEvents from '../../components/ComingEvents/ComingEvents'
import './Home.css'

function Home() {

  return (
    <div className="container">
      <Carrousel />
      <ComingEvents />
      <Categories />
    </div>)
}

export default Home
