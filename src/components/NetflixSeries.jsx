// import dragonImage from "../assets/l_how-to-train-your-dragon-movie-poster_58ada901.jpg";
import seriesData from "../api/seriesData.json"; // Assuming you have a JSON file with series data

// Simple Button component
const Button = ({ children }) => (
  <button style={{ padding: "10px 20px", margin: "5px", cursor: "pointer" }}>
    {children}
  </button>
);

const Netflix = () => {
 
  
  return (
    <ul>
      {
        seriesData.map((currElem) =>
        {
   return (
    <li key={currElem.id} style={{ textAlign: "center", padding: "20px" }}>
      <img src={currElem.img_url} alt="How to Train your Dragon" width="80%" />
      <h1>Movie Recommendations {currElem.name}</h1>
      <h3>{currElem.rating}</h3>
      <h3>{currElem.description}</h3>
      <p>{currElem.description}</p>
      <p>{currElem.genre}</p>
      <a href={currElem.watch_url} targetr="_blank">
      <button>Watch now</button>
      </a>
    </li>
   )
  
        })
      }
    </ul>
  );
};

export default Netflix;

