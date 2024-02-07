import { useState } from "react";
import NavigationButtons from "./NavigationButtons";

const PropertyDetailsCarousel = ({photos} : { photos: string[] }) => {

    const [currentPhoto, setCurrentPhoto] = useState(0);

    const everyPhoto = photos.map((photo, index) => {
        const isCurrentPhoto = index === currentPhoto;
        const photoClass = isCurrentPhoto ? "rounded-lg" : "rounded-lg opacity-50";
        return <img src={photo} className={photoClass} alt="" onClick={() => setCurrentPhoto(index)} key={index} />;
    });

    return (
        <div className="p-12 mobile:p-6 border border-solid border-grey-15 rounded-xl flex flex-col aspect-auto h-fit">
            <div className="grid grid-cols-3 gap-5 p-3 bg-grey-10 border border-solid border-grey-15 rounded-lg mobile:hidden">
                {everyPhoto}
            </div>
            <img className="py-8 rounded-3xl" src={photos[currentPhoto]} alt="" />
            <div className="self-end">
                <NavigationButtons onClickLeft={() => setCurrentPhoto(currentPhoto - 1)} onClickRight={() => setCurrentPhoto(currentPhoto + 1)} disabledLeft={currentPhoto === 0} disabledRight={currentPhoto === photos.length - 1} />
            </div>
        </div>
    )
}

export default PropertyDetailsCarousel