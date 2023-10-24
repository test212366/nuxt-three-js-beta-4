<template> 
	<section>
		<div>
 
			<Swiper
				:modules="[SwiperAutoplay, SwiperEffectCreative]"
				:slides-per-view="1.5"
				:loop="true"
				:centeredSlides="true"
				:autoplay="{
					delay: 8000,
					disableOnInteraction: true,
				}"
				:breakpoints="{1650: {slidesPerView: 5.4}, 1330: {slidesPerView: 4.7}, 1000: {slidesPerView: 3.6}, 820: {slidesPerView:2.9}, 550: {slidesPerView: 2.3}, 450: {slidesPerView: 1.7}} "


				:creative-effect="{
					prev: {
					shadow: false,
					translate: ['-20%', 0, -1],
					},
					next: {
					translate: ['100%', 0, 0],
					},
				}"
			>
			<SwiperSlide v-for="slide in 16" :key="slide">
					<div class="slider__wrapper">
						<div class="slider__item">
							<div class="slider__logo">
								<img src="https://fs.mtgame.ru/WhatsAppImage2023-03-24at11.46.12_cuso4.jpeg" alt="gamesSlideImg">
								<p>MOSCOWTUR</p>
							</div>
							<div class="slider__score">
								<p class="slider__common-score">2</p>
								<div class="slider__score-target">
									<p>0</p>
									<span>:</span>
									<p>2</p>
								</div>
							</div>
							<div class="slider__logo">
								<img src="https://fs.mtgame.ru/resort_LvkoP.png" alt="gamesSlideImg">
								<p>SCO.VSOKIO</p>
							</div>
						</div>
					</div>
			 
						 
	 
			 
				
			
			</SwiperSlide>
		</Swiper>
		</div>


	</section>

</template>


<style scoped>
	.slider__wrapper {
		background: rgba(100, 100, 100, 0.146);
		backdrop-filter: blur(2px);
	}
	.slider__score-target p:first-child {
		margin-right: 10px;
		font-size: 19px;
		font-weight: 500;
	}
	.slider__score-target p:last-child {
		margin-left: 10px;
		font-size: 19px;
		font-weight: 500;
	}
	.slider__score-target span {
		font-size: 10px;
	}
	.slider__common-score {
		font-size: 11px;
		background-color: #6c6c6c27;
		/* width: 40px; */
		border-radius: 10px;
		padding:  5px 20px ;
	 
	}
	.slider__logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
	}
	.slider__score {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.slider__score-target {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
	}
	.slider__logo:first-child {
		margin-right: 40px;
	}
	.slider__logo:last-child {
		margin-left: 40px;
	}
	.slider__logo p {
		font-size: 10px;
	}
	.slider__item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30px;
		margin: 0 10px;
	 
	}
	.slider__item img {
		margin-bottom: 20px;
		width: 60px;
		height: 60px;
		border-radius: 10px;
	}
	@media screen and (max-width: 700px) {
		.slider__item img {
			width: 40px;
			height: 40px;
		}
		.slider__logo:first-child {
			margin-right: 25px;
		}
		.slider__item {
			padding: 20px;
		}
		.slider__item img {
			margin-bottom: 13px;
		}
		.slider__common-score {
			padding:  5px 15px;
		}
		.slider__score-target p{
			font-size: 13px !important;
		}
		.slider__logo p {
			font-size: 9px;
			/* margin-top: 0px; */
		}
		.slider__logo:last-child {
			margin-left: 25px;
		}
	}
</style>