

let stock = [];
let carrito = JSON.parse(localStorage.getItem("carrito"));
if (carrito == undefined) {
    carrito = [];
}

stock.push(new Producto("Indian Masala", 1450));
stock.push(new Producto("Tisanas", 1250));
stock.push(new Producto("Ayurveda", 1550));
stock.push(new Producto("Jazmin", 1300));
stock.push(new Producto("Tazones", 1850));
stock.push(new Producto("Difusores", 2500));

let agregarForm = document.getElementById("agregar");
let productosSelect = document.getElementById("productos");
let itemsTable = document.getElementById("items");
let thTotal = document.getElementById("total");
let vaciarButton = document.getElementById("vaciar");





stock.forEach((el, indice) => {
    let option = document.createElement("option");
    option.setAttribute("value", indice);
    option.innerText = `${el.nombre} a $${el.precio}`;
    productosSelect.append(option);
});

agregarForm.onsubmit = (e) => {
    e.preventDefault();
    let el = stock[productosSelect.value];
    let esta = carrito.some(
        (elementoCarrito) => elementoCarrito.producto.nombre == el.nombre
    );
    if (!esta) {
        carrito.push(new Item(el, 1));
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    renderizarCarrito();
};

function renderizarCarrito() {
    itemsTable.innerHTML = "";
    carrito.forEach((el, indice) => {
        let row = document.createElement("tr");
        let th = document.createElement("th");
        row.append(th);
        th.innerText = el.producto.nombre;
        th = document.createElement("th");
        row.append(th);
        th.innerText = el.cantidad;
        

        let mas = document.createElement("button");
        mas.classList = "btn btn-primary";
        mas.innerText = "+";
        th.append(mas);
        mas.onclick = () => {
            carrito[indice].cantidad++;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderizarCarrito();
        };

        let menos = document.createElement("button");
        menos.classList = "btn btn-primary";
        menos.innerText = "-";
        th.append(menos);
        menos.onclick = () => {
            if (carrito[indice].cantidad > 1) carrito[indice].cantidad--;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderizarCarrito();
        };

        th = document.createElement("th");
        row.append(th);
        th.innerText = el.producto.precio;
        th = document.createElement("th");
        row.append(th);

        let eliminar = document.createElement("button");
        eliminar.classList = "btn btn-danger";
        eliminar.innerText = "Eliminar";
        th.append(eliminar);
        eliminar.onclick = () => {
            carrito.splice(indice, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderizarCarrito();
        };

        itemsTable.append(row);
    });
    thTotal.innerText = carrito.reduce(
        (acum, act) => acum + act.cantidad * act.producto.precio,
        0
    );
}

vaciarButton.onclick = () => {
    carrito = [];
    renderizarCarrito();
};


renderizarCarrito();