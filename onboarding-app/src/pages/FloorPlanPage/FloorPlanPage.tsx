import "./styles/FloorPlanPage.css";
import groundFloorSmall from "./assets/groundFloorSmall.jpg";
import groundFloorBig from "./assets/groundFloorBig.png";
import firstFloor from "./assets/firstFloor.jpg";
import secondFloor from "./assets/secondFloor.jpg";
import thirdFloor from "./assets/thirdFloor.jpg";

export default function FloorPlanPage() {
    return (
        <div>
            <section className="section">
                <h1>Floor plan and meeting rooms</h1>
                <h3>Ground Floor</h3>
                <p>For FLR, PPP and Admin</p>
                <div>
                    <img
                        src={groundFloorSmall}
                        alt='Floor plan of the ground floor showing the admin desks, reception and 2 big meeting rooms'
                        className="floor-plan-image"
                    />
                    <img
                        src={groundFloorBig}
                        alt='Larger picture of the ground floor plan showing everything'
                        className="floor-plan-image"
                    />
                </div>
                <h3>First Floor</h3>
                <p>For GTM, Data & Analytics and Upstream</p>
                <div>
                    <img
                        src={firstFloor}
                        alt='Floor plan of the first floor'
                        className="floor-plan-image"
                    />
                </div>
                <h3>Second Floor</h3>
                <p>For Capabilities, Surfaces, Infrastructure and the IT Team</p>
                <div>
                    <img
                        src={secondFloor}
                        alt='Floor plan of the second floor'
                        className="floor-plan-image"
                    />
                </div>
                <h3>Third Floor ( Canteen/eating space )</h3>
                <div>
                    <img
                        src={thirdFloor}
                        alt='Floor plan of the third floor'
                        className="floor-plan-image"
                    />
                </div>
            </section>
        </div>
    );
}
