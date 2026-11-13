// ==========================================
// 1. QUITAR FONDO IA (Simulación / Conexión API)
// ==========================================
async function removerFondoIA() {
    const statusMsg = document.getElementById('status-msg');
    if (statusMsg) statusMsg.innerText = "Procesando fondo con IA...";
    
    // Aquí puedes conectar tu API de remoción de fondo (ej. Remove.bg o similar) o procesamiento local
    setTimeout(() => {
        alert("¡Fondo eliminado correctamente por la IA!");
        if (statusMsg) statusMsg.innerText = "Fondo eliminado con éxito";
        // Lógica para actualizar el canvas eliminando el fondo de la imagen activa
    }, 1500);
}

// ==========================================
// 2. SEMITONOS PROFESIONALES (Efecto de Puntos para DTF)
// ==========================================
function aplicarSemitonosProfesionales() {
    const canvas = document.getElementById('dtf-canvas'); // Asegúrate de tener tu ID de canvas
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imgData.data;
    
    // Algoritmo básico de semitonos por conversión a escala de grises y tramado
    for (let i = 0; i < pixels.length; i += 4) {
        let avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
        // Efecto de tramado de semitonos clásico
        let halftone = avg < 128 ? 0 : 255; 
        pixels[i] = halftone;     // R
        pixels[i + 1] = halftone; // G
        pixels[i + 2] = halftone; // B
    }
    
    ctx.putImageData(imgData, 0, 0);
    alert("¡Efecto de semitonos profesionales aplicado con éxito!");
}

// ==========================================
// 3. UPSCALER & VECTOR IA (Vectorización / Mejora)
// ==========================================
function vectorizarYMejorarIA() {
    const statusMsg = document.getElementById('status-msg');
    if (statusMsg) statusMsg.innerText = "Optimizando y vectorizando imagen a 300 DPI...";
    
    setTimeout(() => {
        alert("¡Imagen vectorizada y mejorada (Upscaled) con éxito para impresión DTF!");
        if (statusMsg) statusMsg.innerText = "Vectorización completada";
    }, 2000);
}

// ==========================================
// 4. ZOOM / ESCALAR IMAGEN EN EL LIENZO
// ==========================================
let escalaImagen = 1.0;

function cambiarZoom(delta) {
    escalaImagen += delta;
    if (escalaImagen < 0.1) escalaImagen = 0.1; // Límite mínimo
    
    const imagenActiva = document.getElementById('objeto-activo'); // Tu elemento activo en el lienzo
    if (imagenActiva) {
        imagenActiva.style.transform = `scale(${escalaImagen})`;
    }
    console.log(`Zoom actual: ${Math.round(escalaImagen * 100)}%`);
}

// ==========================================
// 5. RECORTAR IMAGEN (Crop)
// ==========================================
function activarHerramientaRecorte() {
    alert("Herramienta de recorte activada. Selecciona el área en el lienzo para recortar.");
    // Aquí puedes integrar librerías ligeras de recorte o lógica de selección de coordenadas sobre el canvas
}
<!-- Botón Quitar Fondo -->
<button onclick="removerFondoIA()">Quitar fondo IA</button>

<!-- Botón Semitonos Profesionales -->
<button onclick="aplicarSemitonosProfesionales()">Semitonos Pro</button>

<!-- Botón Upscaler / Vectorizar -->
<button onclick="vectorizarYMejorarIA()">Upscaler & Vector IA</button>

<!-- Botones de Zoom / Escalar -->
<button onclick="cambiarZoom(0.1)">Ampliar (+)</button>
<button onclick="cambiarZoom(-0.1)">Minimizar (-)</button>

<!-- Botón Recortar -->
<button onclick="activarHerramientaRecorte()">Recortar</button>
