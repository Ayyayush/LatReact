import dragonImage from "./assets/l_how-to-train-your-dragon-movie-poster_58ada901.jpg";

export const App = () => {
  return (
    < div style={{ fontFamily: "Arial, sans-serif", color: "#333", backgroundColor: "#f0f0f0" ,marginTop: "0px"}}>

     
      <Netflix />
       <Netflix />
        <Netflix />
         <Netflix />
          <Netflix />

     
    </div>
  );
};


const Netflix = () => {
  return (
   
      <div style={{ textAlign: "center", padding: "20px" }}>
        <img src={dragonImage} alt="How to Train your Dragon" width="80%" />
        <h1>A recent Movie I Watched</h1>
        <h2>How to Train your Dragon</h2>
        <p>
          Summary: A young Viking named Hiccup befriends a feared dragon,
          Toothless, and together they change their world by proving that
          dragons and humans can live in harmony.
        </p>
      </div>
  );
}

export default App;
