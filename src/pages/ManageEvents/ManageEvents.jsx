import useAuth from '../../hooks/useAuth';
import { Suspense, useState } from 'react';
import MyEvents from './MyEvents';
import { eventsCreatedByPromise } from '../../api/api';
import Loader from '../../components/Loader';
import { NavLink } from 'react-router';
import { MdCreateNewFolder } from 'react-icons/md';
import { CiBoxList } from 'react-icons/ci';
import { CgMenuGridR } from 'react-icons/cg';
import MyEventCards from './MyEventCards';

const ManageEvents = () => {
    const { user } = useAuth();
    const [toggle, setToggle] = useState(true);

    const handleCard = () => {
        setToggle(true)
    }
    const handleTable = () => {
        setToggle(false)
    }


    return (
        <div className='container mx-auto px-4 py-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>Manage Events</h1>
                    <p className='mb-4'>Here you can manage your events, including editing and deleting them.</p>
                </div>
                <div className='flex gap-6'>
                    <NavLink to="/create-event" className='btn btn-soft border-2 border-blue-400 btn-info font-bold lg:text-lg '> <MdCreateNewFolder /> Create Event</NavLink>
                    <div className='flex gap-3'>
                        <button onClick={handleCard} className={`btn btn-success text-3xl border-2 border-accent px-1 rounded-xl ${toggle?"":"btn-outline"}`}><CgMenuGridR /></button>
                        <button onClick={handleTable} className={`btn btn-success text-3xl border-2 border-accent px-1 rounded-xl ${toggle?"btn-outline ":""} `}><CiBoxList /></button>
                        
                    </div>

                </div>
            </div>
            <Suspense fallback={<Loader />}>
                {
                    toggle ? <MyEventCards eventsCreatedByPromise={eventsCreatedByPromise(user.email)} />
                : <MyEvents eventsCreatedByPromise={eventsCreatedByPromise(user.email)} />
                }
            </Suspense>

        </div>
    );
};

export default ManageEvents;