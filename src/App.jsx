
 import './App.css'
 import Personal from './components/personal'
 import Placeholder from './components/placeholder'


 
 function App() {
   const name = "Christine Nyambwari"
   const name2 = "Kim soohyun"
   const name3 = "Kim jiwon"
   const name4 = "Kim leewon"
  
   const moreDetails = {
     age: 21,
     country: "South Korea",
     bio:"She is a tech enthusiast"
   }
   let isTall = true

 
   return (
     <>
     <div className='container'>
      <div className="profile-card">
         <div className='profile-img'>
         <Placeholder w={100} h={100} />
         </div>
         <Personal name={name} moreDetails={moreDetails} isTall={isTall}   />
       </div>
       <div className="profile-card">
         <div className='profile-img'>
         <Placeholder w={100} h={100} />
         </div>
         <Personal name={name2} moreDetails={moreDetails} isTall={isTall}   />
       </div>
       <div className="profile-card">
         <div className='profile-img'>
         <Placeholder w={100} h={100} />
         </div>
         <Personal name={name3} moreDetails={moreDetails} isTall={isTall}   />
       </div>
       <div className="profile-card">
         <div className='profile-img'>
         <Placeholder w={100} h={100} />
         </div>
         <Personal name={name4} moreDetails={moreDetails} isTall={isTall}   />
         </div>
       </div>
     </>
   )
 }
 
 export default App