import React from "react";
import { Link, useParams } from 'react-router-dom';



const Details = ({movies}) => {
  let params =useParams();
  
   const film = movies.find((el)=>Number(el.Id)===Number(params.id));
   console.log(film)
  return (
    <div>
      Details
      <iframe
        width="560"
        height="315"
        src={film.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>
      <Link to="/">
        goback
      </Link>

        <p > {film.description}</p>  
         
       
      </div>

      
    </div>
  );
};

export default Details;
