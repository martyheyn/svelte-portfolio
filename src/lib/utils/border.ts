export const borderRaduis = (index: number, length: number) => {
	let border = 'border-l border-t ';
	if (index > length / 2 - 1) {
		border += ' md:border-b';
	}

	if (index % 2 !== 0 && index !== length / 2 - 1 && index !== length - 1) {
		border += ' border-r md:border-r-0 md:border-l';
	}

	if (index % 2 === 1 && index !== length - 1) {
		border += ' border-l border-r md:border-r-0';
	}

	switch (index) {
		case 0:
			border += ' rounded-tl-md';
			break;
		case 1:
			border += ' rounded-tr-md md:rounded-tr-none';
			break;
		case length - 1:
			border += ' rounded-br-md border-r md:border-l border-b ';
			break;
		case length / 2:
			border += ' md:rounded-bl-md';
			break;
		case length / 2 - 1:
			border += ' rounded-tr-none md:rounded-tr-md md:border-r border-l';
			break;
		case length - 2:
			border += ' rounded-bl-md md:rounded-bl-none border-b';
			break;
		default:
			border += '';
			break;
	}

	return border;
};
