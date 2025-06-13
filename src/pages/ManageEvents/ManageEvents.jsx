import useAuth from '../../hooks/useAuth';
import { Suspense } from 'react';
import MyEvents from './MyEvents';
import { eventsCreatedByPromise } from '../../api/api';
import Loader from '../../components/Loader';

const ManageEvents = () => {
    const { user } = useAuth();
    
    return (
        <div className='container mx-auto px-4 py-12'>
            <h1 className='text-2xl font-bold mb-4'>Manage Events</h1>
            <p className='mb-4'>Here you can manage your events, including editing and deleting them.</p>

            <Suspense fallback={<Loader/>}>
                <MyEvents eventsCreatedByPromise={eventsCreatedByPromise(user.email)} />
            </Suspense>
            
        </div>
    );
};

export default ManageEvents;