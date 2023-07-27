import { createBrowserRouter, Navigate } from 'react-router-dom'
import {  ErrorComponent } from 'components/index'
import { SignIn, SignUp, MainHome, UpdateProfile, SchedulePage } from 'pages/index'
import { StartMain, Layout, HeaderLayout } from 'components/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children:[
      {
        path: '/',
        element: <StartMain />,
        errorElement: <ErrorComponent />
      },
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children:[
      {
        path: '/signin',
        element: <SignIn />,
        errorElement: <ErrorComponent />
      },
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children:[
      {
        path: '/signup',
        element: <SignUp />,
        errorElement: <ErrorComponent />
      },
    ]
  },
  {
    path: '/',
    element: <HeaderLayout />,
    errorElement: <ErrorComponent />,
    children:[
      {
        path: '/home',
        element: <MainHome />,
        errorElement: <ErrorComponent />
      },
    ]
  },
  {
    path: '/',
    element: <HeaderLayout />,
    errorElement: <ErrorComponent />,
    children:[
      {
        path: '/profile',
        element: <UpdateProfile />,
        errorElement: <ErrorComponent />
      },
    ]
  },
  {
    path: '/',
    element: <HeaderLayout />,
    errorElement: <ErrorComponent />,
    children:[
      {
        path: '/schedule',
        element: <SchedulePage />,
        errorElement: <ErrorComponent />
      },
    ]
  },












])
