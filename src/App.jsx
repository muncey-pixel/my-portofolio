import MyNavbar from './components/MyNavbar.jsx'
import MyTools from './components/MyTools.jsx'
import Introduction from './components/Introduction.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return(
    <div>
      <MyNavbar/>

      <main>
        <Introduction></Introduction>
        <MyTools></MyTools>
        <Contact></Contact>
      </main>
    </div>
  )
}

export default App;