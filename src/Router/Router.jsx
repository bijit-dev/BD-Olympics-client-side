import {
    createBrowserRouter
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import EventsPage from "../pages/EventsPage/EventsPage";
import MyBookings from "../pages/MyBookings/MyBookings";
import ManageEvents from "../pages/ManageEvents/ManageEvents";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivateRouter from "./PrivateRouter";
import UpdateEvent from "../pages/UpdateEvent/UpdateEvent";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/events`)
            },
            {
                path: 'eventsPage',
                Component: EventsPage,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/events`)
            },
            {
                path: 'event/:id',
                element: <PrivateRouter><EventDetails/></PrivateRouter>,
                // loader: () => fetch('http://localhost:3000/events')
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/event/${params.id}`)
            },
            {
                path: 'bookEvent',
                element: <div>this page not use</div>,
            },
            {
                path: 'myBookings',
                element: <PrivateRouter><MyBookings/></PrivateRouter>,
            },
            {
                path: 'manageEvents',
                element: <PrivateRouter><ManageEvents /></PrivateRouter>,

            },
            {
                path: 'create-event',
                element: <PrivateRouter><CreateEvent/></PrivateRouter>,
            },
            {
                path: 'updateEvent/:id',
                element: <PrivateRouter><UpdateEvent /></PrivateRouter>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/event/${params.id}`)
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'signIn',
                Component: SignIn
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
]);