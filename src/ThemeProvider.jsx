import {
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
    createTheme,
    useTheme,
} from "@mui/material";
import React, { useMemo, useEffect, useReducer } from "react";

const ThemeProvider = ({ children }) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const currentTheme = useTheme();

    const appTheme = useMemo(() => createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "rgba(235, 232, 222, 1)", // variable-collection-sand-2
            },
            secondary: {
                main: "rgba(214, 210, 188, 1)", // variable-collection-sand-3
            },
            error: {
                main: "rgba(237, 50, 65, 1)", // variable-collection-error-3
            },
            warning: {
                main: "rgba(232, 99, 57, 1)", // variable-collection-warning-3
            },
            info: {
                main: "rgba(134, 157, 151, 1)", // variable-collection-grey-5
            },
            success: {
                main: "rgba(41, 130, 103, 1)", // variable-collection-success-3
            },
            background: {
                default: "#000000",
                paper: "#000000",
            },
            text: {
                primary: "rgba(235, 232, 222, 1)", // variable-collection-sand-2
                secondary: "rgba(214, 210, 188, 1)", // variable-collection-sand-3
                disabled: "rgba(113, 113, 122, 1)", // colors-zinc-500
                lightText: "#A1A1AA",  // Add the new color
            },
            lightGrey: "rgba(255, 255, 255, 0.1)",  // Add the new color
            divider: "rgba(113, 113, 122, 1)", // colors-zinc-950-10
            // Custom colors from tailwind config
            sand: {
                1: "rgba(248, 247, 244, 1)",
                2: "rgba(235, 232, 222, 1)",
                3: "rgba(214, 210, 188, 1)",
                4: "rgba(187, 180, 144, 1)",
                5: "rgba(154, 148, 118, 1)",
                6: "rgba(72, 68, 52, 1)",
                7: "rgba(22, 20, 13, 1)",
            },
            grey: {
                0: "rgba(255, 255, 255, 1)", // white
                1: "rgba(230, 238, 236, 1)",
                2: "rgba(214, 224, 222, 1)",
                3: "rgba(198, 211, 208, 1)",
                4: "rgba(166, 184, 180, 1)",
                5: "rgba(134, 157, 151, 1)",
                6: "rgba(102, 130, 123, 1)",
                7: "rgba(42, 62, 57, 1)",
                8: "rgba(14, 21, 19, 1)",
                9: "rgba(0, 0, 0, 1)", // black
            },
            zinc: {
                50: "rgba(250, 250, 250, 1)",
                400: "rgba(161, 161, 170, 1)",
                500: "rgba(113, 113, 122, 1)",
                950: "rgba(9, 9, 11, 1)",
            },
        },
        typography: {
            fontFamily: "'Inter', Helvetica",
            h1: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.24px",
                lineHeight: "normal",
            },
            h2: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.09px",
                lineHeight: "normal",
            },
            h3: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.08px",
                lineHeight: "normal",
            },
            h4: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0px",
                lineHeight: "normal",
            },
            h5: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0px",
                lineHeight: "normal",
            },
            h6: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "48px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "100%",
            },
            subtitle1: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "20px",
                fontWeight: 500,
                letterSpacing: "0px",
                lineHeight: "28px",
            },
            subtitle2: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0px",
                lineHeight: "20px",
            },
            body1: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "0px",
                lineHeight: "24px",
            },
            body2: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "0px",
                lineHeight: "20px",
            },
            button: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "normal",
                textTransform: "none",
            },
            caption: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0px",
                lineHeight: "16px",
            },
            overline: {
                fontFamily: "'Inter', Helvetica",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.15px",
                lineHeight: "14px",
            },
        },
        shape: {
            borderRadius: 12,
        },
        spacing: 4,
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                        boxShadow: "0px 4px 4px rgba(214, 210, 188, 1)",
                        borderRadius: "8px",
                    },
                    contained: ({ theme }) => ({
                        background:
                            "linear-gradient(180deg, rgba(248,247,244,1) 0%, rgba(154,148,118,1) 100%)",
                        color: theme.palette.sand[7],
                    }),
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage:
                            "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
                        borderRadius: "12px",
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundImage:
                            "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
                        borderRadius: "12px",
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        ...theme.typography.body1,
                    }),
                    head: ({ theme }) => ({
                        ...theme.typography.subtitle2,
                        fontWeight: 600,
                    }),
                    body: ({ theme }) => ({
                        ...theme.typography.body2,
                    }),
                },
            },
            MuiListItemText: {
                styleOverrides: {
                    primary: ({ theme }) => ({
                        ...theme.typography.subtitle2,
                    }),
                    secondary: ({ theme }) => ({
                        ...theme.typography.body2,
                        color: theme.palette.text.secondary,
                    }),
                },
            },
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: "#000000",
                        color: "rgba(235, 232, 222, 1)",
                    },
                },
            },
            MuiGrid: {
                styleOverrides: {
                    item: {
                        "&:first-child": {
                            paddingLeft: 3,
                            paddingRight: 8,
                        },
                        "&:last-child": {
                            paddingLeft: 0,
                        },
                    },
                },
            },
        },
    }), []);

    useEffect(() => {
        forceUpdate();
        const timer = setInterval(forceUpdate, 100); // Force update every 100ms
        return () => clearInterval(timer);
    }, [appTheme, currentTheme]);

    return (
        <MuiThemeProvider theme={appTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
