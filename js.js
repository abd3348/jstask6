
fetch("json.json")
    .then(response => response.json())
    .then(data => {
        let main = document.getElementById("main");
        localStorage.clear();
            localStorage.setItem("order", JSON.stringify(data));
        for (let i = 0; i < data.length; i++) {

            main.innerHTML += `
                <h2>${data[i].name}</h2>
                <p>Age: ${data[i].price}</p>
        `;
        }
    });