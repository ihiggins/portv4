/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { LayoutGroup, motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const C = {
	container: css({
		position: 'fixed',
		left: 0,
		top: 0,
		width: '100vw',
		height: '100vh',
		overflow: 'hidden',
		zIndex: 300,
		display: 'flex',
		justifyContent: 'space-between',
		padding: '22px',
		alignItems: 'center',
		flexDirection: 'column',
		background: '#151515',
	}),
	text: css({
		display: 'flex',
		flexDirection: 'row',
		fontSize: 'clamp(1rem, 10vw, 5rem)',
		color: 'white',
		gap: '12px',
		alignItems: 'center',
		width: 'min-content',
	}),
	slide: css({
		width: '100vw',
		height: '100vh',
		background: '#14cf93',
		zIndex: 110,
		position: 'absolute',
		top: 0,
		left: 0,
	}),
	slide2: css({
		width: '100vw',
		height: '100vh',
		background: '#151515',
		zIndex: 120,
		position: 'absolute',
		top: 0,
		left: 0,
	}),
}

const Load = ({ setState }) => {
	const [isVisible, setVisible] = useState(true)

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					css={C.container}
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					// transition={{ duration: 1}}
				>
					<div />
					<>
						<motion.div
							css={C.slide}
							initial={{ y: '-100vh' }}
							animate={{ y: 0 }}
							transition={{ duration: 0.6, delay: 2.2, ease: 'easeInOut' }}
						/>
						<motion.div
							css={C.slide2}
							initial={{ y: '-100vh' }}
							animate={{ y: 0 }}
							transition={{ duration: 0.5, delay: 2.6, ease: 'easeInOut' }}
							onAnimationComplete={() => setVisible(false)}
						/>
					</>

					<LayoutGroup>
						<div css={C.text}>
							<motion.div
								css={{
									fontFamily: "'League Spartan'",
								}}>
								Isaac
							</motion.div>

							<motion.div
								css={{
									fontFamily: "'maz'",
									color: '#14cf93',
								}}>
								Higgins
							</motion.div>

							<motion.div
								initial={{ opacity: 0, width: 0 }}
								animate={{ opacity: 1, width: 'min-content' }}
								transition={{ delay: 1 }}
								css={{
									whiteSpace: 'nowrap',
									fontFamily: "'League Spartan'",
								}}>
								is a
							</motion.div>
						</div>
					</LayoutGroup>

					<div className="lds-grid">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Load
