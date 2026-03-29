<script lang="ts">
	import MarkdownCard from '$lib/components/MarkdownCard.svelte';
	import logo from './logo.png';
	import { Fa } from 'svelte-fa';
	import { faFilm } from '@fortawesome/free-solid-svg-icons';
</script>

<svelte:head>
	<title>IMDb-- - Caffeine Overflow</title>
	<meta
		name="description"
		content="A university CLI project for searching movies, reading synopses, and filtering by genre."
	/>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-10 px-4 py-12">
	<header class="space-y-4 text-center">
		<p class="inline-flex items-center gap-2 font-semibold tracking-wide text-yellow-600 uppercase">
			<Fa icon={faFilm} class="mb-2 text-4xl text-yellow-600" />
			IMDb--
		</p>
		<h1 class="text-4xl font-bold text-gray-900">Programming III: Final Project (2025-0)</h1>
		<p class="text-lg text-gray-600">
			A CLI application for searching movies, reading synopses, browsing genres, and managing
			personal watch lists.
		</p>
	</header>

	<div class="flex flex-wrap justify-center gap-2">
		<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome badge" />
		<img src="https://img.shields.io/badge/os-linux-brightgreen" alt="Linux support badge" />
		<img src="https://img.shields.io/badge/os-mac-brightgreen" alt="macOS support badge" />
		<img src="https://img.shields.io/badge/os-windows-yellowgreen" alt="Windows support badge" />
	</div>

	<div class="flex flex-wrap justify-center gap-2">
		<a
			href="https://github.com/AntoMGB1"
			aria-label="Lead marco on GitHub"
			title="Lead marco on GitHub"
		>
			<img src="https://img.shields.io/badge/lead-marco-lightblue" alt="Lead marco badge" />
		</a>
		<a
			href="https://github.com/stiffis"
			aria-label="Maintainer stiffis on GitHub"
			title="Maintainer stiffis on GitHub"
		>
			<img
				src="https://img.shields.io/badge/maintainer-stiffis-blue"
				alt="Maintainer stiffis badge"
			/>
		</a>
		<a
			href="https://github.com/Vasco2510"
			aria-label="Maintainer abel on GitHub"
			title="Maintainer abel on GitHub"
		>
			<img src="https://img.shields.io/badge/maintainer-abel-blue" alt="Maintainer abel badge" />
		</a>
	</div>

	<MarkdownCard>
		<div class="text-center">
			<img src={logo} alt="IMDb-- logo" />
		</div>

		<h2>Introduction</h2>

		<h3>Goal</h3>
		<p>
			The goal of <strong>IMDb--</strong> is to build a movie-focused platform centered on
			<strong>searching and viewing movie synopses</strong>. Beyond the technical challenge, the
			project was also used as a workflow exercise, simulating a more realistic development
			environment with fixed meetings, progress sharing, weekly planning, and feedback sessions.
		</p>

		<h3>Motivation</h3>
		<p>
			The team was motivated by the complexity of the problem. The project required data structures,
			algorithms, parallel programming, and teamwork, which helped improve both technical depth and
			communication skills.
		</p>

		<h3>Scope</h3>
		<p>
			IMDb-- supports searches by prefix or keyword, displays synopses and genres, and lets users
			keep a
			<strong>liked movies</strong> list and a <strong>watch later</strong> list.
		</p>

		<h2>Requirements</h2>

		<h3>Software Requirements</h3>
		<ul>
			<li>
				<strong>C++ compiler</strong>
				<ul>
					<li><code>g++</code> (GCC) version 11.2.0 or later is recommended.</li>
					<li><code>clang++</code> version 13.0.0 or later also works.</li>
				</ul>
			</li>
			<li>
				<strong>Operating systems</strong>
				<ul>
					<li>Linux (Ubuntu, Fedora, Arch, etc.)</li>
					<li>macOS</li>
					<li>Windows</li>
				</ul>
			</li>
		</ul>

		<h3>Hardware Requirements</h3>
		<p>
			No special hardware is required. The program is not especially demanding in terms of
			resources.
		</p>

		<h2>Installation</h2>
		<p>If a C++ compiler is not installed yet, it can be installed with:</p>
		<pre><code>sudo apt-get install g++</code></pre>
		<p>Clone the repository and move into the project directory:</p>
		<pre><code
				>git clone &lt;url&gt;
cd imdb--/</code
			></pre>
		<p>Compile the project with:</p>
		<pre><code>g++ -o main main.cpp</code></pre>
		<p>Run it with:</p>
		<pre><code>./main</code></pre>

		<h2>User Guide</h2>
		<p>When the program starts, the main menu includes the following options:</p>
		<pre><code
				>You have no movies in Likes.
