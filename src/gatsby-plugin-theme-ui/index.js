
import spaces from './spaces'
import { lighten, alpha, darken  } from '@theme-ui/color'


const theme = {
    initialColorModeName: "dark",
    breakpoints: [...spaces.breakpoints],
    space: [...spaces.space],
    fonts: {
        body:
            '"Roboto", sans-serif',
        heading: "'Georgia', serif",
        display: '"Georgia", serif',
        monospace: '"Courier", monospace',
    },
    fontSizes: [...spaces.fontSizes],
    fontWeights: {
        body: 200,
        heading: 700,
        bold: 600,
    },
    sizes: [...spaces.space],
    lineHeights: {
        body: 1.75,
        heading: 1.125,
    },
    colors: {
        background: "hsl(234, 20%, 30%)",
        text: "hsl(52, 50%, 91%)",
        primary: "hsl(37, 79%, 75%)",
        accent: "hsl(13, 68%, 63%)",
        secondary: "hsl(37, 79%, 75%)",
        muted: "hsl(52, 10%, 71%)",
        warning: "hsl(268, 53%, 63%)",
        light: "hsl(52, 50%, 91%)",
        dark: "hsl(230, 34%, 18%)",
        modes: {
            light: {
                background: "hsl(52, 50%, 91%)",
                text: "hsl(234, 20%, 30%)",
                primary: "hsl(13, 68%, 63%)",
                accent: "hsl(234, 20%, 30%)",
                secondary: "hsl(234, 20%, 30%)",
                muted: "hsl(234, 10%, 50%)",
                warning: "hsl(276, 45%, 53%)",
                light: "hsl(52, 50%, 91%)",
                dark: "hsl(230, 34%, 18%)",
            },
        },
    },
    letterSpacings: ["0px", "1px", "2px", "4px"],
    borderWidths: ["0px", "1px", "2px", "4px", "8px"],
    radii: ["1px", "4px", "8px"],
    shadows: {
        "default": `4px 4px 8px rgba(0,0,0,0.2)` ,
        "sm": `0px 2px 4px rgba(0,0,0,0.225)`,
        "lg": `0px 8px 12px 0px rgba(0,0,0,0.25)`,
        "primary": "6px 6px 0 hsla(0, 0%, 98%, 0.8)",
        "secondary": "6px 6px 0 hsl(201, 24%, 47%)",
        "accent": "4px 4px 8px rgba(0, 0, 0, 0.3), 16px 16px 0 #c96"
    },
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
            backgroundColor: "background",
        },
        h1: {
            fontFamily: "'Rozha One', serif",
            fontSize: 6,
            lineHeight: 'revert',
            color: "primary"
        },
        h2: {
            fontFamily: "'Rozha One', serif",
            fontSize: "calc(3.4rem + 3vw)",
            fontWeight: "bold",
            letterSpacing: 0,
            color: "accent",
            margin: 'auto',
            mt: 4,
            mb: 6,
            lineHeight: 1.25
        },
        h3: {
            fontSize: 5,
            mb: 4,
            fontFamily: "'Rozha One', serif",
            color: "primary",
            fontWeight: 200,
            letterSpacing: 1,
            position: "relative",
            lineHeight: "heading",
            borderLeftStyle: "solid",
            borderLeftWidth: 4,
            borderLeftColor: "accent",
            pl: 3,
            ml: -4
        },
        h4: {
            variant: 'text.body',
            color: "text",
            fontSize: 2,
            fontWeight: "bold",
            letterSpacing: `1px`,
            mb: 3,
            mt: 0,            
        },
        h5: {
            fontFamily: "display",
            fontSize: 1,
            color: "primary",
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: "2px",
            margin: 0,
            mb: 3,
        },
        h6: {
            fontSize: 0,
            my: 2,
            fontfamily: "body",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "muted",
            letterSpacing: 1,
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
            marginLeft: [0,0,4],
            listStyleType: 'none',
            mt: 2,
        },
        li: {
            listStyleType: 'none',
            mb: 3,
            p: 3,
            transition: "all 0.4s ease",
            position: "relative",
            "&::before": {
                content: '""',
                padding: "7px 2px",
                backgroundColor: "primary",
                boxShadow: "8px 0 0 rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
                position: "absolute",
                left: -5,
                top: 0,
                bottom: 0,
                height: "initial"
            },
        },
        p: {
            variant: "text.body",
            fontSize: 1,
            color: "text",
            mt: 1,
            mb: 4,
        },
        address: {
            fontWeight: "bold",
        },
        a: {
            fontSize: 1,
            textDecoration: "none",
            textDecorationThickness: 3,
            color: "muted",
            transition: "all 0.4s ease",
            
        }
    },
    links: {
        nav: {
            fontSize: 0,
            textDecoration: "none",
            fontWeight: "body",
            py: 3,
            textTransform: "uppercase",
            color: "primary",
            letterSpacing: 2,
            transition: "all 0.4s ease",
            borderBottomStyle: "solid",
            borderBottomWidth: 2,
            borderBottomColor: "transparent",
            "&:hover": {
                color: "primary",
                borderBottomColor: "primary",
                },
        },
        text: {
                color: "accent",
                letterSpacing: 1,
                borderBottomColor: "muted",
                borderBottomStyle: "solid",
                borderBottomWidth: 2,
                cursor: "pointer",
                transition: "all 0.2s ease",
                py: 3,
                "&:hover": {
                    borderBottomColor: "accent",
                    color: "primary"
                }
            },
            primary: {
                color: "muted",
                letterSpacing: 1,
                borderBottomColor: "transparent",
                borderBottomStyle: "inset",
                borderBottomWidth: 1,
                transition: "all 0.2s ease",
                "&:hover": {
                    color: "primary",
                    borderBottomColor: "primary",
                }
            }
    },
    forms: {
        label: {
            variant: 'text.body',
            fontWeight: 'bold',
            color: "muted"
        },
        switch: {
            backgroundColor: 'background',
            'div': {
                backgroundColor: 'primary'
            },
            mr: 0,
            'input:checked ~ &': {
                backgroundColor: 'background',
                color: "primary",
                'div': {
                    backgroundColor: 'primary'
                }
            },
        },
        input: {
            borderRadius: 0,
            border: 'none',
            borderBottomStyle: "solid",
            borderBottomWidth: 3,
            borderColor: "primary",
            color: "primary",
            fontFamily: "body",
            fontSize: 1,
            fontWeight: 300,
            px: 4,
            mb: 5,
        },
        textarea: {
            borderRadius: 0,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "primary",
            mb: 5,
            fontFamily: "body",
            fontSize: 1,
            fontWeight: 300,
            px: 4,
        },
        select: {
            borderRadius: 0,
            borderStyle: "style",
            borderWidth: 2,
            borderColor: "primary",
            fontFamily: "body",
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
        close: {
            color: "accent",
            borderRadius: "50%",
            backgroundColor: darken("background", 0.05),
            boxShadow: "sm",
            fontSize: "1.5rem",
            cursor: "pointer",
            transition: "all 0.2s ease",
            "&:hover": {
                backgroundColor: "accent",
                color: "light",
            }
        },
        primary: {
            backgroundColor: "secondary",
            color: "background",
            py: 3,
            fontWeight: "body",
            px: 5,
            my: 4,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontSize: 1,
            fontFamily: "body",
            borderRadius: 0,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "transparent",
            cursor: "pointer",
            transition: 'all 0.2s ease',
            '&:hover': {
                background: t => `linear-gradient(
                    90deg,
                    ${lighten("accent", 0.15)(t)},
                    ${lighten("accent", 0.00)(t)})`,
                transform: 'translate(-2px, -2px)',
                boxShadow: `lg`,
            },
            "&.disabled": {
                backgroundColor: "secondary",
                color: "muted",
            },
            "&[disabled], &[aria-disabled=true]": {
                backgroundColor: (t) => `${lighten("accent", 0.4)(t)}`,
                color: "muted",
                cursor: "not-allowed",
            },
        },
        secondary: {
            backgroundColor: (t) => `${alpha("background", 0.9)(t)}`,
            color: "secondary",
            borderWidth: 3,
            borderStyle: "solid",
            borderColor: "secondary",
            borderRadius: 0,
            fontSize: 1,
            letterSpacing: 2,
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: "body",
            fontFamily: "body",
            transition: "all 0.2s ease",
            px: 5,
            py: 3,
            my: 4,
            "&:hover": {
                backgroundColor: "primary",
                color: "background",
                boxShadow: "lg",
                transform: "translate(-2px, -2px)",
            },
        },
        icon: {
            backgroundColor: "transparent",
            color: "light",
            py: 0,
            border: "none",
            fontSize: spaces.space[4],
        },
        action: {
            color: "text",
            pt: 2,
            pb: 1,
            cursor: "pointer",
            fontFamily: "body",
            fontSize: 1,
            fontWeight: "normal",
            transition: "all 0.2s ease",
            textAlign: "left",
            borderRadius: 0,
            backgroundColor: "transparent",
            borderBottomColor: (t) => `${alpha("accent", 0.9)(t)}`,
            borderBottomStyle: "solid",
            letterSpacing: 1,
            borderBottomWidth: 3,
            "&:hover": {
                backgroundColor: (t) => `${alpha("accent", 0.5)(t)}`,
                borderBottomColor: "accent",
                color: "text",
            },
            "&.active": {
                backgroundColor: "accent",
                color: "light"
            },
        },
        search: {
            color: "background",
            backgroundColor: "primary",
            borderRadius: 0,
            fontFamily: "body",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
                backgroundColor: darken("primary", 0.1),
            }
        },
    },
    cards: {
        primary: {
            position: "relative",
            backgroundColor: "background",
            boxShadow: "lg",
            borderRadius: 1,
        }
    },
    badges: {
        primary: {
            backgroundColor: "accent",
            color: "light",
            px: 4,
            mb: 4,
            textTransform: "lowercase",
            letterSpacing: 1,
            fontWeight: "bold",
            width: "min-content",
            mr: 4
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
        main: {
            color: "text",
            margin: 'auto',
            position: 'relative',
            scrollBehavior: "smooth",
        },
        nav: {
            color: "muted",
            backgroundColor: "background",
            margin: 'auto',
        },
        container: {
            py: 6,
            px: [4, 5, 6],
            maxWidth: "1280px",
        },
        links: {
            primary: {
                color: "muted",
                fontSize: 1,
            },
            nav: {
                p: 3,
                color: "primary",
                letterSpacing: 1,
                fontWeight: 200,
            }
        }
    },
}

export default theme