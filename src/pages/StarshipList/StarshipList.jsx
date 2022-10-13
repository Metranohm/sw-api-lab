import { useEffect, useState } from 'react'
import { getStarshipList } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
      console.log(starshipData)
    }
    fetchStarshipList()
  }, [])
  
  return (
    <>
      <h3>Starship List </h3>
      {starshipList.length ? 
      <>
        {starshipList.map(starship => 
          <div key={starship.index} id="card-container">
            <Link to="/starship" state={{starship}}>{starship.name}</Link>
            <br/>
          </div>
        )}
      </>
      :
      <>
        <h4>Hyperdrive in...</h4>
      </>
      }
    </>
  );
}

export default StarshipList