import React from 'react'
import { configure, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

configure({ testIdAttribute: 'data-test-id' })

const defaultTheme = {
  colors: {
    primary: '#0070f3',
  },
}

const AllProviders = ({ children, theme = defaultTheme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
