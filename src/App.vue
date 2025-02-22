<template>
	<Header />
	<main class="main">
		<RouterView />
	</main>
	<Footer />
</template>

<script>
import { Footer, Header } from '@/components/index.js'

export default {
	components: { Header, Footer },
}
</script>

<style></style>
