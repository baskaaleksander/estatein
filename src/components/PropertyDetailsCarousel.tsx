import { useState } from "react";

const PropertyDetailsCarousel = ({photos} : { photos: string[] }) => {

    const [currentPhoto, setCurrentPhoto] = useState(0);

        const everyPhoto = photos.map((photo, index) => {
            return <img src={photo} className="rounded-lg" alt="" onClick={() => setCurrentPhoto(index)} key={index} />;
        });

      return (
        <div className="p-12 bg-grey-15 border border-solid border-grey-30 rounded-xl">
            <div className="grid grid-cols-3 gap-5 p-3 bg-grey-10 border border-solid border-grey-15 rounded-lg">
                {everyPhoto}
            </div>
            <img className="py-8 rounded-3xl" src={photos[currentPhoto]} alt="" />
            <div>

            </div>
        </div>
      )
}

export default PropertyDetailsCarousel