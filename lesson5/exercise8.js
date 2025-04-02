const payload = {
	ticker: 'APPL',
	name: 'Apple Inc',
	price: 171.48,
}

fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({payload})
}



)
.then(response => {return response.json()})
.then(data => console.log(data))