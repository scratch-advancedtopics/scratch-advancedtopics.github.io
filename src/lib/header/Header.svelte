<script lang="ts">
	export let currentTheme: string

	function switchTheme(): void {
		currentTheme === "dark" ? theme("light") : theme("dark")
	}

	if (typeof window !== "undefined") {
		currentTheme = localStorage.getItem("theme") || "light"
		

		if (matchMedia('prefers-color-scheme: dark') && localStorage.getItem('theme') == null) {
			theme("dark")
		}

		

		theme(currentTheme)
	}

	function theme(theme) {
		localStorage.setItem("theme", theme)
		currentTheme = theme
		theme === "dark" && document.querySelector("html").classList.add("dark")
		theme === "light" && document.querySelector("html").classList.contains("dark") && document.querySelector("html").classList.remove("dark")
	}
	
</script>
<nav class="flex">
	<div class="flex-item">
	  <a href="/"><h3 class="dark-2"><span class="dark-3">/*</span> ATs <span class="dark-3">*/</span></h3></a>
	</div>
	<div class="flex-item navlink">
	  <a href="https://scratch.mit.edu/studios/30152868/" class="dark-1">Studio</a>
	</div>
	<div class="flex-item navlink">
	  <a href="/members" class="dark-1">Members</a>
	</div>
	<div class="flex-item navlink navlink-right">
	  <a href="#" class="dark-1" id="themeSwitcher" title="Switch theme" on:click={switchTheme}>💡</a>
	</div>
</nav>