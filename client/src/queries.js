import { gql } from 'apollo-boost';

export const LAUNCHES_QUERY = gql`
    {
      launches {
        flight_number
        mission_name
        launch_year
        launch_success
        launch_date_local
      }
    }
  `;

export const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;
