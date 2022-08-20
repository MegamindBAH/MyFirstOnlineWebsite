const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const tableData = document.querySelector("table tbody");
//showMenu
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
})
//hideMenu
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})
//change the Theme

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
//fill orders into the table

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success'}">${order.shipping}</td>
    <td class="primary">Details</td>`;

    tr.innerHTML = trContent;
    tableData.appendChild(tr);


    // const trContent=`<td>${order.productName}</td>
    // <td>${order.productNumber}</td>
    // <td>${order.paymentStatus}</td>
    // <td class="${order.shipping === 'Declined' ? 'danger':order.shipping === 'Pending' ? 'warning': ? 'success'}">${order.shipping}</td>
    // <td class="primary">Details</td>`;
    // tbody.innerHTML=tr;

})