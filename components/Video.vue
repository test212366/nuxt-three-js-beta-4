<template> 
	<section class="video__wrapper">
		<div id="welcome"  >
			<div class="welcome__relative">
				 
 

				<h6>Some Video File and <br/> additional words.</h6>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quisquam explicabo? Porro quo necessitatibus error, incidunt officia quod cumque sit facere repellat ullam animi fuga illum laboriosam. Enim, eius doloremque?</p>
	 
				<button>See More Content
					<div></div>
				</button>
		 

			</div>
		 
		</div>
		<div class="welcome__video">
			<img src="../assets/video.png" alt="video">
			<svg width="71" height="78" viewBox="0 0 71 78" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_4_255)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M71 38.7017L0 78V0L71 38.7017Z" fill="white"/>
				</g>
				<defs>
				<clipPath id="clip0_4_255">
				<rect width="71" height="78" fill="white"/>
				</clipPath>
				</defs>
			</svg>

		</div>


	</section>

</template>

<style scoped>
 
	.video__wrapper {
		display: flex;
		margin-top: 100px;
		margin-bottom: 100px;
		align-items: center;
	}	
 
	.welcome__video {
		position: relative;
	}
	.welcome__video svg {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 50%;

	}
	.welcome__relative button {
		background-color: transparent;
		border: none;
		margin-top: 50px;
		letter-spacing: 1px;
	}
	.welcome__relative button div {
		height: 2px;
		width: 100%;
		margin-top: 10px;
		background: linear-gradient(90deg, #080F4F 39.58%, rgba(189, 0, 255, 0.00) 136.67%);
	}
	.welcome__video img {
		margin-left: 50px;
		width: 600px;
	}
	#wrapper__section {
		transition: .6s ease all;

	}
 
 
 
	#welcome h6 {
		font-size: 33px;
 
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
	@media screen and (max-width: 1330px) {
		.welcome__video svg {
			height: 57px;
			width: 50px;

		}
		.welcome__video img {
			width: 550px;
		}
	}
	@media screen and (max-width: 1000px) {
		#welcome h6 {
			font-size: 25px;
		}
		#welcome p {
			font-size: 11px;
		}
		.welcome__relative button {
			font-size: 10px;
		}
		.welcome__video img {
			width: 450px;
		}
		.welcome__video svg {
			transform: translateY(-25px);
		}
	}
	@media screen and (max-width: 820px) {
		.welcome__video img {
			width: 370px;

		}
		.welcome__video svg {
			height: 50px;
			width: 43px;

		}
	}
	@media screen and (max-width: 700px) {
		.video__wrapper {
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}
		.welcome__video img {
			margin-left: 0;
			margin-top: 50px;
		}
		.welcome__relative p {
			max-width: 420px !important;
		}
		.welcome__video svg {
			transform: translate(-20px,0);
		}
	}
	@media screen and (max-width: 450px) {
		.welcome__video img {
			width: 100%;
		}
		.welcome__video svg {
			height: 43px;
			width: 36px;

		}
	}
</style>