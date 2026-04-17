<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import { language } from '$lib/i18n';

	const content = {
		en: {
			title: 'The Inspiration of Neural Networks from the Brain',
			excerpt: 'A translated and expanded reflection on the shift from cognitivism to connectionism and its impact on modern AI.',
			body: `## Introduction

The history of neural networks can be read as a shift in how we model the mind. This post translates and expands my original Spanish notes about that transition: from **cognitivism**, with explicit symbolic rules, to **connectionism**, with distributed learning systems inspired by neural behavior.

Two major models shape this debate:

- **Cognitivism**: mind as symbolic processing, similar to a program manipulating clear rules.
- **Connectionism**: mind as a distributed adaptive system where knowledge emerges from many interacting units.

The first offered precision and structure. The second offered flexibility and tolerance to ambiguity and error.

## The Rise of Cognitivism

In the 1950s, cognitivism grew with the ambition to formalize thought. Mental activity was often described as symbol manipulation under explicit logical rules, very close to the architecture of early computing.

One landmark example is the **General Problem Solver** by Alan Newell and Herbert Simon, which represented reasoning through explicit rule systems. This approach had a strong initial impact but showed limitations in tasks such as:

- robust pattern recognition,
- ambiguous or noisy data processing,
- human-like tolerance for uncertainty.

![Diagram related to early cognitivist framing](/images/nnc-cognitivism-gps.png)

## The Birth of Connectionism

In the 1980s, connectionism reintroduced brain-inspired ideas into mainstream cognitive modeling. Instead of explicit symbolic programs, it framed cognition as interaction among many simple units connected in a network.

David Rumelhart and James McClelland, through *Parallel Distributed Processing*, helped establish this perspective and its practical learning mechanisms, especially backpropagation.

In this view, learning means adjusting connection strengths from error signals over repeated exposure.

![Diagram related to the rise of connectionism](/images/nnc-connectionism-pdp.png)

## Systematicity of Cognition: A Core Debate

Systematicity asks whether understanding one structured expression implies understanding related expressions. For example, if someone can process "Juan loves María," can they also process "María loves Juan"?

- **Cognitivist answer**: systematicity comes from reusable symbolic rules operating over explicit structure.
- **Connectionist answer**: systematic behavior can emerge from distributed learning when networks capture regularities in data across enough examples.

This remains a serious philosophical and technical discussion.

## Key Differences at a Glance

- **Cognitivism**
  - clear symbolic representations and explicit rules,
  - strong for formal reasoning and compositional logic.

- **Connectionism**
  - distributed adaptive representations,
  - strong for perception, pattern recognition, and graded generalization.

## Was the Shift Necessary?

The move toward connectionism reflected a need to model phenomena that strict symbolic systems struggled with. By allowing graded behavior, error tolerance, and statistical learning, connectionist methods opened the path to modern machine learning and deep learning.

## Extra Context: Why This Matters Today

Modern AI systems still inherit this tension:

- Deep neural models excel at large-scale perception and representation learning.
- Symbolic methods still provide interpretability, explicit control, and compositional guarantees.

Because of this, many current research directions explore **hybrid neuro-symbolic systems**, aiming to combine the adaptability of connectionism with the structure of symbolic reasoning.

In other words, the old debate is not over—it evolved.

## References

- Newell, A., Shaw, J. C., & Simon, H. A. (1959). *Report on a General Problem-Solving Program*. In *Proceedings of the International Conference on Information Processing*.
- Rumelhart, D. E., McClelland, J. L., & PDP Research Group. (1986). *Parallel Distributed Processing: Explorations in the Microstructure of Cognition* (Vols. 1–2). MIT Press.
- McClelland, J. L., Rumelhart, D. E., & PDP Research Group. (1986). The appeal of parallel distributed processing. In *Parallel Distributed Processing* (Vol. 1). MIT Press.
- Fodor, J. A., & Pylyshyn, Z. W. (1988). Connectionism and cognitive architecture: A critical analysis. *Cognition*, 28(1–2), 3–71.
- Smolensky, P. (1988). On the proper treatment of connectionism. *Behavioral and Brain Sciences*, 11(1), 1–23.`
		},
		es: {
			title: 'La Inspiración de las Redes Neuronales a Partir del Cerebro',
			excerpt: 'Una reflexión traducida y ampliada sobre el tránsito del cognitivismo al conexionismo y su impacto en la IA moderna.',
			body: `## Introducción

La historia de las redes neuronales puede leerse como un cambio en cómo modelamos la mente. Esta publicación traduce y expande mis notas originales en español sobre esa transición: del **cognitivismo**, con reglas simbólicas explícitas, al **conexionismo**, con sistemas de aprendizaje distribuido inspirados en el comportamiento neuronal.

Dos modelos principales moldean este debate:

- **Cognitivismo**: la mente como procesamiento simbólico, similar a un programa que manipula reglas claras.
- **Conexionismo**: la mente como un sistema adaptativo distribuido donde el conocimiento emerge de muchas unidades que interactúan.

El primero ofrecía precisión y estructura. El segundo ofrecía flexibilidad y tolerancia a la ambigüedad y el error.

## El Auge del Cognitivismo

En la década de 1950, el cognitivismo creció con la ambición de formalizar el pensamiento. La actividad mental a menudo se describía como manipulación de símbolos bajo reglas lógicas explícitas, muy cerca de la arquitectura de la computación temprana.

Un ejemplo emblemático es el **General Problem Solver** de Alan Newell y Herbert Simon, que representaba el razonamiento a través de sistemas de reglas explícitas. Este enfoque tuvo un fuerte impacto inicial pero mostró limitaciones en tareas como:

- reconocimiento robusto de patrones,
- procesamiento de datos ambiguos o ruidosos,
- tolerancia humana a la incertidumbre.

![Diagrama relacionado con el enfoque cognitivista temprano](/images/nnc-cognitivism-gps.png)

## El Nacimiento del Conexionismo

En la década de 1980, el conexionismo reintrodujo ideas inspiradas en el cerebro en el modelamiento cognitivo convencional. En lugar de programas simbólicos explícitos, enmarcó la cognición como la interacción entre muchas unidades simples conectadas en una red.

David Rumelhart y James McClelland, a través de *Parallel Distributed Processing*, ayudaron a establecer esta perspectiva y sus mecanismos prácticos de aprendizaje, especialmente la retropropagación.

En esta vista, aprender significa ajustar las fuerzas de conexión a partir de señales de error a través de exposición repetida.

![Diagrama relacionado con el auge del conexionismo](/images/nnc-connectionism-pdp.png)

## Sistematicidad de la Cognición: Un Debate Central

La sistematicidad pregunta si entender una expresión estructurada implica entender expresiones relacionadas. Por ejemplo, si alguien puede procesar "Juan ama a María", ¿también puede procesar "María ama a Juan"?

- **Respuesta cognitivista**: la sistematicidad proviene de reglas simbólicas reutilizables que operan sobre estructuras explícitas.
- **Respuesta conexionista**: el comportamiento sistemático puede emerger del aprendizaje distribuido cuando las redes capturan regularidades en los datos a través de suficientes ejemplos.

Esto sigue siendo una discusión filosófica y técnica seria.

## Diferencias Clave a Simple Vista

- **Cognitivismo**
  - representaciones simbólicas claras y reglas explícitas,
  - fuerte para razonamiento formal y lógica composicional.

- **Conexionismo**
  - representaciones adaptativas distribuidas,
  - fuerte para percepción, reconocimiento de patrones y generalización gradual.

## ¿Fue Necesario el Cambio?

El movimiento hacia el conexionismo reflejó la necesidad de modelar fenómenos con los que los sistemas simbólicos estrictos luchaban. Al permitir comportamiento gradual, tolerancia al error y aprendizaje estadístico, los métodos conexionistas abrieron el camino al aprendizaje automático moderno y el aprendizaje profundo.

## Contexto Extra: Por Qué Esto Importa Hoy

Los sistemas modernos de IA aún heredan esta tensión:

- Los modelos neuronales profundos sobresalen en aprendizaje de percepción y representación a gran escala.
- Los métodos simbólicos aún proporcionan interpretabilidad, control explícito y garantías composicionales.

Por esto, muchas direcciones de investigación actuales exploran **sistemas neuro-simbólicos híbridos**, apuntando a combinar la adaptabilidad del conexionismo con la estructura del razonamiento simbólico.

En otras palabras, el viejo debate no terminó — evolucionó.

## Referencias

- Newell, A., Shaw, J. C., & Simon, H. A. (1959). *Report on a General Problem-Solving Program*. In *Proceedings of the International Conference on Information Processing*.
- Rumelhart, D. E., McClelland, J. L., & PDP Research Group. (1986). *Parallel Distributed Processing: Explorations in the Microstructure of Cognition* (Vols. 1–2). MIT Press.
- McClelland, J. L., Rumelhart, D. E., & PDP Research Group. (1986). The appeal of parallel distributed processing. In *Parallel Distributed Processing* (Vol. 1). MIT Press.
- Fodor, J. A., & Pylyshyn, Z. W. (1988). Connectionism and cognitive architecture: A critical analysis. *Cognition*, 28(1–2), 3–71.
- Smolensky, P. (1988). On the proper treatment of connectionism. *Behavioral and Brain Sciences*, 11(1), 1–23.`
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
		<h1 class="text-4xl font-bold text-gray-900">{currentContent.title}</h1>
		<p class="mx-auto max-w-3xl text-lg text-gray-600">
			{currentContent.excerpt}
		</p>
	</header>

	<MarkdownRenderer content={currentContent.body} />
</div>
