import { useState } from "react"
import ChildOne from "./ChildOne";

export default function ParentOne () {

    const [data, setData] = useState();

    const parentToChild = () => {
        setData("this is the data from the parent page which will be passed to the child page")
    }
    return(
        <>
            <ChildOne parentToChild={data}/>
            {/* passing the data from the child page to the parent page */}
            <button onClick={() => parentToChild()}>Click Parent to child</button>
            {/* the onclick calls the function bc of the () */}
        </>
    )
}