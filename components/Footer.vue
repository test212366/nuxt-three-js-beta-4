<style scoped>
	footer {
		display: flex;
		align-items: center;
		color: #fff;
		justify-content: space-between;
		padding-bottom: 50px;
	} 
 
	.footer__description {
		max-width: 400px;
		color: #8e8a8a;
		font-size: 13px;
		line-height: 22px;
		margin-bottom: 40px;
	}
	.footer__section {
		padding-top: 60px;
		border-top: 1px solid #2e2e2e;
	}
	.footer__email {
		font-size: 13px;
	 
	}
	.footer__select {
		height: 155px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.footer__select p {
		font-size: 12px;
		color: #8e8a8a;

	}
	.footer__select p:first-child {
		font-size: 16px;
		color: #fff;
	}
	@media screen and (max-width: 1110px) { 
		.logo p{
			font-size: 14px;
		}
		.logo svg {
			height: 25px;
			width: 25px;
		}
		.footer__description {
			font-size: 12px;
			max-width: 300px;
		}
		.footer__select p {
			font-size: 10px;
		}
		.footer__select p:first-child {
			font-size: 15px;
		}
	
	}
	@media screen and (max-width: 690px) {
		.footer__description {
			display: none;
		}
		.container {
			position: relative;

		}
	 
		.footer__email {
			display: none;
		}
		.container div:first-child {
			display: none
		}
		.footer__select p:first-child {
			font-size: 14px;
		}
		.footer__select p {
			font-size: 12px;
		}
	}
</style>


<template> 
	<section class="footer__section" >

		<footer class="container">
			<div>
				 
			 

					<p class="footer__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, libero!</p>
					<p class="footer__email">info@gmail.com</p>
				</div>
				<div class="footer__select">
					<p>Product</p>
				 
						<p>BlockQuaote</p>
						<p>Security</p>
						<p>API</p>
						<p>Intreset</p>
				 
				</div>
				<div class="footer__select">
					<p>Cryptocurrency</p>
				 
						<p>Bolom</p>
						<p>Litecoin</p>
						<p>Bathroom</p>
						<p>Hope</p>
				 
				</div>
				<div class="footer__select">
					<p>Product</p>
				 
						<p>Trade</p>
						<p>FAQ</p>
						<p>API</p>
						<p>Intreset</p>
			 
				</div>
	 
		</footer>
	</section>


</template>