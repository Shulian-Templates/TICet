const _ws = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);

/**
 * Envía un evento al servidor Node.
 * @param {string} nombre - Nombre del evento; el servidor escucha con `cuandoPasa(nombre, ...)`.
 * @param {Record<string, string>} datos - Datos del evento.
 */
function emitirEvento(nombre, datos) {
  _ws.send(JSON.stringify({ evento: nombre, datos }));
}

_ws.onmessage = ({ data }) => {
  const { tipo, mensaje } = JSON.parse(data);
  window.dispatchEvent(new CustomEvent(tipo, { detail: mensaje }));
};
