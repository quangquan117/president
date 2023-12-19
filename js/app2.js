const xhr = new XMLHttpRequest();
const url = "./api/president.json";
const warning = document.querySelector("div ul");

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let jsonData = JSON.parse(xhr.responseText);
        console.log(jsonData);
        showProd(jsonData);
    } else {
        console.log("erreur de requete");
        warning.innerHTML = `<p>Erreur de requete : ${xhr.status}</p>`;
    }
};
let output = "";
const showProd = data => {
    let i;

    for (i in data.president) {
        output += `<li><figure><img src="${data.president[i].Image.path}" alt="${data.president[i].Nom}"></img>
    <figcpation>
        <ul>
            <li><strong>Nom</strong> : ${data.president[i].Nom}</li>
            <li><strong>Mandat</strong> : ${data.president[i].Mandat}</li>
            <li><strong>Naissance</strong> : ${data.president[i].Naissance}</li>
            <li><strong>Mort</strong> : ${data.president[i].Mort}</li>
        </ul>
    </figcpation>
</figure>
</li>`;
    }
    document.querySelector("div ul").innerHTML = `${output}`;
    localStorage.setItem("Data", JSON.stringify(data));
};
xhr.open("GET", url, true);
xhr.send();