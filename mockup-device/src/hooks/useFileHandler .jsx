import { useState } from "react";

export const useFileHandler = (maxFileSize) => {
    const [file, setFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (!selectedFile) {
            setError("No file selected.");
            return;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
        if (!allowedTypes.includes(selectedFile.type)) {
            setError("Unsupported file type. Please select a JPEG, PNG, GIF, or WebP image.");
            return;
        }

        if (selectedFile.size > maxFileSize) {
            setError("The file is too large. Please select a file less than 100 MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            setFile(selectedFile);
            setImageSrc(e.target.result);
            setError("");
        };

        reader.onerror = () => {
            console.error("FileReader error:", reader.error);
            setError("An error occurred while reading the file.");
        };

        reader.readAsDataURL(selectedFile);
    };

    return { file, imageSrc, error, handleFileChange };
};
