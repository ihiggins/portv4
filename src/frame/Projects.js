/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Grid from '@mui/material/Unstable_Grid2'
import { useRecoilState } from 'recoil'
import { cursorState } from './State'
import { useState } from 'react'
const C = {
	container: css({
		width: '100%',
		maxWidth: '1000px',
		margin: '60px auto 20px auto',
		color: '#fff',
		'@media (max-width: 900px)': {
			maxWidth: '90%',
		},
		'@media (min-width: 901px)': {
			width: '95%',
			margin: '8em auto 0',
		},
	}),
	box: css({
		background: '#222',
		height: '50px',
		width: '100%',
		borderRadius: '20px',
	}),
	heading: css({
		margin: '0 auto 20px 0',
		// marginRight: "auto",
		fontSize: '35px',
		fontFamily: 'gil',
		fontWeight: 700,
		color: '#fff',
		cursor: 'none',
		width: 'min-content',
		textDecoration: 'underline',
	}),
	tile: css({
		width: '100%',
		background: '#222',
		borderRadius: '20px',
		padding: '3em 3em 4em',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		cursor: 'pointer',
	}),

	wrap: css({
		maxWidth: '600px',
		widows: '100%',
		overflow: 'hidden',
		borderRadius: '20px',
		height: 'auto',
	}),
	image: css({
		objectFit: 'contain',
		width: '100%',
	}),
	label: css({
		fontSize: '60px',
		fontFamily: 'gil',
		fontWeight: 700,
		color: '#14cf93',
		marginBottom: '12px',
		width: '100%',
		textAlign: 'right',
	}),
	label2: css({
		fontSize: '16px',
		fontFamily: 'questrial',
		fontWeight: 700,
		color: '#fff',
		marginBottom: '30px',
		width: '100%',
		textAlign: 'right',
	}),
}

const Projects = () => {
	const [cursorVariant, setCursorVariant] = useRecoilState(cursorState)
	const [heading, setHeading] = useState(false)

	const exptEnter = () => {
		setCursorVariant('expt')
	}
	const exptLeave = () => {
		setCursorVariant('default')
	}

	const headingEnter = () => {
		setCursorVariant('heading')
		setHeading(true)
	}

	const headingLeave = () => {
		setCursorVariant('default')
		setHeading(false)
	}

	return (
		<div css={C.container}>
			<div
				style={heading ? { textDecorationColor: '#14cf93' } : { textDecorationColor: '#fff' }}
				css={C.heading}
				onMouseEnter={headingEnter}
				onMouseLeave={headingLeave}>
				Projects
			</div>

			<div
				css={C.tile}
				onMouseDown={() => {
					window.open('https://github.com/ihiggins/expt')
				}}
				onMouseEnter={exptEnter}
				onMouseLeave={exptLeave}>
				<div css={C.label}>Expt</div>
				<div css={C.label2}>A QUIZ ANSWERING APP</div>

				<div css={C.wrap}>
					<img css={C.image} src="expt.png"></img>
				</div>
			</div>
		</div>
	)
}

export default Projects
