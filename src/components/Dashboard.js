import Reviews from "./Reviews";
import Rating from "./Rating";
import Analysis from "./Analysis";
import Visitors from "./Visitors";

function Dashboard() {
    return(
        <div>
            <Reviews/>
            <Rating/>
            <Analysis/>
            <Visitors/>
        </div>
    )
}

export default Dashboard;