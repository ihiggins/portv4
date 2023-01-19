/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useState, useEffect } from 'react'

const C = {
	container: css({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		maxWidth: '1000px',
		margin: '60px auto 20px auto',
		color: '#fff',
		padding: '14em 0',

		'@media (max-width: 900px)': {
			maxWidth: '90%',
		},
		'@media (min-width: 901px)': {
			width: '95%',
			margin: '4em auto 0',
		},
	}),
	label: css({
		width: '100%',
		textAlign: 'center',
		fontSize: '40px',
		fontFamily: 'gil',
		fontWeight: 700,
		color: '#fff',
		marginBottom: '20px',
	}),
}

const Action = () => {
	return (
		<div css={C.container}>
			<div css={C.label}>Looking For a Developer?</div>
			<div css={{ display: 'flex', justifyContent: 'center' }}>
				<button className="action"
        onMouseDown={() => { window. open("Resume_Isaac_Higgins.pdf", '_blank')}}
        
        >
					View My Resume
					<span className="bar"></span>
				</button>
			</div>
		</div>
	)
}

export default Action
