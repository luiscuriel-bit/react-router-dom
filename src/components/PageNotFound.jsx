import { useLocation } from "react-router-dom";

const PageNotFound = () => {
    const location = useLocation();
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>The path <strong>{location.pathname}</strong> does not exist, please go home and try again</p>
        </div>
    );
};

export default PageNotFound;