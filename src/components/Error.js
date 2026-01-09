import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!!!</h1>
            <h2>Something went wrong!!</h2>
            {/*it will show 404 not found  and 
            here, I will be able to use these bcz of 
            useRouterError hook which we get from react-router-dom
            . and this status and statusText comes from there*/}
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    ); 
};

export default Error;


//This is the error page, we build to handle error in web applications.