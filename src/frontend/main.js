let seleccionado = null;

const bandContainer = document.querySelector('.bandContainer');
const tituloCompra = document.getElementById('tituloCompra');
const inputCantidad = document.getElementById('cantidad');
const inputDescuento = document.getElementById('descuento');
const btnComprar = document.getElementById('comprar');
const dialogo = document.getElementById('dialogo');
const mensajePrecio = document.getElementById('mensajePrecio');
const okBtn = document.getElementById('okBtn');

function agregarListenerBanda(banda) {
  banda.addEventListener('click', () => {
    if (seleccionado) {
      seleccionado.classList.remove('selected');
    }
    banda.classList.add('selected');
    seleccionado = banda;
    tituloCompra.textContent = 'Entradas para: ' + banda.querySelector('h2').textContent;
    inputCantidad.disabled = false;
    inputDescuento.disabled = false;
    btnComprar.disabled = false;
  });
}

fetch('artistas.json')
  .then((res) => res.json())
  .then((artistas) => {
    artistas.forEach(({ id, nombre, img }) => {
      const div = document.createElement('div');
      div.className = 'band';
      div.id = id;
      div.innerHTML = `<img src="${img}" alt="Imagen ${nombre}" /><h2>${nombre}</h2>`;
      bandContainer.appendChild(div);
      agregarListenerBanda(div);
    });
  });

btnComprar.addEventListener('click', () => {
  emitirEvento('seleccionarArtista', {
    id: seleccionado.id,
    cantidad: inputCantidad.value,
    codigoDescuento: inputDescuento.value,
  });
});

window.addEventListener('mostrarPrecio', (evento) => {
  const precio = evento.detail;
  mensajePrecio.textContent = 'Precio a pagar: ' + precio;
  dialogo.showModal();
});

okBtn.addEventListener('click', () => {
  dialogo.close();
  if (seleccionado) {
    seleccionado.classList.remove('selected');
    seleccionado = null;
  }
  tituloCompra.textContent = 'Valor entrada';
  inputCantidad.value = '';
  inputCantidad.disabled = true;
  inputDescuento.value = '';
  inputDescuento.disabled = true;
  btnComprar.disabled = true;
});