You have no movies in Watch Later.

=== Main Menu ===
1. View Watch Later movies
2. View liked movies
3. Search movies
4. View search history
5. Save state
6. Restore state
7. Recommended movies
0. Exit
--------------------------
| Select an option:      |
--------------------------</code
			></pre>

		<h3>Main actions</h3>

		<h4>View Watch Later movies</h4>
		<p>
			Shows the movies saved in the <em>Watch Later</em> list. If the list is empty, the program displays
			a message.
		</p>
		<pre><code>You have no movies in Watch Later.</code></pre>

		<h4>View liked movies</h4>
		<p>
			Shows the movies saved in the <em>Likes</em> list. If the list is empty, the program displays a
			message.
		</p>
		<pre><code>You have no movies in Likes.</code></pre>

		<h4>Search movies</h4>
		<p>The user can search by full title or partial keyword:</p>
		<pre><code
				>-----------------------------------
| Enter a search term:           |
-----------------------------------
Wolverine</code
			></pre>
		<p>If there are no matches, the program reports it:</p>
		<pre><code>No results were found for 'Wolverine'.</code></pre>
		<p>If matches are found, the user can optionally filter them by genre:</p>
		<pre><code
				>----------------------------------------------------
| Do you want to filter results by genre? (y/n):  |
----------------------------------------------------</code
			></pre>
		<p>Then the user can provide a genre such as:</p>
		<pre><code
				>-----------------------
| Enter the genre:    |
-----------------------
comedy</code
			></pre>
		<p>The results are shown with pagination and extra options:</p>
		<pre><code
				>Showing page 1 of 1
1. fear and loathing in las vegas
2. logan
-------------------------------------
| Options:                          |
| 'n' NEXT PAGE                     |
| 'g' FILTER BY GENRE               |
| 'r' REMOVE LAST FILTER            |
| '0' EXIT                          |
-------------------------------------</code
			></pre>
		<ul>
			<li><code>n</code>: show the next page of results, if one exists</li>
			<li><code>g</code>: apply a genre filter</li>
			<li><code>r</code>: remove the most recent filter</li>
			<li><code>0</code>: leave the search flow</li>
		</ul>

		<h4>View search history</h4>
		<p>Shows previous searches. If there is no history, the program reports it.</p>
		<pre><code>There is no search history.</code></pre>

		<h4>Save state</h4>
		<p>Saves the current application state.</p>
		<pre><code>State saved.</code></pre>

		<h4>Restore state</h4>
		<p>Restores the previously saved application state.</p>
		<pre><code>State restored.</code></pre>

		<h4>Recommended movies</h4>
		<p>Displays recommended movies. If there are none, the program shows a message.</p>
		<pre><code>There are no recommended movies.</code></pre>

		<h4>Exit</h4>
		<p>Leaves the program.</p>

		<h2>Documentation</h2>

		<h3>Class Diagram</h3>
		<p>The class diagram shows the program structure and the relationships between its classes:</p>
		<p>
			<a href="https://drive.google.com/file/d/1_gTeblcuOoYWGjuNLnMBjl0BbXucvRg_/view?usp=sharing"
				>Class Diagram</a
			>
		</p>

		<h3>Data Cleaning</h3>
		<p>The dataset was cleaned using <strong>R</strong>. The process included:</p>
		<ol>
			<li>Loading the required libraries:</li>
		</ol>
		<pre><code
				>library(dplyr)
library(stringr)</code
			></pre>
		<ol start="2">
			<li>Loading the dataset:</li>
		</ol>
		<pre><code>data &lt;- read.csv("C:/Users/Marco/Desktop/Prp/Data.csv")</code></pre>
		<ol start="3">
			<li>
				Defining a text-cleaning function to remove non-Latin characters and unnecessary symbols:
			</li>
		</ol>
		<pre><code
				>clean_text &lt;- function(text) &#123;
cleaned &lt;- str_replace_all(text, "[^a-zA-Z0-9\\s.!?-]", "")
return(cleaned)
&#125;</code
			></pre>
		<ol start="4">
			<li>Applying the function:</li>
		</ol>
		<pre><code
				>cleaned_data &lt;- data %&gt;%
mutate(across(everything(), ~ sapply(., clean_text)))</code
			></pre>
		<ol start="5">
			<li>Saving the cleaned data:</li>
		</ol>
		<pre><code
				>write.csv(cleaned_data, "C:/Users/Marco/Desktop/Prp/CleanedData.csv", row.names = FALSE)</code
			></pre>
	</MarkdownCard>
</div>
