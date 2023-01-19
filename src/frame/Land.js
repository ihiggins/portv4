/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { LayoutGroup, motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import Hero from './Hero'
import Grid from '@mui/material/Unstable_Grid2'
import { useState, useEffect, useRef, Suspense } from 'react'
import { useRecoilState } from 'recoil'
import { cursorState } from './State'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stage, useFBX } from '@react-three/drei'
import { useGLTF } from '@react-three/drei/core'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const C = {
	container: css({
		width: '100%',
		height: '100vh',
		overflow: 'hidden',
		zIndex: 10,
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '3em',
		position: 'relative',
	}),

	text: css({
		webkitTapHighlightColor: 'transparent',
		webkitTouchCallout: 'none',
		webkitUserSelect: 'none',
		khtmlUserSelect: 'none',
		mozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none',
		color: '#fff',
		fontFamily: 'gil2',
		fontWeight: 700,
		lineHeight: '100%',
		width: 'min-content',
		textDecoration: 'underline',
		textDecorationColor: 'transparent',
		transition: 'text-decoration 300ms',

		zIndex: 100,
		whiteSpace: 'nowrap',
		'@media (max-width: 809px)': {
			fontSize: 'calc(11.60714vw + 30px)',
		},
		'@media (min-width: 810px)': {
			fontSize: 'calc(12vw );',
		},
	}),
	blob: css({
		position: 'absolute',
		right: '0',
	}),
}

const Land = () => {
	const videoRef = useRef()

	const [cursorVariant, setCursorVariant] = useRecoilState(cursorState)
	const [active, setActive] = useState(0)

	const Enter = (index) => {
		setActive(index)
		setCursorVariant('heading')
	}
	const Leave = () => {
		setActive(0)
		setCursorVariant('default')
	}

	const { height, width } = useWindowDimensions()
	let glb = useGLTF(`${process.env.PUBLIC_URL}/scene.glb`)
	glb.materials['Material.001'].color.setStyle('#222222')
	glb.nodes.Light.intensity = 0
	glb.nodes.Area.intensity = 0

	return (
		<div css={C.container}>
			<div css={C.blob}>
				<Canvas
					css={{
						width: '60vw !important',
						height: 'calc(100vh - 80px) !important',
					}}>
					<Suspense fallback={null}>
						<primitive object={glb.scene} scale={1.5} />
					</Suspense>
					<Environment preset="sunset" />
					<OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} makeDefault />
				</Canvas>
			</div>

			{width > 900 ? (
				<>
					<div
						css={C.text}
						style={
							active === 1
								? {
										textDecorationColor: '#14cf93',
								  }
								: { textDecorationColor: 'transparent' }
						}
						onMouseEnter={() => {
							Enter(1)
						}}
						onMouseLeave={Leave}>
						Aspiring
					</div>
					<div
						css={{
							display: 'flex',
							gap: '30px',
							width: '100%',
							alignItems: 'flex-start',
							justifyContent: 'flex-end',
						}}>
						<div
							style={
								active === 2
									? {
											textDecorationColor: '#fff',
									  }
									: { textDecorationColor: 'transparent' }
							}
							onMouseEnter={() => {
								Enter(2)
							}}
							onMouseLeave={Leave}
							css={[
								C.text,
								{
									fontFamily: 'maz',
									color: '#14cf93',
									fontWeight: 400,
									textAlign: 'right',
									marginLeft: '100px',
								},
							]}>
							Junior
						</div>
						<div
							style={
								active === 3
									? {
											textDecorationColor: '#14cf93',
									  }
									: { textDecorationColor: 'transparent' }
							}
							onMouseEnter={() => {
								Enter(3)
							}}
							onMouseLeave={Leave}
							css={C.text}>
							Developer
						</div>
					</div>
				</>
			) : (
				<div css={C.text}>Aspiring Junior Developer</div>
			)}

			{/* <Grid container height="auto">
        <Grid xs={12} md={"auto"}>
          <div
            css={{
              position: "relative",
              height: "auto",
              overflow: "hidden",
              width: "min-content",
            }}
          >
            <motion.div
              id="SLIDER"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 2, delay: 1.6, ease: "easeInOut" }}
            >
              <div css={[C.fade, C.text]}>Aspiring</div>
            </motion.div>
          </div>
        </Grid>

        {width < 900 ? (
          <Grid xs={12} md={12}>
            <div
              css={{
                width: "100%",
                textAlign: "end",
                overflow: "hidden",
              }}
            >
              <motion.div
                id="SLIDER"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 2, delay: 1.6, ease: "easeInOut" }}
              >
                <div css={{ position: "relative", overflow: "hidden" }}>
                  <motion.div
                    id="SLIDER"
                    css={{
                      width: "100%",
                      height: "100%",
                      background: "#14cf93",
                      padding: "1em",
                      position: "absolute",
                    }}
                    initial={{ x: 0 }}
                    animate={{ x: "110%" }}
                    transition={{
                      duration: 0.5,
                      delay: 3.7,
                      ease: "easeInOut",
                    }}
                  ></motion.div>
                  <div
                    css={[
                      {
                        fontFamily: "maz",
                        color: "#14cf93",
                        fontWeight: 400,
                      },
                      C.text,
                    ]}
                  >
                    Junior
                  </div>
                </div>
              </motion.div>
            </div>
          </Grid>
        ) : (
          <>

            <Grid xs={12} md={12}></Grid>


            <Grid xs={5} md={'auto'}>
              <div
                css={{
                  position: "relative",
                  height: "auto",
                  overflow: "hidden",
                  width: "100%",
                  textAlign: "right",
                  marginLeft: "auto",
                  flexGrow: 1,
                }}
              >
                <motion.div
                  id="SLIDER"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2, delay: 2.4, ease: "easeInOut" }}
                >
                  <div css={{ position: "relative", overflow: "hidden" }}>
                    <motion.div
                      id="SLIDER"
                      css={{
                        width: "100%",
                        height: "100%",
                        background: "#14cf93",
                        padding: "1em",
                        position: "absolute",
                      }}
                      initial={{ x: 0 }}
                      animate={{ x: "110%" }}
                      transition={{
                        duration: 0.5,
                        delay: 3.7,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                    <div
                      css={[
                        {
                          fontFamily: "maz",
                          color: "#14cf93",
                          fontWeight: 400,
                        },
                        C.text,
                      ]}
                    >
                      Junior
                    </div>
                  </div>
                </motion.div>
              </div>
            </Grid>
          </>
        )}

        <Grid xs={12} md='auto'>
          <div
            css={{
              position: "relative",
              height: "auto",
              overflow: "hidden",
            }}
          >
            <motion.div
              id="SLIDER"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 2, delay: 2.4, ease: "easeInOut" }}
            >
              <div css={[C.fade, C.text]}>Developer</div>
            </motion.div>
          </div>
        </Grid>
      </Grid> */}
		</div>
	)
}

export default Land

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height,
	}
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}
