import React from 'react'
import {useQuery} from "@apollo/react-hooks";
import {LaunchItem} from "./LaunchItem";
import {LAUNCHES_QUERY} from '../queries'
import Spinner from "./Spinner/Spinner";

const Launches = () => {
    const {loading, error, data} = useQuery(LAUNCHES_QUERY);
    let output = null
    if (loading) output = <Spinner/>;
    else if (error) output = <p>Error : error</p>;
    else output = data.launches.map(launch =>
            <LaunchItem
                key={launch.flight_number}
                launch={launch}
            />
        )
    return output
}

export default Launches