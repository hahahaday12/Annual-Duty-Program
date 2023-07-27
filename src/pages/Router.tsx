import { createBrowserRouter } from 'react-router-dom'
import { ErrorComponent } from 'components/index'
import { SignIn, SignUp, MainHome, SchedulePage, Update } from 'pages/index'
import { StartMain, Layout, HeaderLayout } from 'components/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/',
        element: <StartMain />,
        errorElement: <ErrorComponent />
      },
      {
        path: '/signin',
        element: <SignIn />,
        errorElement: <ErrorComponent />
      },
      {
        path: '/signup',
        element: <SignUp />,
        errorElement: <ErrorComponent />
      }
    ]
  },
  {
    path: '/',
    element: <HeaderLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/home',
        element: <MainHome />,
        errorElement: <ErrorComponent />
      },
      {
        path: '/profile',
        element: <Update />,
        errorElement: <ErrorComponent />
      },
      {
        path: '/schedule',
        element: <SchedulePage />,
        errorElement: <ErrorComponent />
      }
    ]
  }
])
