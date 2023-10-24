<template>

	<section>
		<div class="share__wrapper">
			<p class="share__title"><span>#</span> SHARE WITH FRIENDS</p>

			<img src="../assets/share1.png" alt="share">
			<img src="../assets/share2.png" alt="share">
			<img src="../assets/share3.png" alt="share">
			<img src="../assets/share4.png" alt="share">
			<img src="../assets/share8.png" alt="share">
	 
			<img src="../assets/share7.png" alt="share">
			<img src="../assets/share6.png" alt="share">
			<!-- <img src="../assets/share8.png" alt="share"> -->

		</div>
	</section>


</template>


<style scoped>

	.share__wrapper {
		width: 100vw;
		overflow: hidden;
		position: relative;
		display: flex;
		margin-top: 200px;
		margin-bottom: 150px;
	}
	.share__wrapper img {
		width: 100%;
	}
	.share__title {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-size: 20px;
		font-weight: 600;
		letter-spacing: 1px;
	}
	.share__title span {
		background: linear-gradient(305deg, #D100B0 -15.69%, rgba(0, 71, 255, 0.51) 118.48%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@media screen and (max-width: 1330px) {
		.share__wrapper img {
			width: 190px;

		}
	}
	@media screen and (max-width: 1000px) {
		.share__wrapper img {
			width: 145px;

		}
		.share__title {
			font-size: 18px;
		}
	}
	@media screen and (max-width: 700px) {
		.share__wrapper img {
			width: 100px;

		}
		.share__title {
			font-size: 14px;
		}
		.share__wrapper {
			margin-top: 90px;
			margin-bottom: 70px;
		}
	}
	@media screen and (max-width: 550px) {
		.share__wrapper img {
			width: 80px;

		}
		.share__title {
			font-size: 12px;
		}
	}
	@media screen and (max-width: 550px) {
		.share__wrapper img {
			width: 65px;

		}
	}
</style>