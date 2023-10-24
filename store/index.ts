import { defineStore } from "pinia";
import { WebGLScene } from '../class/WebGL'
import gsap from 'gsap'
import { Body } from "~/.nuxt/components";
export const usePageStore = defineStore('counter', {
	state: () => ({
		mainChoose: '',
		showMainContent: false,
		webGL: false,
		startScroll: false
	}),
	actions: {
		setMainChoose(text: string) {
			this.mainChoose = text
			//@ts-ignore
	 

			// gsap.to(this.webGL.cort.position.x, {
			// 	duration: 2,
			// 	value: 0,
			// //@ts-ignore
			// })

			let xCort = 1.1
			let yCort = .35

			//@ts-ignore
			if(this.webGL.width < 1150) {
				xCort = .9	
			}
			//@ts-ignore

			if(this.webGL.width < 840) {
				xCort = .7	
			}
			//@ts-ignore

			if(this.webGL.width < 700) {
				xCort = .5	
				
				yCort = .55
			}
			//@ts-ignore

			if(this.webGL.width < 630) {
				yCort = .4
				xCort = .45	

			}
			//@ts-ignore
			if(this.webGL.width < 450) {
				xCort = .34	
			
			}
			//@ts-ignore
			gsap.to(this.webGL.cort.position, {
				duration: 3,
				x: xCort,
				y: yCort,
				ease: "power1.out"
			})
			//@ts-ignore
			gsap.to(this.webGL.cort.rotation, {
				duration: 3,
				x: 1.4,
				y: 1.7,
				ease: "power1.out"
			})
			//@ts-ignore
			gsap.to(this.webGL.cort.scale, {
				duration: 2,
				x: .0001,
				y: .0001,
				z: .0001,

				ease: "power1.out"
			})



		 

 

		 



			if(this.mainChoose === 'Basketball') {
				let xBask = .8
				let yBask = .42
				
				let xVall = 1.08
				let yVall = .4

				//@ts-ignore
				if(this.webGL.width < 1150) {
					xBask = .7
					xVall = 1.1
				}
				//@ts-ignore
				
				if(this.webGL.width < 840) {
					xBask = .585 
					xVall = .97
				}
				//@ts-ignore
				
				if(this.webGL.width < 700) {
					xBask = .7 
					xVall = .82

					yBask = .2
					yVall = .55
				}
				//@ts-ignore

				if(this.webGL.width < 450) {
					// yBask = .56
					xBask = .75
					xVall = .75
				 

				}


				//@ts-ignore

				this.webGL.isBasket = true
				//bask
				//@ts-ignore

				gsap.to(this.webGL.basketball.scale, {
					duration: 2,
					x: .07,
					y: .07,
					z: .07,
	
					ease: "power1.out"
				})
				//@ts-ignore
	
				gsap.to(this.webGL.basketball.position, {
					duration: 2,
					x: xBask,
					z: 1.,
					y: yBask,
					ease: "power1.out"
				})

				//volley
				//@ts-ignore
				gsap.to(this.webGL.volleyball.scale, {
					duration: 2,
					x: .04,
					y: .04,
					z: .04,
	
					ease: "power1.out"
				})
				//@ts-ignore
	
				gsap.to(this.webGL.volleyball.position, {
					duration: 2,
					x: xVall,
					z: 1.,
					y: yVall,
					ease: "power1.out"
				})
			} else {
				let xBask = 1.25
				let yBask = .42

				let xVall = .85
				let yVall = .55

				//@ts-ignore
				if(this.webGL.width < 1150) {
					xBask = 1.105
					xVall = .79
				}
				//@ts-ignore

				if(this.webGL.width < 840) {
					xBask =  .97
					xVall = .65
				}
				//@ts-ignore
				
				if(this.webGL.width < 700) {
					xVall = .69
					yVall = .38
					yBask = .56
					xBask =  .81

				}
				//@ts-ignore
			 
				if(this.webGL.width < 450) {
					// yBask = .56
					xBask =  .756
					xVall = .8

				}


				//@ts-ignore

				gsap.to(this.webGL.volleyball.scale, {
					duration: 2,
					x: .07,
					y: .07,
					z: .07,
	
					ease: "power1.out"
				})
				//@ts-ignore
	
				gsap.to(this.webGL.volleyball.position, {
					duration: 2,
					x: xVall,
					z: 1.2,
					y: yVall,
					ease: "power1.out"
				})

				//@ts-ignore
				gsap.to(this.webGL.basketball.scale, {
					duration: 2,
					x: .03,
					y: .03,
					z: .03,


					ease: "power1.out"
				})
				//@ts-ignore
				gsap.to(this.webGL.basketball.position, {
					duration: 2,
					x: xBask,
					z: 1.,
					y: yBask,
					ease: "power1.out"
				})
			}

		 
			setTimeout(() => {
				this.showMainContent = true
				 

			}, 1000)
			setTimeout(() => {
				this.startScroll = true
			}, 2000)
		},
		createWebGL(dom:any) {
			
			//@ts-ignore
			this.webGL = new WebGLScene({dom})

		},

	}
})