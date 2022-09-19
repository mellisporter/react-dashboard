import Reviews from "./Reviews";
import Rating from "./Rating";
import Analysis from "./Analysis";
import Visitors from "./Visitors";
import Sidebar from "./Sidebar";

function Dashboard() {
    return(
        <div>
            <Reviews/>
            <Rating/>
            <Analysis/>
            <Visitors/>
            <Sidebar/>
        </div>
    )
}

export default Dashboard;