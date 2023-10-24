<template>

	<section >

		<header>
			<svg width="35" height="35" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M44 22.5C44 34.3741 34.3741 44 22.5 44C10.6259 44 1 34.3741 1 22.5C1 10.6259 10.6259 1 22.5 1C34.3741 1 44 10.6259 44 22.5ZM45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5ZM18.5159 15.5254C17.9894 16.3134 17.7083 17.2398 17.7083 18.1875C17.7099 19.4579 18.2152 20.6758 19.1135 21.574C20.0117 22.4723 21.2296 22.9776 22.5 22.9792C23.4477 22.9792 24.3741 22.6981 25.1621 22.1716C25.9501 21.6451 26.5643 20.8968 26.9269 20.0212C27.2896 19.1456 27.3845 18.1822 27.1996 17.2527C27.0147 16.3232 26.5583 15.4694 25.8882 14.7993C25.2181 14.1292 24.3643 13.6728 23.4348 13.4879C22.5053 13.303 21.5419 13.3979 20.6663 13.7606C19.7907 14.1232 19.0424 14.7374 18.5159 15.5254ZM24.845 24.2145C25.3332 23.946 25.9047 23.8714 26.4455 24.0055C27.3781 24.246 28.2036 24.7912 28.7909 25.5544C29.3783 26.3177 29.6939 27.2553 29.6875 28.2184V29.1901C29.6877 29.7971 29.5245 30.3929 29.215 30.9151C29.0867 31.1264 28.9058 31.3009 28.69 31.4215C28.4742 31.5421 28.2308 31.6047 27.9836 31.6032H17.0164C16.7693 31.6047 16.526 31.5422 16.3102 31.4218C16.0944 31.3014 15.9135 31.1272 15.785 30.9161C15.4758 30.3938 15.3126 29.798 15.3125 29.1911V28.2222C15.3053 27.2585 15.6204 26.32 16.2079 25.5559C16.7953 24.7919 17.6213 24.2462 18.5545 24.0055C19.0953 23.8718 19.6666 23.9464 20.155 24.2145C20.8725 24.6123 21.6795 24.8211 22.5 24.8211C23.3205 24.8211 24.1275 24.6123 24.845 24.2145Z" fill="#262424"/>
			</svg>
			<nav class="header__nav">
				<ul>
					<li>HOME</li>
					<li>CONTACTS</li>
					<li>MAIN</li>
					<li>ABOUT</li>
					<li>GAMES</li>
				</ul>
			</nav>
			<svg id="search" width="28" height="28" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_4_170)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3534 15.8635C13.1362 16.7645 16.9212 12.894 15.8441 14.3653C15.8711 14.3632 15.8211 14.4447 15.6537 14.6492C15.6537 14.6492 18.5301 17.5062 19.9421 18.9603C20.4323 19.4904 19.5478 20.5484 18.947 19.996C17.6683 18.7554 14.6427 15.6724 14.6381 15.6673L14.3534 15.8635Z" fill="#262424"/>
				<path d="M10.1268 17.3082C11.9776 17.2903 13.8097 16.5237 15.1272 15.2217C16.6919 13.6753 17.4976 11.3875 17.2166 9.20324C16.735 5.46035 13.6581 2.92029 10.0808 2.92029C7.36288 2.92029 4.72147 4.62049 3.56285 7.0858C2.67591 8.97324 2.67412 11.252 3.56285 13.1427C4.71321 15.5908 7.31149 17.282 10.0345 17.3082C10.0654 17.3082 10.0963 17.3082 10.1268 17.3082ZM10.042 16.109C7.27807 16.0824 4.69919 13.9448 4.18637 11.2042C3.82483 9.27224 4.50729 7.1814 5.92897 5.8093C7.58857 4.20685 10.1973 3.6703 12.3665 4.57844C14.3071 5.39099 15.7597 7.27771 16.0274 9.35634C16.2567 11.1381 15.6174 13.0054 14.361 14.2916C13.2588 15.4201 11.7131 16.0935 10.1193 16.109C10.0934 16.109 10.0679 16.109 10.042 16.109Z" fill="#262424"/>
				</g>
				<defs>
				<clipPath id="clip0_4_170">
				<rect width="23" height="23" fill="white"/>
				</clipPath>
				</defs>
			</svg>
			<div class="mobile">
				<div></div>
				<div></div>
				<div></div>

			</div>
		</header>

	</section>

</template>
<style scoped>
	.header__nav ul{
		display: flex;
		align-items: center;
	}
	.mobile {
		display: none;
	}
	.header__nav ul li:first-child {
		margin-left: 0 !important;
	}
	.header__nav ul li{
		list-style: none;
		margin-left: 60px;
		font-size: 11px;
		letter-spacing: 1px;
		color: #6a6a6a;
	}
	header {
		margin-top: 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media screen and (max-width: 1000px) {
		.header__nav ul li {
			font-size: 10px;
		}
	}
	@media screen and (max-width: 700px) {
		.header__nav ul li {
			font-size: 9px;
			margin-left: 40px;
		}
		header svg:first-child  {
			height: 30px;
			width: 30px;
		}
		header svg:last-child  {
			height: 23px;
			width: 23px;
		}
	}
	@media screen and (max-width: 550px) {
		.header__nav {
			display: none;
		}
		#search {
			display: none !important;
		}
		.mobile {
			display: flex;
			/* align-items: ; */
			justify-content: space-between;
			flex-direction: column;
		}
		.mobile div {
			margin-bottom: 4.5px;
			height: 2px;
			width: 20px;
			background-color: #4b4b4b;
		}
	}
</style>