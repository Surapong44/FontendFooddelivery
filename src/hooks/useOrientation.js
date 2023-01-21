import { useEffect, useState } from "react"
import { Dimensions } from "react-native";

export const useOrientation = () => {
 
    const [screenInfo,setScreenInfo] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenInfo(result.screen)
        }

        dimensionsHandler =  Dimensions.addEventListener('change',onChange);

        return () =>  dimensionsHandler.remove();
    },[]);

    return{
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width
    }
}