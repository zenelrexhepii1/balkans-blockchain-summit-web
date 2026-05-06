import { useState } from "react";

export const useImageLoader = (initialState: boolean) => {
      const [isLoadingImage,setIsLoadingImage] = useState(initialState);
    
       const handleOnLoadImage = () => {
          setIsLoadingImage(false);
       }

       return {
             isLoadingImage,
             handleOnLoadImage,
       }
}