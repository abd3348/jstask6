
fetch("json.json")
    .then(response => response.json())
    .then(data => {
        let main = document.getElementById("main");
        let arr = JSON.parse(localStorage.getItem("order")) || [];
        localStorage.clear();
        for (let i = 0; i < data.length; i++) {
            arr.push(data[i]);
            localStorage.setItem("order", JSON.stringify(arr));
        }

        for (let i = 0; i < data.length; i++) {

            main.innerHTML += `
                <h2>${data[i].name}</h2>
                <p>Age: ${data[i].price}</p>
        `;
        }
    });