
<script setup lang="ts">
	import {usePageStore} from '~/store/index'
 
	const store = usePageStore()
 
	const AimWebGL: Ref<HTMLDivElement | null> = ref(null)

	onMounted(() => {
		store.createWebGL(AimWebGL.value)
	})
 
	
</script>

<template> 
	<div id="canvas" ref="AimWebGL">

	</div>
</template>

<style scoped>
	
	#canvas {
		position: fixed;
		top: 0;
		height: 100vh;
		left: 0;
		right: 0;
		z-index: -1;
		transition: .5s ease all;
	}

</style>