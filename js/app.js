document.addEventListener("DOMContentLoaded", e => {
    console.dir("here");

    let xml, xmlhttp, xmlDoc, vliste;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "api/president.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    console.log(xmlDoc);
    vliste = String("");
    xml = xmlDoc.getElementsByTagName("president");

    console.log(xml[0].childNodes[1]);
    for (let i = 0; i < xml.length; i++) {

        //variables pour les noeuds

        const Nom = xml[i].getElementsByTagName("Nom")[0].childNodes[0].nodeValue;
        const Mandat = xml[i].getElementsByTagName("Mandat")[0].childNodes[0].nodeValue;
        const Naissance = xml[i].getElementsByTagName("Naissance")[0].childNodes[0].nodeValue;
        const Mort = xml[i].getElementsByTagName("Mort")[0].childNodes[0].nodeValue;
        const Image = xml[i].getElementsByTagName("Image")[0].getAttribute("path");

        //ajout de chaque propriété dans boucle
        console.log(Nom + " " + Mandat + " " + Naissance + " " + Mort);

        vliste += `<li>
                        <figure>
                        <img src="${Image}" alt="${Nom}"></img>
                            <figcpation>
                                <ul>
                                    <li><strong>Nom</strong> : ${Nom}</li>
                                    <li><strong>Mandat</strong> : ${Mandat}</li>
                                    <li><strong>Naissance</strong> : ${Naissance}</li>
                                    <li><strong>Mort</strong> : ${Mort}</li>
                                </ul>
                            </figcpation>
                        </figure>
                    </li>`;
        //stockage dans un tableau
        myStock = [];
        myStock.push(Nom, Mandat, Naissance, Mort, Image);
        console.log(JSON.stringify(myStock));
        localStorage.setItem("stock", myStock);
    }

    document.querySelector("ul").innerHTML = vliste;
});