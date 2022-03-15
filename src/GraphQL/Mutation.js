import { gql } from '@apollo/client';

//GraphQL for posting a new job
export const POST_JOB = gql`
mutation postJob($title:String!, $commitmentId: ID!, $companyName: String! , $locationNames: String!, $userEmail: String!, $description: String!, $applyUrl:String!){
    postJob(title:$title, commitmentId:$commitmentId, companyName:$companyName, locationNames:$locationNames, userEmail:$userEmail, description:$description, applyUrl:$applyUrl){
        title
    }
}
`