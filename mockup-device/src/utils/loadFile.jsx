export const handleFileChange = (maxFileSize, event) => {
    const selectedFile = event.target.files[0];
    let error = "";
    let file = null;
    let imageSrc = null;

    if (!selectedFile) {
        error = "No file selected.";
        return { file, imageSrc, error };
    }

    if (selectedFile.size > maxFileSize) {
        error = "The file is too large. Please select a file less than 100 KB.";
        return { file, imageSrc, error };
    }

    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = (e) => {
            file = selectedFile;
            imageSrc = e.target.result;
            resolve({ file, imageSrc, error });
        };

        reader.onerror = () => {
            error = "Error reading the file.";
            reject({ file, imageSrc, error });
        };

        reader.readAsDataURL(selectedFile);
    });
};
