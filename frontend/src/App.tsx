import Header from "./components/header"
import Button from "./components/notificationbutton"
import SalesCard from "./components/SalesCard"
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
           <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
