	
	import * as THREE from 'three'
	import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
	import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader' 
	// import GUI from 'lil-gui'
	import gsap from 'gsap'
	//@ts-ignore
	import fragmentShader from '../shaders/fragment.frag';
 	//@ts-ignore
	import vertexShader from '../shaders/vertex.vert'
 	//@ts-ignore
 

 	//@ts-ignore
	import cancha from '../assets/basketball_court_set.glb'
  	//@ts-ignore
	  import bask from '../assets/basketball.glb'
	//@ts-ignore
	import volley from '../assets/volleyball.glb'
	
	// import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer'
	// import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'
	// import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass'
	// import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass'
 

 	export class WebGLScene {
		scene: any
		container: any
		width: any
		height: any
		renderer: any
		renderTarget: any
		camera: any
		controls: any
		time: number
		dracoLoader: any
		gltf: any
		isPlaying: boolean
		//@ts-ignore
		gui: GUI 
		imageAspect!: number
		material: any
		geometry: any
		plane: any
		  aspect: number
		  basketball: any
		  volleyball: any
		  cort: any
		isBasket: boolean
 
		
		constructor(options: any) {
			
			this.scene = new THREE.Scene()
			
			this.container = options.dom
			
			this.width = this.container.offsetWidth
			this.height = this.container.offsetHeight
			this.aspect = this.width / this.height
			this.isBasket = false
			
			// // for renderer { antialias: true }
			this.renderer = new THREE.WebGLRenderer({ antialias: true })
			this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
			this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height)
			this.renderer.setSize(this.width ,this.height )
			this.renderer.shadowMap.enabled = true; // Включение рендеринга теней
			this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
			// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

			this.renderer.setClearColor(0x000000, 1)
			this.renderer.useLegacyLights = true
			this.renderer.outputEncoding = THREE.sRGBEncoding
	

			
			this.renderer.setSize( window.innerWidth, window.innerHeight )

			this.container.appendChild(this.renderer.domElement)
	


			this.camera = new THREE.PerspectiveCamera( 70,
				this.width / this.height,
				0.01,
				10
			)
	
			this.camera.position.set(1., 1, 2) 
			this.controls = new OrbitControls(this.camera, this.renderer.domElement)
			this.time = 0


			this.dracoLoader = new DRACOLoader()
			this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
			this.gltf = new GLTFLoader()
			this.gltf.setDRACOLoader(this.dracoLoader)

			this.isPlaying = true


			this.gltf.load(cancha, (gltf: any) => {
				// console.log(gltf)


		 
				this.cort = gltf.scene

				this.cort.traverse((child:any) => {
					if (child.isMesh) {
					  child.castShadow = true; // Разрешение для объекта создавать тени
					  child.receiveShadow = true; // Разрешение для объекта принимать тени
					 
					}
				});
				let scale = .001
				let positionX = 1.5
				let positionY = -.5
				let positionZ = .6

				let rotationy = -1.1

				if(this.width < 1150){
					scale = .0005
					positionX = 1.
				} 
				if(this.width < 840) {
					scale = .0003
					positionX = .7
						
				}
				if(this.width < 630) {
					rotationy = .468
					positionX = .63
					scale = .00025
					positionY = -.2
					positionZ = .3
				}
				 
				this.cort.scale.set(scale,scale,scale)
				// model.rotation.x = .3
				this.cort.rotation.y = rotationy

				this.cort.position.set(positionX,positionY,positionZ)
				
				this.gltf.load(bask, (gltf: any) => {
					this.basketball = gltf.scene

					let scaleI = .14
					let positionXI = -.9
					let positionYI = .3
					let positionZI = 1.


					if(this.width < 1150){
						scaleI = .1
						positionXI = -.0
						positionYI = .1
					} 
					if(this.width < 840) {
						scaleI = .07
						positionXI = .2
						positionYI = -.05
							
					}
					if(this.width < 630) {
						positionXI = .53
						// positionYI = -.05
						positionZI = 1.
					}
				 
					this.basketball.position.set(positionXI,positionYI,positionZI)
					this.basketball.scale.set(scaleI,scaleI,scaleI)
					
					this.basketball.traverse((child:any) => {
						if (child.isMesh) {
						  child.castShadow = true; // Разрешение для объекта создавать тени
						  child.receiveShadow = true; // Разрешение для объекта принимать тени
						 
						}
					})
					this.scene.add(this.basketball)
				})

				this.gltf.load(volley, (gltf: any) => {
					this.volleyball = gltf.scene

					let scaleI = .14
					let positionXI = 1.2
					let positionYI = .3
					let positionZI = -.1


					if(this.width < 1150){
						// scaleI = .1
						positionXI = .75
						positionZI = .35
						positionYI = -.05
					} 
					if(this.width < 840) {
						scaleI = .084
						positionXI = .65
						positionYI = -.14
						positionZI = .6
							
					}
					if(this.width < 600) {
						positionZI = .5
						positionXI = .28
						positionYI = -.12
					}
					if(this.width < 450) {
						positionYI = -.08
					
					}
	

					this.volleyball.position.set(positionXI,positionYI,positionZI)
					this.volleyball.scale.set(scaleI,scaleI,scaleI)
					
					this.volleyball.traverse((child:any) => {
						if (child.isMesh) {
						  child.castShadow = true; // Разрешение для объекта создавать тени
						  child.receiveShadow = true; // Разрешение для объекта принимать тени
						 
						}
					})
					this.scene.add(this.volleyball)
				})



				this.scene.add(this.cort)
				
				this.addObjects()		
				this.addLights() 
				this.resize()
				this.render()
				this.setupResize()
				this.eventScroll()
			})


		 

 
		}
		settings() {
			let that = this
		 
			this.settings = {
					//@ts-ignore
				progress: 0
			}
			//@ts-ignore
			this.gui = new GUI()
			this.gui.add(this.settings, 'progress', 0, 1, 0.01)
		}

	setupResize() {
		window.addEventListener('resize', this.resize.bind(this))
	}

	resize() {
		this.width = this.container.offsetWidth
		this.height = this.container.offsetHeight
		this.renderer.setSize(this.width, this.height)
		this.camera.aspect = this.width / this.height


		this.imageAspect = 853/1280
		let a1, a2
		if(this.height / this.width > this.imageAspect) {
			a1 = (this.width / this.height) * this.imageAspect
			a2 = 1
		} else {
			a1 = 1
			a2 = (this.height / this.width) / this.imageAspect
		} 


		this.material.uniforms.resolution.value.x = this.width
		this.material.uniforms.resolution.value.y = this.height
		this.material.uniforms.resolution.value.z = a1
		this.material.uniforms.resolution.value.w = a2

		this.camera.updateProjectionMatrix()



	}


	addObjects() {
		let that = this
		this.material = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader,
			fragmentShader
		})
		
		this.geometry = new THREE.PlaneGeometry(18 * this.aspect,18)
		this.plane = new THREE.Mesh(this.geometry, this.material)
		this.plane.rotation.y = .35
		this.plane.rotation.x = -.42
		this.plane.position.set(-1.6,-2,-3)
 
		this.scene.add(this.plane)
 
	}



	addLights() {
		const light1 = new THREE.AmbientLight(0xeeeeee, 1.)
		// light1.position.set(1., 4, 4); // Положение света

		// this.scene.add(light1)
		const light = new THREE.DirectionalLight(0x927FA4, 1.);
		light.position.set(-2., 4, 2); // Положение света
		light.castShadow = true; // Разрешение для света создавать тени
		light.shadow.mapSize.width = 5096;
		light.shadow.mapSize.height = 5096;
 
		light.shadow.camera.near = 0.5; // Ближняя плоскость теней
		light.shadow.camera.far = 10; 
	
  
		this.scene.add(light)

	}

	stop() {
		this.isPlaying = false
	}

	play() {
		if(!this.isPlaying) {
			this.isPlaying = true
			this.render()
		}
	}
	eventScroll() {
		let icoScale = .75
		if(this.width < 1600) icoScale = .6 
		if(this.width < 500) icoScale = .45 
		let scale = .035
		if(this.width < 900) scale = .025
		if(this.width < 550) scale = .02


		document.addEventListener('scroll', e => {
			const scrollY = window.scrollY / 690
			let xCort = 1.1
			let yCort = .35

			//@ts-ignore
			if(this.width < 1150) {
				xCort = .9	
			}
			if(this.width < 840) {
				xCort = .7	
			}
			//@ts-ignore

			if(this.width < 700) {
				xCort = .5	
				
				yCort = .55
			}
			//@ts-ignore

			if(this.width < 630) {
				yCort = .4
				xCort = .45	

			}
			//@ts-ignore
			if(this.width < 450) {
				xCort = .34	
			
			}
			this.cort.position.set(xCort, yCort + scrollY , .6)

			//x: .8,
			// z: 1.,
			// y: .42,
			if(this.isBasket) {
				let xBask = .8
				let yBask = .42
				
				let xVall = 1.08
				let yVall = .4

				//@ts-ignore
				if(this.width < 1150) {
					xBask = .7
					xVall = 1.1
				}
				//@ts-ignore
				
				if(this.width < 840) {
					xBask = .585 
					xVall = .97
				}
				//@ts-ignore
				
				if(this.width < 700) {
					xBask = .7 
					xVall = .82

					yBask = .2
					yVall = .55
				}
				//@ts-ignore

				if(this.width < 450) {
					// yBask = .56
					xBask = .75
					xVall = .75
				 

				}





				this.basketball.position.set(xBask, yBask + scrollY , 1.)
				// x: 1.08,
				// z: 1.,
				// y: .4,
				this.volleyball.position.set(xVall, yVall + scrollY , 1.)


			} else {
				let xBask = 1.25
				let yBask = .42

				let xVall = .85
				let yVall = .55

				//@ts-ignore
				if(this.width < 1150) {
					xBask = 1.105
					xVall = .79
				}
				//@ts-ignore

				if(this.width < 840) {
					xBask =  .97
					xVall = .65
				}
				//@ts-ignore
				
				if(this.width < 700) {
					xVall = .69
					yVall = .38
					yBask = .56
					xBask =  .81

				}
				//@ts-ignore
			 
				if(this.width < 450) {
					// yBask = .56
					xBask =  .756
					xVall = .8

				}
				this.basketball.position.set(xBask, yBask + scrollY , 1.)
				// x: .85,
				// z: 1.2,
				// y: .55,
				this.volleyball.position.set(xVall, yVall + scrollY , 1.2)

			}
			// this.volleyball.position.set(1.1, .35 + scrollY , .6)

		})
	}
	render() {
			if(!this.isPlaying) return

			this.time += 0.05
			this.material.uniforms.time.value = this.time 
			if(this.basketball && this.volleyball) {
				this.basketball.rotation.x = this.time / 10
				this.basketball.rotation.y = this.time / 10
				this.volleyball.rotation.x = this.time / 10
				this.volleyball.rotation.y = this.time / 10
			} 			
			//this.renderer.setRenderTarget(this.renderTarget)
			this.renderer.render(this.scene, this.camera)
			//this.renderer.setRenderTarget(null)
	
			requestAnimationFrame(this.render.bind(this))
		}
 
	}
 
 