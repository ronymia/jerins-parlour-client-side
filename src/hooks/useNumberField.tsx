import  { useEffect } from 'react';


export default function useNumberField(numberRef) {
    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
        };
        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
            }
        };
        const inputElement = numberRef.current;

        if (inputElement) {
            inputElement.addEventListener("wheel", handleWheel, { passive: false });
            inputElement.addEventListener("keydown", handleKeyDown, { passive: false });
        }

        //CLEANUP useEffect
        return () => {
            inputElement.removeEventListener("wheel", handleWheel);
            inputElement.removeEventListener("keydown", handleKeyDown);
        };

    }, []);
    return [numberRef.current];
}