const date = new Date();


function saveData(){
    let name = document.getElementById("name").value;
    let note = document.getElementById("note").value;

    let resultDiv = document.createElement("div");
    if (document.getElementById("checkbox").checked){
        resultDiv.classList.add("important");
        document.getElementById("result").appendChild(resultDiv);
    

        let title = document.createElement("h4");
        title.innerHTML = date.toLocaleDateString() + " " + name;
        resultDiv.appendChild(title);

        let memo = document.createElement("p");
        memo.textContent = note;
        resultDiv.appendChild(memo);
    } else {
    resultDiv.classList.add("normal");
    document.getElementById("result").appendChild(resultDiv);
    

    let title = document.createElement("h4");
    title.innerHTML = date.toLocaleDateString() + " " + name;
    resultDiv.appendChild(title);

    let memo = document.createElement("p");
    memo.textContent = note;
    resultDiv.appendChild(memo);
}
    
}