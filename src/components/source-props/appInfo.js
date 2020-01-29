import gql from 'graphql-tag';

  export const SOURCE_APP_INFO_QUERY = gql`
  query UNIT(
    $id: ID!
    $typeRelationships: String!
    $parameters: String
  ) {
    unitData(
      unitId: $id
      typeRelationships: $typeRelationships
      parameters: $parameters
    )
    {
      
        instance {
            id
            value
        }
        children {
            typeId
            instances {
                
		instance {
		    id
		    value
		}
            }
        }
    
    }
  }
`;

export const APP_INFO_RELATIONSHIPS = {
   app: {
        description: null
    },
};