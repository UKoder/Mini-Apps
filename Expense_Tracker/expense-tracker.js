const categorySelect = document.getElementById("categories-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const submit = document.getElementById("submit");
const expenses = [];
let totalAmt = 0;
const tBody = document.querySelector("tbody");

renderExpense();

submit.addEventListener("click",()=>{
    addExpense();
})

function addExpense(){
    const category = categorySelect.value;
    const amt = Number(amountInput.value);
    const date = dateInput.value;

    tBody.style.display = "table-row-group";

    expenses.push({category,amt,date});
    totalAmt += expenses[expenses.length-1].amt;
    dispTotal();

    renderExpense();
}

function renderExpense(){
    tBody.innerHTML = " ";
    for(let i = 0; i < expenses.length; i++){
        const tr = document.createElement("tr");
        tr.innerHTML =`
        <td>${expenses[i].category}</td>
        <td>${expenses[i].amt}</td>
        <td>${expenses[i].date}</td>
        <td><button class="del-btn">Delete</button></td>`;

        tr.querySelector(".del-btn").addEventListener("click",()=>{
            totalAmt -= expenses[i].amt;
            dispTotal();
            expenses.splice(i,1);
            renderExpense();
        })

        tBody.appendChild(tr);

    }
}

tfoot = document.querySelector("tfoot tr");
let totalAmtDisp = document.createElement("td");

function dispTotal(){
    totalAmtDisp.textContent = totalAmt;
    tfoot.appendChild(totalAmtDisp);
}