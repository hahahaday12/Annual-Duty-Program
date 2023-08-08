import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from 'pages/Router'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/index'
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(

  <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </ThemeProvider>
)



