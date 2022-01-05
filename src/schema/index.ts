import { gql } from 'apollo-server-express';
import messageSchema from './message';

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, messageSchema];
