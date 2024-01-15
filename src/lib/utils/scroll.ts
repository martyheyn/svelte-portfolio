export function scrollToSection(
	event: MouseEvent & {
		currentTarget: EventTarget & HTMLButtonElement;
	},
	id: string
) {
	event.preventDefault();
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
}

export const animateOnSCroll = (
	targetElement: HTMLElement | HTMLElement[],
	observerCallback: (entries: IntersectionObserverEntry[]) => void,
	rootMargin: string = '-150'
) => {
	// Function to handle Intersection Observer callback
	const observer = new IntersectionObserver(observerCallback, {
		rootMargin: `0px 0px ${rootMargin}px 0px`
	});

	// Ref for the element to be observed
	if (!targetElement) return;

	if (!Array.isArray(targetElement)) {
		observer.observe(targetElement);
	} else if (targetElement.length > 1) {
		targetElement.forEach((el) => {
			observer.observe(el);
		});
	} else {
		observer.observe(targetElement[0]);
	}
};
