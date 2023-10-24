<template>
	<section class="container">
		<p>Last Games</p>
	</section>
	<section>
	 
		<Swiper
				:modules="[SwiperAutoplay, SwiperEffectCreative]"
				:slides-per-view="1.2"
				:loop="true"
				:centeredSlides="true"
				:autoplay="{
					delay: 8000,
					disableOnInteraction: true,
				}"
				:breakpoints="{1330: {slidesPerView: 4.1}, 1000: {slidesPerView: 3.5}, 800: {slidesPerView: 2.7}, 700: {slidesPerView: 2.1}, 450: {slidesPerView: 1.4}} "


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
				 <div class="slider__item">
					<div class="slider__image">
						<img src="../assets/sliderItem.png" alt="img__slider">
						<p>Manchester City - Real Madrid</p>
					</div>
					<div class="slider__desc">
						<p class="slider__score">30 - 29</p>
						<p class="slider__data">23 March. 2023 - 15:25</p>
					</div>
				 </div>
			 
						 
	 
			 
				
			
			</SwiperSlide>
		</Swiper>

	</section>


</template>


<style scoped>
	.slider__image {
		position: relative;
	}
	.container p {
		font-size: 14px;
		letter-spacing: 1px;
		margin-bottom: 10px;
	}
	.slider__image img {
		width:100%;
	}
	.slider__image p {
		/* color: #fff; */
		position: absolute;
		left: 0;
		bottom: 0;
		padding: 20px;
		background: rgba(20, 20, 20, 0.73);
		backdrop-filter: blur(5px);
		width:100%;
		font-size: 12px;
		letter-spacing: 1px;
	}
	.slider__item {
		padding: 20px;
	}
	.slider__score {
		font-size: 20px;
		font-weight: 600;
		background: linear-gradient(270deg, #D100B0 -15.13%, rgba(0, 71, 255, 0.51) 125%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		letter-spacing: 1px;
	}
	.slider__desc {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 10px;
	}
	.slider__data {
		font-size: 13px;
		color: #7e7e7e;
	}
	@media screen and (max-width: 450px) {
		.container p {
			font-size: 12px;
		}	
		
	}

</style>