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
                <div>
                    <img
                        src={groundFloorSmall}
                        alt='jFrog account menu showing "Edit Profile"'
                        className="floor-plan-image"
                    />
                    <img
                        src={groundFloorBig}
                        alt='jFrog account menu showing "Edit Profile"'
                        className="floor-plan-image"
                    />
                </div>
                <h3>First Floor</h3>
                <div>
                    <img
                        src={firstFloor}
                        alt='jFrog account menu showing "Edit Profile"'
                        className="floor-plan-image"
                    />
                </div>
                <h3>Second Floor</h3>
                <div>
                    <img
                        src={secondFloor}
                        alt='jFrog account menu showing "Edit Profile"'
                        className="floor-plan-image"
                    />
                </div>
                <h3>Third Floor ( Canteen/eating space )</h3>
                <div>
                    <img
                        src={thirdFloor}
                        alt='jFrog account menu showing "Edit Profile"'
                        className="floor-plan-image"
                    />
                </div>
            </section>
        </div>
    );
}
