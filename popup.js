const apiKey = '3133f27f67a5476ca36e18013e3c0fd9';
const url = 'https://api.rebrandly.com/v1/links';



document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', 
    onclick, false)

    function onclick() {

        const renderResponse = (res) => {
            if(res.errors) {
                responseField.innerHTML = "<p>Error. Please try again</p>";
            }
            else {
                responseField.innerHTML = res.shortUrl;
            }
        }

        const shortenURL = async () => {
            const data = JSON.stringify({destination: document.getElementById("linktoshorten").value});
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Content-type': 'application/json',
                        'apikey': apiKey
                    }
                });
                if(response.ok) {
                    const jsonResponse = await response.json();
                    renderResponse(jsonResponse);
                }
            }
            catch(error) {
                console.log(error);
            }
        }

        shortenURL();

    }
},false)