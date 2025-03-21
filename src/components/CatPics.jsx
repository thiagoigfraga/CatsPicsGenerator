import { useEffect, useState } from "react";
import Button from "./Button";

const CatPics = () => {
    const [catPics, setCatPics] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCatPics = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");
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

    return (
        <div>
            <Button fetchCatPics={fetchCatPics} client:load />
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div className="catPics">
                    {catPics.map((pic) => (
                        <img key={pic.id} src={pic.url} alt="Cat" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CatPics;