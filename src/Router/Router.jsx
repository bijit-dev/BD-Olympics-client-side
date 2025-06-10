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

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'eventsPage',
                Component: EventsPage
            },
            {
                path: 'events/:id',
                // Component: EventDetails
            },
            {
                path: 'bookEvent',
                Component: BookEvent
            },
            {
                path: 'myBookings',
                Component: MyBookings
            },
            {
                path: 'manageEvents',
                Component: ManageEvents
            },
            {
                path: 'create-event',
                // Component: createEvent
            },
            {
                path: 'updateEvent/:id',
                // Component: updateEvent
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
]);