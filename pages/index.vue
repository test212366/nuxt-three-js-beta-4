<script  lang="ts">
	
	import {usePageStore} from '~/store/index'
	export default {
		computed: {
				store() {
					return usePageStore()
				}
			},	
			methods: {
		 
			
			}
	}

</script>

<template> 
	<main :class="store.startScroll && 'main__active'">
		<section class="container">
		
			<WebGL />
			<Welcome />

	 
	

		</section>
		<div id="wrapper__show-main" :class="store.showMainContent && 'main-show'">
			<Slider />
			<section class="container">
				<Header />
				<Descriptoin />
			

			</section>
		</div>
		<div id="wrapper__show-main" :class="store.showMainContent && 'main-show'">

			<SectionNews />
			<section class="container">
				<Video/>
			</section>	
			<SliderGames />
			<section class="container">
				<FilterGames />
			</section>	
			<Share />
			<Footer />
		</div>
	</main>
 
 
</template>


<style  >
	.main-show {
		opacity: 1 !important;
		z-index: 0 !important;
		transform: translateY(0%) !important;
	}
	.hide__welcome {
		opacity: 0;
		z-index: -1;
	}
	#wrapper__show-main {
		opacity: 0;
		transform: translateY(-100%);
		transition: 1s ease all;
		z-index: -1;
	}
	.container {
 
		max-width: 1200px;
		padding: 0 25px ;
		margin: 0 auto;
	}
	main {
		height: 100vh;
		overflow: hidden;
	}
	.main__active {
		height: auto !important;
		overflow: auto !important;
	}

	body {
		overscroll-behavior: none;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Monserrat;
		color: #fff;

	}
	*::-webkit-scrollbar {
		width: 6px;
	}

	/* Track */
	*::-webkit-scrollbar-track {
		background: #0d0d0d;
	}

	/* Handle */
	*::-webkit-scrollbar-thumb {
		background: rgb(29, 29, 29);
 
	}
	canvas {
		display: block;
	}
 
	@font-face {
		font-weight: 400;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Regular.ttf");
	}
	@font-face {
		font-weight: 500;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Medium.ttf");
	}
	@font-face {
		font-weight: 600;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Bold.ttf");
	}
	@font-face {
		font-weight: 800;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Black.ttf");
	}
	@font-face {
		font-weight: 300;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Light.ttf");
	}


</style>