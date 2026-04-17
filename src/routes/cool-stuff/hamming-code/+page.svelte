<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import { language } from '$lib/i18n';

	const content = {
		en: {
			title: 'Hamming Codes for Error Correction',
			excerpt: 'Implementation of error detection and correction algorithms using Hamming codes.',
			body: `## Project Description

Hamming codes are a family of linear error-correcting codes that allow automatic detection and correction of single-bit errors during data transmission. This project implements both Hamming encoding and decoding.

### Main Features

- **Hamming encoding**: Generates parity bits to protect data.
- **Error detection**: Identifies 1-bit and 2-bit errors.
- **Automatic correction**: Corrects single-bit errors automatically.
- **Visualization**: Shows the encoding and correction process step by step.

### Technologies Used

- **Language**: C/C++
- **Algorithms**: Hamming (7,4) and Hamming (15,11)
- **Mathematics**: Linear algebra over finite fields
- **Testing**: Exhaustive test cases with error injection

## How It Works

### Encoding Process

1. **Data input**: The information bits to be transmitted are received.
2. **Parity calculation**: Parity bits are generated using XOR operations.
3. **Insertion**: Parity bits are inserted at specific positions (powers of two).
4. **Output**: The final codeword is produced for transmission.

### Correction Process

1. **Reception**: The codeword is received, possibly with errors.
2. **Syndrome calculation**: The error syndrome is computed using the parity bits.
3. **Localization**: The syndrome indicates the error position, if one exists.
4. **Correction**: The faulty bit is corrected and the original data is extracted.

## Implementation

### Code Structure

\`\`\`c
// Structure to handle Hamming codes
typedef struct {
    int data_bits;      // Number of data bits
    int parity_bits;    // Number of parity bits
    int total_bits;     // Total bits in codeword
    int* parity_matrix; // Parity generation matrix
} HammingCode;

// Main functions
int* hamming_encode(int* data, int data_length);
int* hamming_decode(int* received, int* corrected_data);
int calculate_syndrome(int* received, HammingCode* code);
void correct_error(int* received, int error_position);
\`\`\`

### Correction Algorithm

The algorithm uses the error syndrome to determine the position of the faulty bit:

- **Syndrome = 0**: No errors.
- **Syndrome > 0**: The error position matches the syndrome value.
- **Double error**: Detected, but not correctable.

## Results and Analysis

### Correction Capability

- **1-bit errors**: 100% effective detection and correction
- **2-bit errors**: Reliable detection, but not correction
- **3+ bit errors**: May go undetected

### Efficiency

- **Code (7,4)**: 4 data bits + 3 parity bits = 57% efficiency
- **Code (15,11)**: 11 data bits + 4 parity bits = 73% efficiency
- **Overhead**: Decreases logarithmically as the block size grows

## Practical Applications

Hamming codes are used in:

- **RAM memory**: ECC correction
- **Storage systems**: Hard drives and SSDs
- **Communications**: Reliable data transmission
- **Embedded systems**: Protection against interference

## Conclusions

This project highlights both the mathematical elegance of Hamming codes and their practical value in modern digital systems. The ability to automatically detect and correct errors is fundamental to the reliability of computing systems.

### Key Learnings

- Deeper understanding of error-correcting code theory
- Efficient implementation of correction algorithms
- Better analysis of the trade-off between redundancy and reliability
- Practical use of abstract mathematical concepts`
		},
		es: {
			title: 'Códigos Hamming para Corrección de Errores',
			excerpt: 'Implementación de algoritmos de detección y corrección de errores usando códigos Hamming.',
			body: `## Descripción del Proyecto

Los códigos Hamming son una familia de códigos lineales de corrección de errores que permiten la detección y corrección automática de errores de un solo bit durante la transmisión de datos. Este proyecto implementa tanto la codificación como la decodificación Hamming.

### Características Principales

- **Codificación Hamming**: Genera bits de paridad para proteger los datos.
- **Detección de errores**: Identifica errores de 1 bit y 2 bits.
- **Corrección automática**: Corrige errores de un solo bit automáticamente.
- **Visualización**: Muestra el proceso de codificación y corrección paso a paso.

### Tecnologías Utilizadas

- **Lenguaje**: C/C++
- **Algoritmos**: Hamming (7,4) y Hamming (15,11)
- **Matemáticas**: Álgebra lineal sobre campos finitos
- **Pruebas**: Casos de prueba exhaustivos con inyección de errores

## Cómo Funciona

### Proceso de Codificación

1. **Entrada de datos**: Se reciben los bits de información a transmitir.
2. **Cálculo de paridad**: Los bits de paridad se generan usando operaciones XOR.
3. **Inserción**: Los bits de paridad se insertan en posiciones específicas (potencias de dos).
4. **Salida**: Se produce la palabra código final para la transmisión.

### Proceso de Corrección

1. **Recepción**: Se recibe la palabra código, posiblemente con errores.
2. **Cálculo del síndrome**: El síndrome de error se calcula usando los bits de paridad.
3. **Localización**: El síndrome indica la posición del error, si existe.
4. **Corrección**: El bit defectuoso se corrige y se extrae el dato original.

## Implementación

### Estructura del Código

\`\`\`c
// Estructura para manejar códigos Hamming
typedef struct {
    int data_bits;      // Número de bits de datos
    int parity_bits;    // Número de bits de paridad
    int total_bits;     // Bits totales en la palabra código
    int* parity_matrix; // Matriz de generación de paridad
} HammingCode;

// Funciones principales
int* hamming_encode(int* data, int data_length);
int* hamming_decode(int* received, int* corrected_data);
int calculate_syndrome(int* received, HammingCode* code);
void correct_error(int* received, int error_position);
\`\`\`

### Algoritmo de Corrección

El algoritmo usa el síndrome de error para determinar la posición del bit defectuoso:

- **Síndrome = 0**: Sin errores.
- **Síndrome > 0**: La posición del error coincide con el valor del síndrome.
- **Error doble**: Detectado, pero no corregible.

## Resultados y Análisis

### Capacidad de Corrección

- **Errores de 1 bit**: 100% de efectividad en detección y corrección
- **Errores de 2 bits**: Detección confiable, pero no corrección
- **Errores de 3+ bits**: Pueden pasar desapercibidos

### Eficiencia

- **Código (7,4)**: 4 bits de datos + 3 bits de paridad = 57% de eficiencia
- **Código (15,11)**: 11 bits de datos + 4 bits de paridad = 73% de eficiencia
- **Sobrecarga**: Disminuye logarítmicamente a medida que crece el tamaño del bloque

## Aplicaciones Prácticas

Los códigos Hamming se usan en:

- **Memoria RAM**: Corrección ECC
- **Sistemas de almacenamiento**: Discos duros y SSDs
- **Comunicaciones**: Transmisión confiable de datos
- **Sistemas embebidos**: Protección contra interferencias

## Conclusiones

Este proyecto destaca tanto la elegancia matemática de los códigos Hamming como su valor práctico en los sistemas digitales modernos. La capacidad de detectar y corregir errores automáticamente es fundamental para la confiabilidad de los sistemas computacionales.

### Aprendizajes Clave

- Comprensión más profunda de la teoría de códigos correctores de errores
- Implementación eficiente de algoritmos de corrección
- Mejor análisis de la relación entre redundancia y confiabilidad
- Uso práctico de conceptos matemáticos abstractos`
		}
	};

	$: currentContent = content[$language];
</script>

<svelte:head>
	<title>Hamming Code - Caffeine Overflow</title>
	<meta
		name="description"
		content="Implementation and analysis of Hamming codes for error correction in data transmission."
	/>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-10 px-4 py-12">
	<header class="space-y-4 text-center">
		<p class="inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-green-600">
			<img src="/images/err-corr.svg" alt="Hamming Code logo" class="h-8" />
			Hamming Code
		</p>
		<h1 class="text-4xl font-bold text-gray-900">{currentContent.title}</h1>
		<p class="text-lg text-gray-600">
			{currentContent.excerpt}
		</p>
	</header>

	<MarkdownRenderer content={currentContent.body} />
</div>
