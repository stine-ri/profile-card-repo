
import './App.css'

function App() {
 const name = "Christine Nyambwari"
 const moreDetails={
     age:21,
     bio:"My name is christine Nyambwari, a tech enthusiast and the founder of Riyan Collections.A dancer also."
 }
  return (
    <>

      <h2> Hello, my name is {name}</h2>
      <p>I am {moreDetails.age} years old.My bio {moreDetails.bio}</p>

    </> 
     
    
  )
}

export default App
