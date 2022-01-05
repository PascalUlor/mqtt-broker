import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    message(id: ID!): Message!
  }

  extend type Mutation {
    createMessage(text: String!): Message!
  }

  type Message {
    id: ID!
    text: String!
  }

  extend type Subscription {
    messageCreated: MessageCreated!
  }

  type MessageCreated {
    message: Message!
  }
`;
