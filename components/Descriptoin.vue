<template> 
	<section>
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
				<button>
					Look Now
					<svg width="28" height="28" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27.9104 20.4912L22.1233 26.196L22.222 12.4194L20.3295 12.4058L20.2307 26.1824L14.526 20.3953L13.1779 21.7241L21.151 29.8124L29.2393 21.8393L27.9104 20.4912Z" fill="white"/>
					</svg>
				</button>

				<div class="social">
					<svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.6644 3.5C7.16222 3.5 3.5 7.16561 3.5 11.6689V23.3356C3.5 27.8378 7.16561 31.5 11.6689 31.5H23.3356C27.8378 31.5 31.5 27.8344 31.5 23.3311V11.6644C31.5 7.16222 27.8344 3.5 23.3311 3.5H11.6644ZM25.6667 8.16667C26.3107 8.16667 26.8333 8.68933 26.8333 9.33333C26.8333 9.97733 26.3107 10.5 25.6667 10.5C25.0227 10.5 24.5 9.97733 24.5 9.33333C24.5 8.68933 25.0227 8.16667 25.6667 8.16667ZM17.5 10.5C21.3605 10.5 24.5 13.6395 24.5 17.5C24.5 21.3605 21.3605 24.5 17.5 24.5C13.6395 24.5 10.5 21.3605 10.5 17.5C10.5 13.6395 13.6395 10.5 17.5 10.5ZM17.5 12.8333C16.2623 12.8333 15.0753 13.325 14.2002 14.2002C13.325 15.0753 12.8333 16.2623 12.8333 17.5C12.8333 18.7377 13.325 19.9247 14.2002 20.7998C15.0753 21.675 16.2623 22.1667 17.5 22.1667C18.7377 22.1667 19.9247 21.675 20.7998 20.7998C21.675 19.9247 22.1667 18.7377 22.1667 17.5C22.1667 16.2623 21.675 15.0753 20.7998 14.2002C19.9247 13.325 18.7377 12.8333 17.5 12.8333Z" fill="#7B7B7B"/>
					</svg>
					<svg width="27" height="27" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 0C24.8369 0 32 7.16313 32 16C32 24.8369 24.8369 32 16 32C7.16313 32 0 24.8369 0 16C0 7.16313 7.16313 0 16 0ZM21.5193 22.5217C21.8136 21.6188 23.1923 12.6198 23.3628 10.8466C23.4143 10.3096 23.2445 9.95269 22.912 9.79339C22.5099 9.6 21.9144 9.6967 21.2237 9.94574C20.2762 10.2873 8.16348 15.4303 7.46365 15.728C6.8 16.0097 6.17252 16.3172 6.17252 16.7624C6.17252 17.0755 6.35826 17.2515 6.87026 17.4344C7.40313 17.6243 8.74504 18.0313 9.53739 18.2497C10.3005 18.4605 11.1694 18.2776 11.6563 17.975C12.1725 17.6543 18.1294 13.6682 18.5572 13.319C18.9843 12.9697 19.3252 13.417 18.976 13.767C18.6268 14.1162 14.5377 18.0849 13.9986 18.6344C13.344 19.3016 13.8087 19.993 14.2477 20.2699C14.7492 20.5857 18.3562 23.0052 18.8995 23.3934C19.4428 23.7816 19.9937 23.9576 20.4981 23.9576C21.0024 23.9576 21.2682 23.2932 21.5193 22.5217Z" fill="#7B7B7B"/>
					</svg>
					<svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.5 1.40002C8.62259 1.40002 1.39999 8.62262 1.39999 17.5C1.39999 26.3774 8.62259 33.6 17.5 33.6C26.3781 33.6 33.6 26.3774 33.6 17.5C33.6 8.62262 26.3781 1.40002 17.5 1.40002ZM24.4811 20.6745C26.047 22.0647 26.3725 22.561 26.4257 22.6457C27.0746 23.6747 25.7061 23.8 25.7061 23.8H22.8221C22.8221 23.8 22.12 23.8077 21.5201 23.4101C20.5422 22.7696 19.5181 21.5278 18.7985 21.7434C18.1944 21.924 18.2 22.7402 18.2 23.4381C18.2 23.688 17.9851 23.8 17.5 23.8C17.0149 23.8 16.8133 23.8 16.5984 23.8C15.0185 23.8 13.3042 23.268 11.5941 21.4809C9.17489 18.9546 7.05319 13.8656 7.05319 13.8656C7.05319 13.8656 6.92789 13.6094 7.06439 13.4533C7.21909 13.2783 7.63979 13.3007 7.63979 13.3007L10.4363 13.3C10.4363 13.3 10.6995 13.3497 10.8885 13.4827C11.0446 13.5919 11.1314 13.8005 11.1314 13.8005C11.1314 13.8005 11.6011 15.3517 12.1996 16.3408C13.3686 18.2714 13.9125 18.3204 14.3094 18.1125C14.889 17.8115 14.7 15.7591 14.7 15.7591C14.7 15.7591 14.7259 14.8778 14.4235 14.4851C14.1904 14.1813 13.7445 14.0196 13.5499 13.9944C13.3924 13.9741 13.6556 13.6983 13.9909 13.5408C14.4389 13.3413 15.0486 13.2902 16.1 13.3C16.9183 13.3077 17.1542 13.3567 17.4734 13.4302C18.4387 13.6528 18.2 14.2401 18.2 16.3023C18.2 16.9631 18.109 17.892 18.6074 18.2C18.8223 18.333 19.5587 18.4954 20.8691 16.3674C21.4914 15.358 21.9863 13.6836 21.9863 13.6836C21.9863 13.6836 22.0885 13.4995 22.2474 13.4085C22.4098 13.3154 22.4049 13.3175 22.6275 13.3175C22.8501 13.3175 25.0824 13.3 25.5724 13.3C26.0617 13.3 26.5209 13.2944 26.6 13.5814C26.7134 13.9937 26.2388 15.4063 25.0362 16.9393C23.0601 19.4551 22.841 19.2199 24.4811 20.6745Z" fill="#7B7B7B"/>
					</svg>


				</div>

			</div>
		 
		</div>
	</section>

