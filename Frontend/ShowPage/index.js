async function uploadFile() {
    const jwtToken = sessionStorage.getItem('jwtToken');
    if (!jwtToken) {
        alert("Please first login");
        window.location.href = "/Frontend/LoginPage/index.html"
        return; 
    }

    const inputFile = document.querySelector('#file');
    const file = inputFile.files[0];

    if (!file) {
        alert("Please select a file.");
        return; 
    }

    const formData = new FormData();
    formData.append('myFile', file);

    try {
        const response = await axios.post("http://localhost:3000/api/uploadFile", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `${jwtToken}`
            }
        });
        const fileurl = response.data.fileurl;
       alert("copy share Link: "+ fileurl);

       

    } catch (error) {
        console.error(error);
        alert("Error uploading file.");
    }
}
