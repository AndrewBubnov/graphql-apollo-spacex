import React, { useEffect } from 'react'
import { useQuery } from "@apollo/react-hooks";
import { Link } from 'react-router-dom'
import classNames from "classnames";
import {LAUNCH_QUERY} from "../queries";
import Spinner from "./Spinner/Spinner";


const Launch = (props) => {
    let { flight_number } = props.match.params
    flight_number = Number(flight_number)
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flight_number },
    });
    if (loading) return <Spinner/>;
    if (error) console.log(error);


    const {
        mission_name,
        launch_year,
        launch_success,
        rocket: { rocket_id, rocket_name, rocket_type }
    } = data.launch;

    return(
        <div>
            <h1 className="display-4 my-3">
                <span className="text-dark">Mission:</span> {mission_name}
            </h1>
            <h4 className="mb-3">Launch Details</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Flight Number: {flight_number}
                </li>
                <li className="list-group-item">
                    Launch Year: {launch_year}
                </li>
                <li className="list-group-item">
                    Launch Successful:{' '}
                    <span
                        className={classNames({
                            'text-success': launch_success,
                            'text-danger': !launch_success
                        })}
                    >
                      {launch_success ? 'Yes' : 'No'}
                    </span>
                </li>
            </ul>

            <h4 className="my-3">Rocket Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Rocket ID: {rocket_id}</li>
                <li className="list-group-item">
                    Rocket Name: {rocket_name}
                </li>
                <li className="list-group-item">
                    Rocket Type: {rocket_type}
                </li>
            </ul>
            <hr />
            <Link to="/" className="btn btn-secondary">
                Back
            </Link>
        </div>
    )
}
export default Launch

