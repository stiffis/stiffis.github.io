<script lang="ts">
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import { language, t } from '$lib/i18n';

	const content = {
		en: {
			title: 'Red-Black Tree',
			excerpt: 'A complete Red-Black Tree implementation with an interactive web interface for insertion, deletion, search, and visualization.',
			body: `## Description

This project provides a full **Red-Black Tree** implementation along with a web-based
visualizer. It combines the data structure itself with an interface that allows users to insert,
delete, and search values interactively while observing how the tree preserves its balancing rules.

## Team Members

- Steve Andy Ildefonso Santos **[stiffis](https://github.com/stiffis)**
- Bladimir Alferez Vicente **[bladimirAlfer](https://github.com/bladimirAlfer)**

## Project Structure

\`\`\`
project-red-black-tree/
├── assets/
│   ├── css/
│   └── js/
├── rbt_operations/
│   ├── css/
│   ├── js/
│   │   ├── RedBlack.js
│   │   └── lib/
│   └── redblack.html
├── redblack_tree/
│   ├── RedBlackNode.js
│   ├── RedBlackTree.js
│   └── index.js
├── LICENSE
└── README.md
\`\`\`

## File Structure

### \`redblack_tree/\`

#### \`RedBlackNode.js\`

Contains the \`RedBlackNode\` class, which represents a single node in the Red-Black Tree.

**Properties:**
- \`data\`: value stored in the node
- \`left\`: reference to the left child
- \`right\`: reference to the right child
- \`parent\`: reference to the parent node
- \`color\`: node color (\`RED\` or \`BLACK\`)
- \`isNullLeaf\`: indicates whether the node is a null leaf

**Main methods:**
- \`isLeftChild()\`
- \`isRightChild()\`
- \`getSibling()\`
- \`getUncle()\`
- \`getGrandparent()\`
- \`isRed()\`
- \`isBlack()\`
- \`setColor(color)\`

#### \`RedBlackTree.js\`

Contains the \`RedBlackTree\` class, which implements the Red-Black Tree data structure.

**Properties:**
- \`root\`: root node
- \`nullLeaf\`: special node representing null leaves

**Main methods:**
- \`insert(data)\`
- \`fixInsertion(node)\`
- \`rotateLeft(node)\`
- \`rotateRight(node)\`

#### \`index.js\`

Exports both classes to simplify imports.

### \`rbt_operations/\`

#### \`redblack.html\`

Interactive web interface used to visualize and manipulate the Red-Black Tree.

**Features:**
- Graphical tree visualization
- Insert, delete, and search operations
- Animation controls
- Explanatory comments for each operation

#### \`js/\`

Contains the visualization and animation logic:
- **RedBlack.js**: visualization-specific implementation
- **lib/**: animation libraries and graphic object handling

## Red-Black Tree Properties

1. **Color property**: every node is either red or black.
2. **Root property**: the root is always black.
3. **Leaf property**: all NIL leaves are black.
4. **Red node property**: if a node is red, both children must be black.
5. **Black path property**: every simple path from a node to its descendant leaves
   contains the same number of black nodes.

## Usage

### Basic implementation

\`\`\`javascript
import { RedBlackTree } from './redblack_tree/index.js';

const tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
\`\`\`

### Interactive visualization

1. Open \`rbt_operations/redblack.html\` in a browser.
2. Use the controls to insert, delete, or search for elements.
3. Watch the animations that show how the tree preserves its properties.

## Demonstrations

### 1. Insertion

![Insertion demo](https://github.com/user-attachments/assets/75354e6a-800d-4612-9730-86f482f70c91)

When you press **Insert**, the new node appears in red and is recolored or
rotated according to the tree rules until the structure becomes valid again.

### 2. Deletion

![Deletion demo](https://github.com/user-attachments/assets/685b112f-634b-46cc-8adf-161eabdeefe3)

When you press **Delete**, the target node is highlighted, removed, and the tree
is rebalanced with recoloring and rotations.

### 3. Search

![Search demo](https://github.com/user-attachments/assets/35087500-1864-4d5c-b164-460780cef32f)

When you press **Search**, the traversal path is highlighted step by step and the
matching node is marked in blue.

### 4. Tree print

![Tree print demo](https://github.com/user-attachments/assets/b14b2c8b-0a4e-4dfc-98cd-bc52efa54f4d)

When you press **Print**, the tree is traversed in order and the values are
displayed in the lower section of the interface.

## Technologies Used

- **JavaScript ES6+**: data structure implementation
- **HTML5**: web interface structure
- **CSS3**: styling and responsive layout
- **Canvas API**: tree rendering
- **jQuery**: DOM manipulation and animations

## Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/stiffis/project-red-black-tree.git

# Move into the project directory
cd project-red-black-tree

# Open the visualization in the browser
open rbt_operations/redblack.html
\`\`\`

## Complexity

- **Insertion**: O(log n)
- **Deletion**: O(log n)
- **Search**: O(log n)
- **Space**: O(n)

## Contributions

Contributions are welcome. Please:

1. Fork the project
2. Create a feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push your branch (\`git push origin feature/AmazingFeature\`)
5. Open a pull request

## License

This project is licensed under **GPL v3**. See the \`LICENSE\` file for more details.

## References

- [Introduction to Algorithms - Cormen, Leiserson, Rivest, Stein](https://mitpress.mit.edu/books/introduction-algorithms)
- [Red-Black Trees - Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
`
		},
		es: {
			title: 'Árbol Rojo-Negro',
			excerpt: 'Una implementación completa de Árbol Rojo-Negro con una interfaz web interactiva para inserción, eliminación, búsqueda y visualización.',
			body: `## Descripción

Este proyecto proporciona una implementación completa de **Árbol Rojo-Negro** junto con un
visualizador basado en web. Combina la estructura de datos en sí con una interfaz que permite a los usuarios insertar,
eliminar y buscar valores de forma interactiva mientras observan cómo el árbol preserva sus reglas de equilibrado.

## Miembros del equipo

- Steve Andy Ildefonso Santos **[stiffis](https://github.com/stiffis)**
- Bladimir Alferez Vicente **[bladimirAlfer](https://github.com/bladimirAlfer)**

## Estructura del proyecto

\`\`\`
project-red-black-tree/
├── assets/
│   ├── css/
│   └── js/
├── rbt_operations/
│   ├── css/
│   ├── js/
│   │   ├── RedBlack.js
│   │   └── lib/
│   └── redblack.html
├── redblack_tree/
│   ├── RedBlackNode.js
│   ├── RedBlackTree.js
│   └── index.js
├── LICENSE
└── README.md
\`\`\`

## Estructura de archivos

### \`redblack_tree/\`

#### \`RedBlackNode.js\`

Contiene la clase \`RedBlackNode\`, que representa un solo nodo en el Árbol Rojo-Negro.

**Propiedades:**
- \`data\`: valor almacenado en el nodo
- \`left\`: referencia al hijo izquierdo
- \`right\`: referencia al hijo derecho
- \`parent\`: referencia al nodo padre
- \`color\`: color del nodo (\`RED\` o \`BLACK\`)
- \`isNullLeaf\`: indica si el nodo es una hoja nula

**Métodos principales:**
- \`isLeftChild()\`
- \`isRightChild()\`
- \`getSibling()\`
- \`getUncle()\`
- \`getGrandparent()\`
- \`isRed()\`
- \`isBlack()\`
- \`setColor(color)\`

#### \`RedBlackTree.js\`

Contiene la clase \`RedBlackTree\`, que implementa la estructura de datos Árbol Rojo-Negro.

**Propiedades:**
- \`root\`: nodo raíz
- \`nullLeaf\`: nodo especial que representa las hojas nulas

**Métodos principales:**
- \`insert(data)\`
- \`fixInsertion(node)\`
- \`rotateLeft(node)\`
- \`rotateRight(node)\`

#### \`index.js\`

Exporta ambas clases para simplificar las importaciones.

### \`rbt_operations/\`

#### \`redblack.html\`

Interfaz web interactiva utilizada para visualizar y manipular el Árbol Rojo-Negro.

**Características:**
- Visualización gráfica del árbol
- Operaciones de inserción, eliminación y búsqueda
- Controles de animación
- Comentarios explicativos para cada operación

#### \`js/\`

Contiene la lógica de visualización y animación:
- **RedBlack.js**: implementación específica de visualización
- **lib/**: bibliotecas de animación y manejo de objetos gráficos

## Propiedades del Árbol Rojo-Negro

1. **Propiedad del color**: cada nodo es rojo o negro.
2. **Propiedad de la raíz**: la raíz siempre es negra.
3. **Propiedad de las hojas**: todas las hojas NIL son negras.
4. **Propiedad del nodo rojo**: si un nodo es rojo, ambos hijos deben ser negros.
5. **Propiedad del camino negro**: cada camino simple desde un nodo hasta sus hojas descendientes
   contiene el mismo número de nodos negros.

## Uso

### Implementación básica

\`\`\`javascript
import { RedBlackTree } from './redblack_tree/index.js';

const tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
\`\`\`

### Visualización interactiva

1. Abre \`rbt_operations/redblack.html\` en el navegador.
2. Usa los controles para insertar, eliminar o buscar elementos.
3. Observa las animaciones que muestran cómo el árbol preserva sus propiedades.

## Demostraciones

### 1. Inserción

![Demostración de inserción](https://github.com/user-attachments/assets/75354e6a-800d-4612-9730-86f482f70c91)

Cuando presionas **Insertar**, el nuevo nodo aparece en rojo y se vuelve a colorear o
rotar según las reglas del árbol hasta que la estructura vuelve a ser válida.

### 2. Eliminación

![Demostración de eliminación](https://github.com/user-attachments/assets/685b112f-634b-46cc-8adf-161eabdeefe3)

Cuando presionas **Eliminar**, el nodo objetivo se resalta, se elimina y el árbol
se reequilibra con recoloreado y rotaciones.

### 3. Búsqueda

![Demostración de búsqueda](https://github.com/user-attachments/assets/35087500-1864-4d5c-b164-460780cef32f)

Cuando presionas **Buscar**, el camino de recorrido se resalta paso a paso y el
nodo coincidente se marca en azul.

### 4. Impresión del árbol

![Demostración de impresión](https://github.com/user-attachments/assets/b14b2c8b-0a4e-4dfc-98cd-bc52efa54f4d)

Cuando presionas **Imprimir**, el árbol se recorre en orden y los valores se
muestran en la sección inferior de la interfaz.

## Tecnologías utilizadas

- **JavaScript ES6+**: implementación de la estructura de datos
- **HTML5**: estructura de la interfaz web
- **CSS3**: estilos y diseño responsivo
- **Canvas API**: renderizado del árbol
- **jQuery**: manipulación del DOM y animaciones

## Instalación

\`\`\`bash
# Clonar el repositorio
git clone https://github.com/stiffis/project-red-black-tree.git

# Entrar al directorio del proyecto
cd project-red-black-tree

# Abrir la visualización en el navegador
open rbt_operations/redblack.html
\`\`\`

## Complejidad

- **Inserción**: O(log n)
- **Eliminación**: O(log n)
- **Búsqueda**: O(log n)
- **Espacio**: O(n)

## Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del proyecto
2. Crea una rama de característica (\`git checkout -b feature/AmazingFeature\`)
3. Confirma tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Empuja tu rama (\`git push origin feature/AmazingFeature\`)
5. Abre un pull request

## Licencia

Este proyecto está licenciado bajo **GPL v3**. Ver el archivo \`LICENSE\` para más detalles.

## Referencias

- [Introduction to Algorithms - Cormen, Leiserson, Rivest, Stein](https://mitpress.mit.edu/books/introduction-algorithms)
- [Red-Black Trees - Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
`
		}
	};

	$: currentContent = content[$language];
</script>

<svelte:head>
	<title>{currentContent.title} - Caffeine Overflow</title>
	<meta name="description" content={currentContent.excerpt} />
</svelte:head>

<div class="mx-auto max-w-4xl space-y-10 px-4 py-12">
	<header class="space-y-4 text-center">
		<p class="inline-flex items-center gap-2 font-semibold tracking-wide text-red-800 uppercase">
			<img src="/images/rbt.svg" alt="Red-Black Tree logo" class="h-10" />
			{currentContent.title}
		</p>
		<h1 class="text-4xl font-bold text-gray-900">{currentContent.title}</h1>
		<p class="text-lg text-gray-600">{currentContent.excerpt}</p>
	</header>

	<div class="flex flex-wrap justify-center gap-2">
		<img
			src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
			alt="JavaScript"
		/>
		<img
			src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
			alt="HTML5"
		/>
		<img
			src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
			alt="CSS3"
		/>
		<img
			src="https://img.shields.io/badge/License-GPL%20v3-blue.svg?style=for-the-badge"
			alt="GPL v3 license"
		/>
	</div>

	<MarkdownRenderer content={currentContent.body} />
</div>
