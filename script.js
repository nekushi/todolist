let input = document.querySelector('input');
let btn = document.querySelector('button');
let listContainer = document.querySelector('.lists');

btn.addEventListener("click", function() {
    let makeDiv = document.createElement("div");
    let newList = document.createElement("span");
    let trash = document.createElement("i");

    // document.body.addEventListener("keypress", function(e) {
    //     let key = e.code;
    //     if (key == "Enter") {
    //         input.value = "";
    //     }
    // })
    
    if (input.value) {
        newList.innerHTML = input.value;
        listContainer.appendChild(makeDiv);
        makeDiv.setAttribute("class", "box");
        trash.addEventListener("click", function(e) {
            let target = e.target;
            target.parentElement.parentElement.remove();
        });
        trash.innerHTML += "<i class=\"fa-regular fa-trash-can\"</i>";
        makeDiv.appendChild(newList);
        makeDiv.appendChild(trash);
        input.value = "";
    }
})

