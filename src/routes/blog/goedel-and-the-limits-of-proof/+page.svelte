<script>
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import { language } from '$lib/i18n';

	const content = {
		en: {
			title: 'Gödel and the Limits of What Can Be Proven',
			excerpt: 'On incompleteness, self-reference, and why no system can prove its own consistency.',
			body: `## A Scene: Hilbert in 1900

David Hilbert walks onto the stage of the International Congress of Mathematicians in Paris. It is 1900. The previous century was a mess for mathematics — Gauss, Riemann, Cauchy — giants who built cathedrals on sand. Hilbert is convinced he can fix this.

Not just solve individual problems — Hilbert wants to prove that *all* of mathematics is consistent, complete, and decidable.

His dream: a formal system. Something like a symbol game with clear rules. No intuition, no ambiguity, no "well, this *feels* right". If you can prove something within the system, it is true. If you cannot, it is false. Nothing in between.

It is a beautiful vision. And it is deeply human.

## What Is a Formal System (Without the Formalism)

Think of it this way: imagine you have a building blocks set for kids — just blocks, no instruction diagrams. The game has pieces (symbols) and fitting rules (rules of inference). You can build things by combining pieces according to the rules. Some combinations are valid, others are not.

Classical mathematics works like this: you start with axioms (initial pieces assumed to be true), apply rules of logic, and build theorems. Hilbert's dream was that *every* true theorem in mathematics could be built this way — starting from OBVIOUS axioms, following OBVIOUS rules, arriving at EVERY truth.

Russell and Whitehead spent 362 pages proving that 1+1=2 using this method. *Principia Mathematica*. The most ambitious project in the history of logic.

## The Crack: Russell's Paradox

In 1901, Russell is working on *Principles of Mathematics* when he finds something uncomfortable.

Consider the set of all sets that do not contain themselves.

Does this set contain itself? If yes, then it shouldn't (because it only contains sets that don't contain themselves). If no, then it should (because... uh).

It is like the barber of a town who shaves everyone who does not shave themselves. Who shaves the barber?

Russell wrote to Frege — whose formal system was almost finished — and told him, basically: "Your game has a crack."

Frege never fully recovered.

## Gödel Walks Into the Room

Kurt Gödel was Austrian, slender, and slightly paranoid. In 1931 he published a 25-page article that changed everything.

The core idea (in human terms, not formal ones):

A formal system powerful enough — one that can describe the arithmetic of natural numbers — has two unavoidable limitations:

1. **Incomplete**: There are true statements that the system cannot prove.
2. **Unable to prove itself**: If the system claims "this system is consistent", that claim cannot be proven *within* the system.

The proof uses something brilliant: Gödel constructs a statement that essentially says:

> "This statement cannot be proven within this system."

If it is false, the system proves lies — bad. If it is true, it is provable, but the statement says it cannot be proven — contradiction. So there is only one option left: the statement is true but *unprovable* within the system.

Gödel essentially forced the system to talk about itself — like how Russell's paradox breaks naive set theory by referring to itself.

## What This Means

It is not that mathematicians are bad at their jobs. It is not that techniques are missing. It is a *structural* limitation. Like Turing's incompleteness theorem (1936): there are problems no machine can solve. Gödel proved the analogous thing for proof systems: there are truths no formal system can reach.

This extends beyond mathematics:

- **Philosophy of language**: can an axiomatic system capture meaning, or does something always escape?
- **Artificial intelligence**: can a machine reason about all truths? Gödel says no.
- **Your NNC post**: do neural networks "discover" patterns we cannot formalize? Gödel does not forbid it — in fact, he suggests it.

## The Personal Toll

Logicomix shows this well: Russell, Gödel, Cantor — all ended up relatively alone or broken. Cantor ended up in a sanatorium, writing letters to God. Gödel died of starvation because he was convinced he was being poisoned.

Is there something in the search for absolute certainty that consumes those who pursue it?

Or perhaps it is the other way around: perhaps incompleteness is liberating. Not everything can be reduced to symbols and rules. There is something — intuition, understanding, meaning — that escapes.

---

*If you want to go deeper, Logicomix by Apostolos Doxiadis and Christos Papadimitriou tells this whole story as a graphic novel, with Russell as narrator. It is one of those rare books that makes intellectual passion palpable.*

## References

- Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme. *Monatshefte für Mathematik und Physik*, 38, 173–198.
- Hofstadter, D. R. (1979). *Gödel, Escher, Bach: An Eternal Golden Braid*. Basic Books.
- Nagel, E., & Newman, J. R. (1958). *Gödel's Proof*. New York University Press.
- Doxiadis, A., & Papadimitriou, C. H. (2009). *Logicomix: An Epic Search for Truth*. Bloomsbury.`
		},
		es: {
			title: 'Gödel y los Límites de lo Demostrable',
			excerpt: 'Sobre incompletitud, autorreferencia y por qué ningún sistema puede probar su propia consistencia.',
			body: `## Una Escena: Hilbert en 1900

David Hilbert sube al escenario del Congreso Internacional de Matemáticos en París. Es 1900. El siglo anterior fue un desastre para la matemática — Gauss, Riemann, Cauchy — gigantes que construyeron catedrales sobre arena. Hilbert está convencido de que puede arreglar esto.

No solo resolver problemas individuales — Hilbert quiere probar que *toda* la matemática es consistente, completa y decidible.

Su sueño: un sistema formal. Algo así como un juego de símbolos con reglas claras. Sin intuición, sin ambigüedad, sin "bueno, esto *se siente* correcto". Si puedes probar algo dentro del sistema, es verdadero. Si no puedes, es falso. Nada en el medio.

Es una visión hermosa. Y es profundamente humana.

## Qué es un Sistema Formal (Sin el Formalismo)

Piénsalo así: imagina que tienes un juego de construcción para niños — solo bloques, sin diagramas de instrucciones. El juego tiene piezas (símbolos) y reglas de encaje (reglas de inferencia). Puedes construir cosas combinando piezas según las reglas. Algunas combinaciones son válidas, otras no.

La matemática clásica funciona así: empiezas con axiomas (piezas iniciales que se asumen verdaderas), aplicas reglas de lógica, y construyes teoremas. El sueño de Hilbert era que *todo* teorema verdadero de la matemática pudiera construirse así — empezando desde axiomas OBVIOS, siguiendo reglas OBVIAS, llegando a TODA verdad.

Russell y Whitehead se pasaron 362 páginas probando que 1+1=2 con este método. *Principia Mathematica*. El proyecto más ambicioso de la historia de la lógica.

## La Grieta: la Paradoja de Russell

En 1901, Russell está trabajando en *Principles of Mathematics* cuando encuentra algo incómodo.

Considera el conjunto de todos los conjuntos que no se contienen a sí mismos.

¿Contiene este conjunto a sí mismo? Si sí, entonces no debería (porque solo contiene conjuntos que no se contienen). Si no, entonces debería (porque... uh).

Es como el barbero de un pueblo que afeita a todos los que no se afeitan a sí mismos. ¿Quién afeita al barbero?

Russell le escribió a Frege — cuyo sistema formal estaba casi terminado — y le dijo, básicamente: "Tu juego tiene una grieta."

Frege nunca se recuperó del todo.

## Gödel Entra a la Habitación

Kurt Gödel era austríaco, delgado y ligeramente paranoico. En 1931 publicó un artículo de 25 páginas que cambió todo.

La idea central (en términos humanos, no formales):

Un sistema formal suficientemente potente — uno que pueda describir la aritmética de los números naturales — tiene dos limitaciones inevitables:

1. **Incompleto**: Hay enunciados verdaderos que el sistema no puede probar.
2. **Incapaz de probarse a sí mismo**: Si el sistema afirma "este sistema es consistente", esa afirmación no puede ser probada *dentro* del sistema.

La demostración usa algo brillante: Gödel construye un enunciado que esencialmente dice:

> "Este enunciado no puede ser probado dentro de este sistema."

Si es falso, el sistema prueba mentiras. Si es verdadero, es demostrable, pero el enunciado dice que no puede ser probado — contradicción. Entonces solo queda una opción: el enunciado es verdadero pero *indemostrable* dentro del sistema.

Gödel básicamente forzó al sistema a hablar de sí mismo — como cuando la paradoja de Russell rompe la teoría ingenua de conjuntos al referirse a sí misma.

## Qué Significa Esto

No es que los matemáticos sean malos en su trabajo. No es que falten técnicas. Es una limitación *estructural*. Como el teorema de incompletitud de Turing (1936): hay problemas que ninguna máquina puede resolver. Gödel probó lo análogo para sistemas de prueba: hay verdades que ningún sistema formal puede alcanzar.

Esto se extiende más allá de la matemática:

- **Filosofía del lenguaje**: ¿puede un sistema axiomático capturar el significado, o siempre se escapa algo?
- **Inteligencia artificial**: ¿puede una máquina razonar sobre todas las verdades? Gödel dice que no.
- **Tu post de NNC**: ¿las redes neuronales "descubren" patrones que nosotros no podemos formalizar? Gödel no lo prohíbe — de hecho, lo sugiere.

## El Precio Personal

Logicomix muestra esto bien: Russell, Gödel, Cantor — todos terminaron relativamente solos o rotos. Cantor terminó en un sanatorio, escribiendo cartas a Dios. Gödel murió de inanición porque estaba convencido de que lo estaban envenenando.

¿Hay algo en la búsqueda de certeza absoluta que consume a quienes la persiguen?

O quizás es al revés: quizás la incompletitud es liberadora. No todo puede reducirse a símbolos y reglas. Hay algo — intuición, comprensión, significado — que se escapa.

---

*Si quieres profundizar, Logicomix de Apostolos Doxiadis y Christos Papadimitriou cuenta toda esta historia como novela gráfica, con Russell como narrador. Es uno de esos libros raros que hacen que la pasión intelectual se sienta palpable.*

## Referencias

- Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme. *Monatshefte für Mathematik und Physik*, 38, 173–198.
- Hofstadter, D. R. (1979). *Gödel, Escher, Bach: Una Eterna Trenza Dorada*. Basic Books.
- Nagel, E., & Newman, J. R. (1958). *La Demostración de Gödel*. New York University Press.
- Doxiadis, A., & Papadimitriou, C. H. (2009). *Logicomix: Una Épica Búsqueda de la Verdad*. Bloomsbury.`
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
