import { useState, useEffect } from "react"
import { getStarshipDetails } from "../../services/sw-api"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import "./StarshipDetails.css"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return ( 
    <>
    {starshipDetails.name ?
      <div className="ship-container">
        <div className="detail-ship-div">
          <h5>NAME: {starshipDetails.name}</h5>
          <h5>MODEL: {starshipDetails.model}</h5>
          <Link className ='link' to="/">RETURN</Link>
        </div>
      </div>
      :
      <>
      <h3>Loading...</h3>
    </>
  }
  </>
  );
}

export default StarshipDetails