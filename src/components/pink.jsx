import Blue from "./blue";
import Green from "./green"
const Pink = () => {
    return (
        <div className="pink">
            <div className="blueContainer">
                <Blue/>
                <Blue/>
                <Blue/>
            </div>
            <Green/>
        </div>
    );
}

export default Pink;