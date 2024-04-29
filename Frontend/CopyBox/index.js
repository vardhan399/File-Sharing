function myFunction() {
  const fileurl = localStorage.getItem('fileurl');
  if (fileurl) {
      document.getElementById("myInput").value = fileurl;
      navigator.clipboard.writeText(fileurl)
          .then(() => {
              console.log('URL copied to clipboard');
          })
          .catch((error) => {
              alert(`Copy failed! ${error}`);
          });
  } else {
      alert('fileurl is not set in localStorage');
  }
}
