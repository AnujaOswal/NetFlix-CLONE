import React from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import requests from '../Requests'
import Row from '../Row';
import './HomeScreen.css'
import Footer from '../Footer';
function HomeScreen() {
    const array1=[
        {
            title:"NETFLIX ORIGINALS",fetchUrl:requests.fetchNetflixOriginals,isLargeRow:true,

        },
        {
            title:"Trending Now",fetchUrl:requests.fetchTrending,
        },
        {
            title:"Comedy Movies",fetchUrl:requests.fetchComedyMovies,
        },
        {
             title:"Horror Movies",fetchUrl:requests.fetchHorrorMovies,
         },
         {
            title:"Romance Movies",fetchUrl:requests.fetchRomanceMovies,
         },
         {
            title:"Documentaries",fetchUrl:requests.fetchDocumentaries,
         }
    ]
   
    return (
        <div className="homeScreen">
        <Nav/>

        <Banner/>
        {
            array1.map((arr,index)=>{
                
                return <Row {...arr} key={index} />
            })
        }
        {/* <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} /> 
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} /> */}
{/* ​        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} /> 
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} /> */}
        <Footer/>
        </div>
    )
}

export default HomeScreen
