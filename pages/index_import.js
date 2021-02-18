import { gql, useQuery } from '@apollo/client';

import React from 'react';
import {
  Card,
  TextField
} from '@shopify/polaris';

// const GET_DOGS = gql`
//   query GetDogs {
//     dogs {
//       id
//       breed
//     }
//   }
// `;





// function products({ onDogSelected }) {
//   const { loading, error, data } = useQuery(GET_DOGS);

//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;

//   return (
//     <select name="dog" onChange={onDogSelected}>
//       {data.dogs.map(dog => (
//         <option key={dog.id} value={dog.breed}>
//           {dog.breed}
//         </option>
//       ))}
//     </select>
//   );
// }

export function Feed() {
  const GET_SHOP = gql`
  query AllProducts{
    shop {
      name
    }
  }
  `;
  const { loading, error, data } = useQuery(GET_SHOP);
  if (error) return <Error />;
  if (loading || !data) return <Fetching />;

  return <Card>
    <TextField label={data.shop.name}/>
  </Card>

}