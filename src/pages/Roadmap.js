import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import {Container} from '@chakra-ui/react'
import RoadmapSteps from "../components/RoadmapSteps"

function Roadmap() {
    const {_id} = useParams()
   
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://nest-js-curate.herokuapp.com/roadmap/${_id}`)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [_id]);

    
    return (
        <div>
           <Container mWidth="container.xl">
                <RoadmapSteps data={data} />
           </Container>
        </div>
    )
}

export default Roadmap
