const btnadd = document.getElementById("btn_add");
btnadd.addEventListener("click", () => {
  const billYes = document.querySelector(".bill_yes");
  billYes.style.display = "block";
  billYes.style.right = "0";
  setTimeout(() => {
    billYes.style.right = "100%";
  }, 3000);
});
