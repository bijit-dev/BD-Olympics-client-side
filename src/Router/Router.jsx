import {
    createBrowserRouter
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import EventsPage from "../pages/EventsPage/EventsPage";
import BookEvent from "../pages/BookEvent/BookEvent";
import MyBookings from "../pages/MyBookings/MyBookings";
import ManageEvents from "../pages/ManageEvents/ManageEvents";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3000/events')
            },
            {
                path: 'eventsPage',
                Component: EventsPage,
                loader: () => fetch('http://localhost:3000/events')
            },
            {
                path: 'event/:id',
                element: <PrivateRouter><EventDetails/></PrivateRouter>,
                // loader: () => fetch('http://localhost:3000/events')
                loader: ({ params }) => fetch(`http://localhost:3000/event/${params.id}`)
            },
            {
                path: 'bookEvent',
                element: <PrivateRouter><BookEvent/></PrivateRouter>,
            },
            {
                path: 'myBookings',
                element: <PrivateRouter><MyBookings/></PrivateRouter>,
            },
            {
                path: 'manageEvents',
                element: <PrivateRouter><ManageEvents/></PrivateRouter>,
            },
            {
                path: 'create-event',
                element: <PrivateRouter><CreateEvent/></PrivateRouter>,
            },
            {
                path: 'updateEvent/:id',
                // element: <PrivateRouter><UpdateEvent/></PrivateRouter>,
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