import { ThemeProvider, createTheme } from '@mui/material';
import Routes from './routes/Routes';
import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

const font = "'Noto Sans Thai', sans-serif";


const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#dc004e',
      },
      secondary: {
        main: '#dc004e',
      },
    },
    typography: {
      fontFamily: font,
      h1: {
        fontFamily: font,
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
      h2: {
        fontFamily: font,
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
      }
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: "red",
            marginLeft: 0,
          }
        }
      }
    }
  },
);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
        <Routes />
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
