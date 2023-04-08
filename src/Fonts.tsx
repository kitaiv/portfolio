import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./assets/fonts/Aspekta-100.woff2') format('woff2')
      }
      @font-face {
        font-family: 'Body Font Name';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('./assets/fonts/Aspekta-50.woff2') format('woff2')
      }
      `}
  />
)

export default Fonts