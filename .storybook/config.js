import { addDecorator, addParameters, configure } from '@storybook/react'

import React from 'react'
import { create as createTheme } from '@storybook/theming'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { withOptions } from '@storybook/addon-options'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)
function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

addParameters({
    options: {
        theme: createTheme({
            base: 'light',
            brandTitle: 'React APP Model',
            brandUrl: '',
        }),
    },
})
addDecorator(withInfo)
addDecorator(withKnobs)

configure(loadStories, module)
