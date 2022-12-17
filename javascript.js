const date = new Date();


/* Funktio muistion toiminnallisuudelle */
function saveData(){

    /* haetaan käyttäjän tiedot inputeista */
    let name = document.getElementById("name").value;
    let note = document.getElementById("note").value;

    /* Luodaan divi muistiota varten */
    let resultDiv = document.createElement("div");
    /* If lausekkeella joko tärkeä tai normaali tyylin muistio */
    if (document.getElementById("checkbox").checked){
        /* Jos tärkeä, lisätään class important ja luodaan divi */
        resultDiv.classList.add("important");
        document.getElementById("result").appendChild(resultDiv);
    
        /* Luodaan otsikko, liitetään diviin otsikko jossa nimi ja päivämäärä */
        let title = document.createElement("h4");
        title.innerHTML = date.toLocaleDateString() + " " + name;
        resultDiv.appendChild(title);
        /* Luodaan tekstille paragraph, liitetään diviin itse muistion sisältö */
        let memo = document.createElement("p");
        memo.textContent = note;
        resultDiv.appendChild(memo);
    } else {
        /* Jos muistio ei ole tärkeä, luodaan normal classin muistio div */
        resultDiv.classList.add("normal");
        document.getElementById("result").appendChild(resultDiv);
    
        /* Luodaan otsikko, liitetään diviin otsikko jossa nimi ja päivämäärä */
        let title = document.createElement("h4");
        title.innerHTML = date.toLocaleDateString() + " " + name;
        resultDiv.appendChild(title);
        /* Luodaan tekstille paragraph, liitetään diviin itse muistion sisältö */
        let memo = document.createElement("p");
        memo.textContent = note;
        resultDiv.appendChild(memo);
}
    
}