import { addParameters, configure } from '@storybook/react';
import theme from './theme';
import { addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { withA11y } from '@storybook/addon-a11y';


const req = require.context('../src', true, /\.story.js$/);
addDecorator(addReadme);
addDecorator(withA11y)

// addDecorator(withA11y)

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

addParameters({
	options: {
		showPanel: true,
		theme: theme,
		panelPosition: "right",

	}
});

configure(loadStories, module);