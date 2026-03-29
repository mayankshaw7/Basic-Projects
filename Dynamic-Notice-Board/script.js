let div = document.querySelector(".container");

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");


btn1.innerText = "Add to Top";
btn2.innerText = "Add to Bottom";

// Hover effect for Button 1 (Add to Top)
btn1.onmouseover = function () {
    this.style.backgroundColor = "yellow"; // Changes colour on hover
};
btn1.onmouseout = function () {
    this.style.backgroundColor = ""; // Resets to original
};
// Hover effect for Button 1 (Add to Top)
btn2.onmouseover = function () {
    this.style.backgroundColor = "purple"; // Changes colour on hover
};
btn2.onmouseout = function () {
    this.style.backgroundColor = ""; // Resets to original
};

let input = document.getElementById("input")
input.onmouseover = function () {
    this.style.backgroundColor = "Aqua";
}
input.onmouseout = function () {
    this.style.backgroundColor = "";
}
const br = document.createElement("br");


input.after(br, btn1, btn2);

btn1.onclick = function () {
    const val = input.value;
    if (val === "") {
        alert(`it is vacant`);
        return;
    }
    let ul = document.querySelector("ul");
    let li = document.createElement('li');
    li.innerText = val;
    ul.prepend(li);
    input.value = "";
}
btn2.onclick = function () {
    const val = input.value;
    if (val === "") {
        alert(`it is vacant`);
        return;
    }
    let ul = document.querySelector("ul");
    let li = document.createElement('li');
    li.innerText = val;
    ul.append(li);
    input.value = "";
}

//   ul.insertAdjacentHTML('afterbegin', `<li>${val}</li>`);