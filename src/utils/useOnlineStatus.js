import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    //check if online, (useState(true) i.e internet is working fine)
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false); //user is offline, setOnlineStatus is false.
        });

        //when user go online
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    }, []);

    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;