import { useEffect, useState } from "react";
import Button from "./Button";

const CatPics = () => {
    const [catPics, setCatPics] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const fetchCatPics = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            const data = await response.json();
            setCatPics(data);
        } catch (error) {
            console.error("Error fetching cat pics:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCatPics();
    }, []);

    const handleImageClick = (pic) => {
        setSelectedImage(pic.url);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <Button fetchCatPics={fetchCatPics} client:load />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="catPics">
                    {catPics.map((pic) => (
                        <img
                            key={pic.id}
                            src={pic.url}
                            alt="Cat"
                            onClick={() => handleImageClick(pic)}
                        />
                    ))}
                </div>
            )}

            {selectedImage && (
                <div className="modalOverlay" onClick={handleCloseModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Selected Cat" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CatPics;