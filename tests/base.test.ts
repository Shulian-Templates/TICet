import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('../src/lib/ui.ts', () => ({
  cuandoPasa: vi.fn(),
  enviarAlFrontend: vi.fn(),
  iniciar: vi.fn(),
}));

describe('TICet', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  async function dispararEvento(
    nombre: string,
    datos: Record<string, string>,
  ): Promise<typeof import('../src/lib/ui.ts')> {
    const ui = await import('../src/lib/ui.ts');
    await import('../src/index.ts');
    const handler = vi.mocked(ui.cuandoPasa).mock.calls.find(([n]: [string, unknown]) => n === nombre)?.[1];
    handler?.(datos);
    return ui;
  }

  it('Sabrina Carpenter cuesta 1000 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'sabrina', cantidad: '1', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 1000);
  });

  it('King Gizzard and the Lizard Wizard cuesta 700 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'kgatlw', cantidad: '1', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 700);
  });

  it('Lali cuesta 500 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'lali', cantidad: '1', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 500);
  });

  it('Magdalena Bay cuesta 600 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'magdalena', cantidad: '1', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 600);
  });

  it('Viagra Boys cuesta 400 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'viagra', cantidad: '1', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 400);
  });

  it('Dillom cuesta 350 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'dillom', cantidad: '1', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 350);
  });

  it('Marilina Bertoldi cuesta 200 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'marilina', cantidad: '1', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 200);
  });

  it('Mugre cuesta 150 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'mugre', cantidad: '1', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 150);
  });

  it('2 entradas para Sabrina Carpenter cuestan 2000 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'sabrina', cantidad: '2', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 2000);
  });

  it('3 entradas para Dillom cuestan 1050 patacones', async () => {
    const ui = await dispararEvento('seleccionarArtista', { id: 'dillom', cantidad: '3', codigoDescuento: '' });
    expect(vi.mocked(ui.enviarAlFrontend)).toHaveBeenCalledWith('mostrarPrecio', 1050);
  });
});
