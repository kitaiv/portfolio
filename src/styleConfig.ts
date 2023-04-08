
import { extendTheme, defineStyleConfig } from "@chakra-ui/react"
import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'



const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: 'blackAlpha.600', //change the background
  },
  dialog: {
    borderRadius: 'md',
    bg: `gray.800`,
    color: 'gray.100'
  },
})

const modalTheme = defineMultiStyleConfig({
  baseStyle
})

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}


const theme = extendTheme(breakpoints, {
  components: { Modal: modalTheme },
  styles: {
    global: {
        'html, body': {
            background: 'linear-gradient(270deg, #1A202C 0%, #2D3748 54.48%);',
            overflowY: 'hidden',
            overflowX: 'hidden'
        }
    }
  },
  fonts: {
    heading: `'Heading Font Name', sans-serif`,
    body: `'Body Font Name', sans-serif`,
  },
  dialog: {
    borderRadius: 'md',
    bg: `purple.100`,
  }
})

export default theme;