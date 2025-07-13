
import EventHandling from "./components/EventHandling.jsx";
import Netflix from "./components/NetflixSeries.jsx";

export const App = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        backgroundColor: "#f0f0f0",
        marginTop: "0px",
      }}
    >
      {/* This is arrows and key way of returning multiple elements */}
      {/* return ([<Netflix key="1" />,
        <Netflix key="2" />,
        <Netflix key="3" />,
        <Netflix key="4" />,]) */}

      {/* <Netflix /> */}
      <EventHandling />
     





    
    </div>
  );
};



export default App;
