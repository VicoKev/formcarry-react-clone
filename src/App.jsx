import Footer from "./components/categories"
import Formcarry from "./components/formcarry"
import Navbar from "./components/Navbar"
import Content from "./components/part_spam"

const App = () => {
  return (
    <div>
      <Navbar />
      <Content/>
      <Formcarry/>
      <Footer/>
    </div>
  )
}

export default App