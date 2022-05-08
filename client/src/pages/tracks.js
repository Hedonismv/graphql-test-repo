import React from 'react';
import {Layout, QueryResult} from '../components';
import {gql, useQuery} from "@apollo/client";
import TrackCard from "../containers/track-card";

/**
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql`
  query ExampleQuery {
    tracksForHome {
      id
      title
      thumbnail
      modulesCount
      length
      author {
        photo
        name
        id
      }
    }
  }
`

const Tracks = () => {

  const {loading, data, error} = useQuery(TRACKS)
  console.log(data)

  return (
      <Layout grid>
        <QueryResult loading={loading} error={error} data={data}>
          {data?.tracksForHome?.map(track => <TrackCard track={track} key={track.id}/>)}
        </QueryResult>
      </Layout>
  )

};

export default Tracks;
