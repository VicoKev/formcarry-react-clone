import Navbar from "./components/Navbar"
import FormAPI from "./components/FormAPI"
import TopBrand from "./components/TopBrand"
import SetupEasy from "./components/SetupEasy"
import Footer from "./components/categories"
import Formcarry from "./components/formcarry"
import Content from "./components/part_spam"

const App = () => {
  return (
    <div>
      <Navbar />
      <FormAPI />
      <TopBrand />
      <SetupEasy />
      <Content/>
      <Formcarry/>
      <Footer/>
    </div>
  )
}

export default App