import React, { useEffect } from 'react';
import styles from '../../styles/styles';
import { productData } from '../../static/data';
import EventCard from "./EventCard.tsx";
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../../redux/actions/event.tsx';

interface EventsProps {
    getAllEvents: any
    addTocart: any
}
const Events: React.FC<EventsProps> = ({ getAllEvents, addTocart }) => {
    const { allEvents, isLoading } = useSelector((state: any) => state.events)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllEvents())
    }, [])
    return (
        <div>
            {
                !isLoading && (
                    <div className={`${styles.section}`}>
                        <div className={`${styles.heading}`}>
                            <h1>Popular Events</h1>
                        </div>
                        <div className="w-full grid">
                            <EventCard active={true} data={allEvents && allEvents[0]} addTocart={addTocart} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Events