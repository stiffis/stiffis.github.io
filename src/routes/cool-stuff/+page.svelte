<script>
	import { Fa } from 'svelte-fa';
	import {
		faHtml5,
		faCss3Alt,
		faJs,
		faReact,
		faVuejs,
		faAngular,
		faNode,
		faPython,
		faGit,
		faDocker,
		faNpm,
		faGithub,
		faJava,
		faPhp
	} from '@fortawesome/free-brands-svg-icons';
	import {
		faCode,
		faCogs,
		faDatabase,
		faRobot,
		faTerminal,
		faBrain,
		faChartLine,
		faGraduationCap,
		faLaptopCode,
		faCube,
		faServer,
		faCodeBranch,
		faFileCode,
		faTools
	} from '@fortawesome/free-solid-svg-icons';
</script>

<svelte:head>
	<title>Cool Stuff - Caffeine Overflow</title>
	<meta name="description" content="Proyectos, herramientas y cosas geniales que quiero compartir" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">Cool Stuff</h1>
		<p class="text-lg text-gray-600">Proyectos, herramientas y cosas geniales que quiero compartir</p>
	</header>

	<!-- Sección: Desarrollo Web -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 mb-6">Desarrollo Web</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- HTML5 -->
			<div class="bg-orange-100 rounded-lg aspect-[3/4] hover:bg-orange-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faHtml5} class="text-orange-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-orange-800">HTML5</span>
			</div>
			<!-- CSS3 -->
			<div class="bg-blue-100 rounded-lg aspect-[3/4] hover:bg-blue-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faCss3Alt} class="text-blue-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-blue-800">CSS3</span>
			</div>
			<!-- JavaScript -->
			<div class="bg-yellow-100 rounded-lg aspect-[3/4] hover:bg-yellow-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faJs} class="text-yellow-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-yellow-800">JavaScript</span>
			</div>
			<!-- React -->
			<div class="bg-cyan-100 rounded-lg aspect-[3/4] hover:bg-cyan-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faReact} class="text-cyan-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-cyan-800">React</span>
			</div>
			<!-- Vue.js -->
			<div class="bg-green-100 rounded-lg aspect-[3/4] hover:bg-green-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faVuejs} class="text-green-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-green-800">Vue.js</span>
			</div>
			<!-- Angular -->
			<div class="bg-red-100 rounded-lg aspect-[3/4] hover:bg-red-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faAngular} class="text-red-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-red-800">Angular</span>
			</div>
			<!-- Svelte -->
			<div class="bg-orange-100 rounded-lg aspect-[3/4] hover:bg-orange-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faCode} class="text-orange-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-orange-800">Svelte</span>
			</div>
			<!-- Node.js -->
			<div class="bg-green-100 rounded-lg aspect-[3/4] hover:bg-green-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faNode} class="text-green-700 text-4xl mb-2" />
				<span class="text-sm font-semibold text-green-800">Node.js</span>
			</div>
		</div>
	</section>

	<!-- Sección: Machine Learning -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 mb-6">Machine Learning</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- Python -->
			<div class="bg-blue-100 rounded-lg aspect-[3/4] hover:bg-blue-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faPython} class="text-blue-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-blue-800">Python</span>
			</div>
			<!-- TensorFlow -->
			<div class="bg-orange-100 rounded-lg aspect-[3/4] hover:bg-orange-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faBrain} class="text-orange-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-orange-800">TensorFlow</span>
			</div>
			<!-- PyTorch -->
			<div class="bg-red-100 rounded-lg aspect-[3/4] hover:bg-red-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faRobot} class="text-red-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-red-800">PyTorch</span>
			</div>
			<!-- Jupyter -->
			<div class="bg-yellow-100 rounded-lg aspect-[3/4] hover:bg-yellow-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faLaptopCode} class="text-yellow-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-yellow-800">Jupyter</span>
			</div>
			<!-- Data Analytics -->
			<div class="bg-green-100 rounded-lg aspect-[3/4] hover:bg-green-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faChartLine} class="text-green-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-green-800">Analytics</span>
			</div>
			<!-- Deep Learning -->
			<div class="bg-purple-100 rounded-lg aspect-[3/4] hover:bg-purple-200 transition-colors cursor-pointer flex flex-col items-center justify-center p-4">
				<Fa icon={faBrain} class="text-purple-600 text-4xl mb-2" />
				<span class="text-sm font-semibold text-purple-800">Deep Learning</span>
			</div>
		</div>
	</section>

	<!-- Sección: Herramientas y Utilidades -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 mb-6">Herramientas y Utilidades</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- Rectángulo 1 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 2 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 3 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 4 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 5 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 6 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 7 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 8 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 9 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 10 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
		</div>
	</section>

	<!-- Sección: Proyectos Universitarios -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 mb-6">Proyectos Universitarios</h2>
		<div class="grid grid-cols-4 gap-4">
			<!-- Rectángulo 1 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-black transition-colors cursor-pointer"></div>
			<!-- Rectángulo 2 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 3 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
			<!-- Rectángulo 4 -->
			<div class="bg-gray-200 rounded-lg aspect-[3/4] hover:bg-gray-300 transition-colors cursor-pointer"></div>
		</div>
	</section>

</div>