</template>


<style scoped>

	#welcome button {
		margin-top: 60px;
		border-radius: 20px;
		border-radius: 30px;
		border: none;
		background: linear-gradient(270deg, #080F4F 27.99%, rgba(80, 21, 101, 0.07) 123.54%, rgba(217, 217, 217, 0.00) 123.55%);
		display: flex;
		align-items: center;
		padding: 12px 14px 12px 25px;
		width: 170px;
		font-size: 12px;
		justify-content: space-between;
	}

	#welcome {
		height: 63vh;
		margin-top: 260px;
		/* transition: .6s ease all; */
	}
	#wrapper__section {
		transition: .6s ease all;

	}
	.welcome__relative {
		position: relative;
	}
	.welcome__right-corner {
		position: absolute;
		right: -70px;
		bottom: -120px;
		transform: rotate(180deg);
	}
	.welcome__left-corner {
		position: absolute;
		left: -50px;
		top: -100px;
	}
	.social {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: -130px;
	}
	.social svg:first-child {
		margin-left: 0 !important;
	}
	.social svg {
		margin-left: 10px;
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
	@media screen and (max-width: 1330px) {
		#welcome {
			padding: 0 40px;
		}
		.welcome__left-corner {
			left: -40px;
		}
		.welcome__right-corner {
			right: -40px;

		}
	}
	@media screen and (max-width: 1000px) {
		#welcome h1 {
			font-size: 36px;
		}
		#welcome p {
			font-size: 11px;
			max-width: 450px;
		}
		#welcome button {
			font-size: 10px;
			width: 120px;
		}
	 
		#welcome button svg {
			height: 23px;
			width: 23px;

		}
		.social svg {
			height: 25px;
			width: 25px;

		}
		.social svg:nth-child(2) {
			height: 22px;
			width: 22px;
		}
	}
	@media screen and (max-width: 700px) {
		#welcome {
			margin-top: 200px;
		}
		#welcome h1 {
			font-size: 30px;
		}
		#welcome p {
			font-size: 10px;
			line-height: 20px;
			max-width: 400px;
		}
		#welcome button {
			font-size: 9px;
		}
		.welcome__left-corner {
			width: 15px;

		}
		.welcome__right-corner {
			width: 15px;

		}
		#welcome button svg {
			height: 20px;
			width: 20px;

		}
	}
	@media screen and (max-width: 380px) {
		#welcome {
			padding: 0 20px;
		}
		.welcome__left-corner {
			left: -15px;
		}
		.welcome__right-corner {
			right: -15px;

		}
	}
</style>