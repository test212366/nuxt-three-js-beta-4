<script  lang="ts">
	
	import {usePageStore} from '~/store/index'
	export default {
		computed: {
				store() {
					return usePageStore()
				}
			},	
			methods: {
				setMainChoose(text: string) {
		 
					this.store.setMainChoose(text)
				}
			
			}
	}

</script>


<template> 

	<section id="wrapper__section welcome__relative" :class="store.mainChoose && 'hide__welcome'">
		<div id="welcome"  >
			<div class="welcome__relative">
					<svg class="welcome__left-corner" width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H0V2V27H2V2H27V0H2Z" fill="#515151"/>
				</svg>

				<svg class="welcome__right-corner" width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H0V2V27H2V2H27V0H2Z" fill="#515151"/>
				</svg>

				<h1>Volleyball with <br/> schedule games.</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quisquam explicabo? Porro quo necessitatibus error, incidunt officia quod cumque sit facere repellat ullam animi fuga illum laboriosam. Enim, eius doloremque?</p>
				<div class="welcome__chose">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
						<path d="M2,0A2,2,0,0,0,0,2V18a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2ZM14.729,8.418l-3.8,5a1.129,1.129,0,0,1-1.865,0l-3.8-5a.968.968,0,0,1-.173-1.01.982.982,0,0,1,.946-.5h7.92a.982.982,0,0,1,.946.5A.966.966,0,0,1,14.729,8.418Z"/>
					</svg>
					<p class="welcome__chose-p">CHOSE</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
						<path d="M2,0A2,2,0,0,0,0,2V18a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2ZM14.729,8.418l-3.8,5a1.129,1.129,0,0,1-1.865,0l-3.8-5a.968.968,0,0,1-.173-1.01.982.982,0,0,1,.946-.5h7.92a.982.982,0,0,1,.946.5A.966.966,0,0,1,14.729,8.418Z"/>
					</svg>

				</div>
			</div>
		 
		</div>
	 
			<div :onClick="() => setMainChoose('Basketball')" class="welcome__left">
				<p>Basketball</p>
			</div>
			<div :onClick="() => setMainChoose('Volleyball')" class="welcome__right">
				<p>Volleyball</p>

			</div>
 


	</section>

</template>

<style scoped>
	.welcome__left {
		height: 60vh;
		width: 50%;
		display: flex;
		z-index: 1;
		justify-content: center;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	 
	.welcome__left:hover p , .welcome__right:hover p{
		opacity: 1;
	}
	.welcome__left p , .welcome__right p {
		margin-top: 160px;
		font-size: 26px;
		transition: .3s ease all;
		opacity: 0;
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 1px;
		color: #8d8c8c;
	}
	.welcome__right {
		height: 60vh;
		width: 50%;
		display: flex;
		z-index: 1;
		justify-content: center;
		position: absolute;
		right: 0;
		bottom: 0;
		
	}
	#welcome {
		position: absolute;
		display: flex;
		/* position: relative; */
		top: 30px;
		left: 0;
		right: 0;
		flex-direction: column;
		align-items: center;
		/* transition: .6s ease all; */
	}
	#wrapper__section {
		transition: .6s ease all;
		overflow: hidden;
	}
	.welcome__relative {
		position: relative;
	}
	.welcome__right-corner {
		position: absolute;
		right: -70px;
		bottom: -20px;
		transform: rotate(180deg);
	}
	.welcome__left-corner {
		position: absolute;
		left: -70px;
		top: 10px;
	}
	.welcome__chose-p {
		margin-top: 0 !important;
	}
	.welcome__chose {
		margin-top: 30px;
		display: flex;
		max-width: 150px;
		width: 100%;
		justify-content: space-between;

		align-items: center;
	}
	.welcome__chose svg {
		fill: #1e1e1e;
	}
	.welcome__chose svg:first-child {
		transform: rotate(90deg);
	}

	.welcome__chose svg:last-child {
		transform: rotate(-90deg);
	}
	#welcome h1 {
		font-size: 42px;
		margin-top: 50px;
		/* text-align: center; */
		max-width: 600px;
		width: 100%;
		/* max-width: 450px; */
		font-weight: 600;
		letter-spacing: 1px;
	}
	#welcome p {
		max-width: 600px;
		margin-top: 30px;
		font-size: 13px;
		line-height: 24px;
		color: #858585;
	}
	@media screen and (max-width: 1000px) {
		#welcome h1 {
			font-size: 30px;
		}
		#welcome p {
			font-size: 11px;
			max-width: 450px;
		}
		.welcome__left-corner {
			width: 15px;
			height: 15px;
		}
		.welcome__right-corner {
			width: 15px;
			height: 15px;

		}
		.welcome__chose-p {
			font-size: 9px !important;
		}
		.welcome__left p {
			font-size: 14px;
		}
		.welcome__right p {
			font-size: 14px;
		}
	}
	@media screen and (max-width: 630px) {
 
		.welcome__left-corner {
			left: -20px;
		}
		.welcome__right-corner {
			right: -20px;
		}
		.welcome__left {
			width: 100%;
			height: 30vh;
 
		}
		.welcome__right {
			height: 30vh;
 
			width: 100%;
			/* position: ; */
			bottom: 30vh;
			/* transform: translateX(100%); */
		}
	}
	@media screen and (max-width: 515px) { 
		#welcome p {
			max-width: 380px;
		}
	}
	@media screen and (max-width: 440px) { 
		#welcome p {
			max-width: 340px;
		}
	}
	@media screen and (max-width: 400px) { 
		#welcome p {
			max-width: 300px;
		}
	}
	@media screen and (max-width: 360px) { 
		#welcome p {
			max-width: 270px;
		}
	}
</style>