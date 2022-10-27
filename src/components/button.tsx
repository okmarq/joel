import React from 'react';

export default function Button(children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, ...buttonProps: any[]) {
	return (
		<button className='' {...buttonProps}>
			{children}
		</button>
	);
}
