
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'


const countriesPromise =fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())



function App() {
  

  return (
    <>
      <Suspense fallback={<p>Nadir vai loading...</p>}  >
        <Countries countriesPromise={countriesPromise} ></Countries>
      </Suspense>
      <h1>in the country</h1>
   
      
    </>
  )
}

export default App
