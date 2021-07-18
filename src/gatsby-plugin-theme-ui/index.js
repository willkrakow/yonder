import "@fontsource/diplomata"
import "@fontsource/courier-prime"
import "@fontsource/aileron/600.css"
import "@fontsource/aileron/300.css"
import "@fontsource/courgette"

import colors from './colors'
import spaces from './spaces'

const theme = {
    breakpoints: [...spaces.breakpoints],
    space: [...spaces.space],
    fonts: {
        body:
            '"Arial", sans-serif',
        heading: 'inherit',
        display: '"Garamond", serif',
        monospace: '"Courier Prime", monospace',
    },
    fontSizes: [...spaces.fontSizes],
    fontWeights: {
        body: 300,
        heading: 700,
        bold: 600,
    },
    sizes: [...spaces.space],
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    colors: {...colors},
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
        },
        body: {
            fontFamily: 'body',
            lineHeight: "body",
            fontWeight: "body"
        }
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            variant: 'text.heading',
            fontSize: 5,
            mb: 1,
            mt: 0,
            color: "light"
        },
        h2: {
            fontFamily: "display",
            fontSize: 5,
            textShadow: "2px 2px 4px rgba(0,0,0,0.4)"
        },
        h3: {
            fontSize: 3,
            mb: 2,
            fontFamily: 'display',
            color: "primary",
            textTransform: "uppercase",
            letterSpacing: `${spaces.space[0]}px`,
        },
        h4: {
            variant: 'text.body',
            color: colors.primary,
            fontSize: 2,
            fontWeight: "bold",
            letterSpacing: `1px`,
            mb: 0,
            mt: 0,
        },
        h5: {
            fontFamily: "'Arial', sans-serif",
            fontSize: 1,
            color: colors.primary,
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: "1px",
            margin: 0,
        },
        h6: {
            variant: 'text.heading',
            fontSize: 0,
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        ul: {
            paddingInlineStart: 0,
        },
        li: {
            listStyleType: 'none'
        },
        p: {
            variant: "text.body",
            fontSize: 1,
            color: colors.text,
            mt: 1,
            mb: 4,
        },
        address: {
            fontWeight: "bold",
        },
    },
    forms: {
        label: {
            variant: 'text.body',
            fontWeight: 'bold',
            color: "primary"
        },
        input: {
            borderRadius: 0,
            border: `2px solid ${colors.primary}1f`,
            borderBottom: `4px solid ${colors.primary}1f`,
            backgroundColor: `#fffffe`,
            fontFamily: "'Arial', sans-serif",
            fontSize: 1,
            fontWeight: 300,
            px: 4,
            mb: 5,
        },
        textarea: {
            backgroundColor: `#fffffe`,
            borderRadius: 0,
            border: `2px solid ${colors.primary}1f`,
            borderBottom: `4px solid ${colors.primary}1f`,
            mb: 5,
            fontFamily: "'Arial', sans-serif",
            fontSize: 1,
            fontWeight: 300,
            px: 4,
        },
        select: {
            backgroundColor: `#fffffe`,
            borderRadius: 0,
            border: `2px solid ${colors.primary}1f`,
            borderBottom: `4px solid ${colors.primary}1f`,
            fontFamily: "'Arial', sans-serif",
            fontSize: 1,
            fontWeight: 300,
            px: 4,
            mb: 5,
            'svg': {
                height: '100%'
            }
        }
    },
    buttons: {
        primary: {
            backgroundColor: colors.primary,
            color: colors.light,
            py: `${spaces.space[3]}px`,
            px: `${spaces.space[5]}px`,
            fontFamily: "'Arial', sans-serif",
            borderRadius: `${spaces.space[1]}px`,
            cursor: "pointer",
            transition: 'all 0.2s ease',
            '&:hover': {
                backgroundColor: `${colors.primary}f1`,
                transform: 'translateY(-2px)',
                boxShadow: `0 1px 2px 1px ${colors.primary}ba`
            }
        },
        secondary: {
            backgroundColor: "transparent",
            color: colors.primary,
            border: `2px solid ${colors.primary}`
        },
        icon: {
            backgroundColor: "transparent",
            color: colors.light,
            py: 0,
            border: "none",
            fontSize: spaces.space[4],
        }
    },
    cards: {
        primary: {
            p: 1,
            borderRadius: 1,
            position: "relative",
            backgroundColor: colors.background,
            boxShadow: "2px 2px 4px 2px rgba(0,0,0,0.1)",
        }
    },
    badges: {
        primary: {
            backgroundColor: colors.primary,
            color: colors.background,
        },
    },
    layout: {
        header: {
            title: {
                display: "block",
                h1: {
                    mt: 0
                }
            }
        },
        footer: {
            color: colors.light,
            backgroundColor: colors.background,
            textAlign: "center",
            p: 5,
            background: colors.primary,
            address: {
                "*": {
                    color: colors.light,
                }
            }
        },
        main: {
            color: colors.text,
            margin: 'auto',
            p: spaces.space[2],
            position: 'relative',
            maxWidth: spaces.space[11]
        },
        nav: {
            color: colors.muted,
            backgroundColor: colors.background,
            maxWidth: spaces.space[9],
            margin: 'auto',

            ul: {
                display: 'flex',
                justifyContent: 'space-around',
                listStyleType: 'none',
                padding: 0
            }
        },
        container: {
            py: 6,
        }
    },
}

export default theme