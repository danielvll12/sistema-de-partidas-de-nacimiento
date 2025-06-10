import jsPDF from 'jspdf';

export const generarPartidaPDF = async (solicitud) => {
  return new Promise((resolve, reject) => {
    const doc = new jsPDF({ unit: 'mm', format: 'letter' });

    const {
      nombres = '',
      apellidos = '',
      sexo = '',
      fechaNacimiento = '',
      horaNacimiento = '',
      lugarNacimiento = '',
      nombrePadre = '',
      documentoPadre = '',
      nombreMadre = '',
      documentoMadre = '',
      domicilio = '',
      fechaEmision = '',
    } = solicitud;

    // Cargar las cuatro imágenes y esperar a que todas estén listas
    const escudo = new Image();
    escudo.src = '/escudo_sv.jpeg';

    const firma = new Image();
    firma.src = '/firma_registradora.jpeg';

    const logoAlcaldia = new Image();
    logoAlcaldia.src = '/logo_alcaldia.jpeg';

    const logoGobierno = new Image();
    logoGobierno.src = '/logo_gobierno.jpeg'; // Nueva imagen en la parte superior derecha

    let imagenesCargadas = 0;

    const verificarCarga = () => {
      imagenesCargadas++;
      if (imagenesCargadas === 4) {
        // Todas las imágenes han sido cargadas
        doc.setFont('times', 'normal');
        doc.setFontSize(14);

        // Encabezado
        doc.text('República de El Salvador', 105, 20, { align: 'center' });
        doc.text('Alcaldía Municipal de Cojutepeque', 105, 27, { align: 'center' });
        doc.text('Partida de Nacimiento', 105, 34, { align: 'center' });

        // Logos superiores
        doc.addImage(logoAlcaldia, 'JPEG', 25, 12, 25, 25);      // Izquierda
        doc.addImage(logoGobierno, 'JPEG', 160, 12, 25, 25);     // Derecha

        // Cuerpo
        doc.setFontSize(12);
        doc.text(`Nombre del inscrito: ${nombres} ${apellidos}`, 20, 50);
        doc.text(`Sexo: ${sexo}`, 20, 58);
        doc.text(`Fecha de nacimiento: ${fechaNacimiento}`, 20, 66);
        doc.text(`Hora de nacimiento: ${horaNacimiento}`, 20, 74);
        doc.text(`Lugar de nacimiento: ${lugarNacimiento}`, 20, 82);
        doc.text(`Nombre del padre: ${nombrePadre}`, 20, 92);
        doc.text(`Documento del padre: ${documentoPadre}`, 20, 100);
        doc.text(`Nombre de la madre: ${nombreMadre}`, 20, 108);
        doc.text(`Documento de la madre: ${documentoMadre}`, 20, 116);
        doc.text(`Domicilio: ${domicilio}`, 20, 126);
        doc.text(`Fecha de emisión: ${fechaEmision}`, 20, 136);

        // Firma
        doc.text('Cojutepeque, Cuscatlán Sur', 20, 150);
        doc.text('Firma del Registrador del Estado Familiar', 105, 190, { align: 'center' });
        doc.line(60, 188, 150, 188);
        doc.addImage(firma, 'JPEG', 90, 165, 50, 20);
        doc.addImage(escudo, 'JPEG', 155, 175, 30, 30);

        const blob = doc.output('blob');
        const url = URL.createObjectURL(blob);
        resolve(url);
      }
    };

    // Eventos de carga
    escudo.onload = verificarCarga;
    firma.onload = verificarCarga;
    logoAlcaldia.onload = verificarCarga;
    logoGobierno.onload = verificarCarga;

    // Manejo de errores
    escudo.onerror = () => reject(new Error('❌ No se pudo cargar el escudo nacional.'));
    firma.onerror = () => reject(new Error('❌ No se pudo cargar la firma.'));
    logoAlcaldia.onerror = () => reject(new Error('❌ No se pudo cargar el logo de la alcaldía.'));
    logoGobierno.onerror = () => reject(new Error('❌ No se pudo cargar el logo del gobierno.'));
  });
};
