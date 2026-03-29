<script lang="ts">
	import MarkdownCard from '$lib/components/MarkdownCard.svelte';
</script>

<svelte:head>
	<title>Red-Black Tree Implementation - Caffeine Overflow</title>
	<meta
		name="description"
		content="Complete Red-Black Tree implementation with an interactive web visualization."
	/>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-10 px-4 py-12">
	<header class="space-y-4 text-center">
		<p class="inline-flex items-center gap-2 font-semibold tracking-wide text-red-800 uppercase">
			<img src="/images/rbt.svg" alt="Red-Black Tree logo" class="h-10" />
			Red-Black Tree
		</p>
		<h1 class="text-4xl font-bold text-gray-900">Red-Black Tree Implementation</h1>
		<p class="text-lg text-gray-600">
			A complete Red-Black Tree implementation with an interactive web interface for insertion,
			deletion, search, and visualization.
		</p>
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

	<MarkdownCard>
		<h2>Description</h2>
		<p>
			This project provides a full <strong>Red-Black Tree</strong> implementation along with a web-based
			visualizer. It combines the data structure itself with an interface that allows users to insert,
			delete, and search values interactively while observing how the tree preserves its balancing rules.
		</p>

		<h2>Team Members</h2>
		<ul>
			<li>
				Steve Andy Ildefonso Santos <strong><a href="https://github.com/stiffis">stiffis</a></strong
				>
			</li>
			<li>
				Bladimir Alferez Vicente <strong
					><a href="https://github.com/bladimirAlfer">bladimirAlfer</a></strong
				>
			</li>
		</ul>

		<h2>Project Structure</h2>
		<pre><code
				>project-red-black-tree/
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
└── README.md</code
			></pre>

		<h2>File Structure</h2>

		<h3><code>redblack_tree/</code></h3>
		<h4><code>RedBlackNode.js</code></h4>
		<p>
			Contains the <code>RedBlackNode</code> class, which represents a single node in the Red-Black Tree.
		</p>
		<p><strong>Properties:</strong></p>
		<ul>
			<li><code>data</code>: value stored in the node</li>
			<li><code>left</code>: reference to the left child</li>
			<li><code>right</code>: reference to the right child</li>
			<li><code>parent</code>: reference to the parent node</li>
			<li><code>color</code>: node color (<code>RED</code> or <code>BLACK</code>)</li>
			<li><code>isNullLeaf</code>: indicates whether the node is a null leaf</li>
		</ul>
		<p><strong>Main methods:</strong></p>
		<ul>
			<li><code>isLeftChild()</code></li>
			<li><code>isRightChild()</code></li>
			<li><code>getSibling()</code></li>
			<li><code>getUncle()</code></li>
			<li><code>getGrandparent()</code></li>
			<li><code>isRed()</code></li>
			<li><code>isBlack()</code></li>
			<li><code>setColor(color)</code></li>
		</ul>

		<h4><code>RedBlackTree.js</code></h4>
		<p>
			Contains the <code>RedBlackTree</code> class, which implements the Red-Black Tree data structure.
		</p>
		<p><strong>Properties:</strong></p>
		<ul>
			<li><code>root</code>: root node</li>
			<li><code>nullLeaf</code>: special node representing null leaves</li>
		</ul>
		<p><strong>Main methods:</strong></p>
		<ul>
			<li><code>insert(data)</code></li>
			<li><code>fixInsertion(node)</code></li>
			<li><code>rotateLeft(node)</code></li>
			<li><code>rotateRight(node)</code></li>
		</ul>

		<h4><code>index.js</code></h4>
		<p>Exports both classes to simplify imports.</p>

		<h3><code>rbt_operations/</code></h3>
		<h4><code>redblack.html</code></h4>
		<p>Interactive web interface used to visualize and manipulate the Red-Black Tree.</p>
		<p><strong>Features:</strong></p>
		<ul>
			<li>Graphical tree visualization</li>
			<li>Insert, delete, and search operations</li>
			<li>Animation controls</li>
			<li>Explanatory comments for each operation</li>
		</ul>

		<h4><code>js/</code></h4>
		<p>Contains the visualization and animation logic:</p>
		<ul>
			<li><strong>RedBlack.js</strong>: visualization-specific implementation</li>
			<li><strong>lib/</strong>: animation libraries and graphic object handling</li>
		</ul>

		<h2>Red-Black Tree Properties</h2>
		<ol>
			<li><strong>Color property</strong>: every node is either red or black.</li>
			<li><strong>Root property</strong>: the root is always black.</li>
			<li><strong>Leaf property</strong>: all NIL leaves are black.</li>
			<li><strong>Red node property</strong>: if a node is red, both children must be black.</li>
			<li>
				<strong>Black path property</strong>: every simple path from a node to its descendant leaves
				contains the same number of black nodes.
			</li>
		</ol>

		<h2>Usage</h2>
		<h3>Basic implementation</h3>
		<pre><code
				>import &#123; RedBlackTree &#125; from './redblack_tree/index.js';

const tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);</code
			></pre>

		<h3>Interactive visualization</h3>
		<ol>
			<li>Open <code>rbt_operations/redblack.html</code> in a browser.</li>
			<li>Use the controls to insert, delete, or search for elements.</li>
			<li>Watch the animations that show how the tree preserves its properties.</li>
		</ol>

		<h2>Demonstrations</h2>
		<h3>1. Insertion</h3>
		<p>
			<img
				src="https://github.com/user-attachments/assets/75354e6a-800d-4612-9730-86f482f70c91"
				alt="Insertion demo"
			/>
		</p>
		<p>
			When you press <strong>Insert</strong>, the new node appears in red and is recolored or
			rotated according to the tree rules until the structure becomes valid again.
		</p>

		<h3>2. Deletion</h3>
		<p>
			<img
				src="https://github.com/user-attachments/assets/685b112f-634b-46cc-8adf-161eabdeefe3"
				alt="Deletion demo"
			/>
		</p>
		<p>
			When you press <strong>Delete</strong>, the target node is highlighted, removed, and the tree
			is rebalanced with recoloring and rotations.
		</p>

		<h3>3. Search</h3>
		<p>
			<img
				src="https://github.com/user-attachments/assets/35087500-1864-4d5c-b164-460780cef32f"
				alt="Search demo"
			/>
		</p>
		<p>
			When you press <strong>Search</strong>, the traversal path is highlighted step by step and the
			matching node is marked in blue.
		</p>

		<h3>4. Tree print</h3>
		<p>
			<img
				src="https://github.com/user-attachments/assets/b14b2c8b-0a4e-4dfc-98cd-bc52efa54f4d"
				alt="Tree print demo"
			/>
		</p>
		<p>
			When you press <strong>Print</strong>, the tree is traversed in order and the values are
			displayed in the lower section of the interface.
		</p>

		<h2>Technologies Used</h2>
		<ul>
			<li><strong>JavaScript ES6+</strong>: data structure implementation</li>
			<li><strong>HTML5</strong>: web interface structure</li>
			<li><strong>CSS3</strong>: styling and responsive layout</li>
			<li><strong>Canvas API</strong>: tree rendering</li>
			<li><strong>jQuery</strong>: DOM manipulation and animations</li>
		</ul>

		<h2>Installation</h2>
		<pre><code
				># Clone the repository
git clone https://github.com/stiffis/project-red-black-tree.git

# Move into the project directory
cd project-red-black-tree

# Open the visualization in the browser
open rbt_operations/redblack.html</code
			></pre>

		<h2>Complexity</h2>
		<ul>
			<li><strong>Insertion</strong>: O(log n)</li>
			<li><strong>Deletion</strong>: O(log n)</li>
			<li><strong>Search</strong>: O(log n)</li>
			<li><strong>Space</strong>: O(n)</li>
		</ul>

		<h2>Contributions</h2>
		<p>Contributions are welcome. Please:</p>
		<ol>
			<li>Fork the project</li>
			<li>Create a feature branch (<code>git checkout -b feature/AmazingFeature</code>)</li>
			<li>Commit your changes (<code>git commit -m 'Add some AmazingFeature'</code>)</li>
			<li>Push your branch (<code>git push origin feature/AmazingFeature</code>)</li>
			<li>Open a pull request</li>
		</ol>

		<h2>License</h2>
		<p>
			This project is licensed under <strong>GPL v3</strong>. See the <code>LICENSE</code> file for more
			details.
		</p>

		<h2>References</h2>
		<ul>
			<li>
				<a href="https://mitpress.mit.edu/books/introduction-algorithms"
					>Introduction to Algorithms - Cormen, Leiserson, Rivest, Stein</a
				>
			</li>
			<li>
				<a href="https://en.wikipedia.org/wiki/Red%E2%80%93black_tree"
					>Red-Black Trees - Wikipedia</a
				>
			</li>
		</ul>
	</MarkdownCard>
</div>
