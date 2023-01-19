/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { cursorState } from './State'
const C = {
	container: css({
		width: '100%',
		height: '80px',
		display: 'flex',
		background: '#111111',
		position: 'absolute',
		zIndex: 100,
		color: '#e4e4e4',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '1.5em 2em',
	}),
	title: css({
		fontSize: '18px',
		textDecoration: 'underline',
		fontFamily: 'gil',
		padding: '0.5em',
		borderRadius: '8px',
		transition: 'outline-width 100ms ease-in-out',
		cursor: 'pointer',
	}),
}

const Nav = () => {
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

	return (
		<div css={C.container}>
			<div
				onMouseDown={() => {
					document.querySelector('.app').scrollTo({ top: 0, behavior: 'smooth' })
				}}>
				<h1
					style={
						active === 1
							? {
									outline: '2px solid #14cf93',
							  }
							: { outline: '0px solid #14cf93' }
					}
					onMouseEnter={() => {
						Enter(1)
					}}
					onMouseLeave={Leave}
					css={C.title}>
					Isaac Higgins
				</h1>
			</div>
			<div css={{ display: 'flex', gap: '1em', marginRight: '1em' }}>
				<IconButton
					onMouseDown={() => {
						window.open('https://github.com/ihiggins')
					}}
					size="small"
					css={{ transition: 'outline-width 100ms ease-in-out' }}
					style={
						active === 2
							? {
									outline: '2px solid #14cf93',
							  }
							: { outline: '0px solid #14cf93' }
					}
					onMouseEnter={() => {
						Enter(2)
					}}
					onMouseLeave={Leave}>
					<GitHubIcon sx={{ color: '#e4e4e4' }} />
				</IconButton>

				<IconButton
					onMouseDown={() => {
						window.open('https://www.linkedin.com/in/i-higgins/')
					}}
					css={{ transition: 'outline-width 100ms ease-in-out' }}
					size="small"
					style={
						active === 3
							? {
									outline: '2px solid #14cf93',
							  }
							: { outline: '0px solid #14cf93' }
					}
					onMouseEnter={() => {
						Enter(3)
					}}
					onMouseLeave={Leave}>
					<LinkedInIcon sx={{ color: '#e4e4e4' }} />
				</IconButton>
			</div>
		</div>
	)
}

export default Nav
