const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Query {
  description: String,
  hero: [Hero]
}

type Hero {
  id: ID,
  name: String
}
`
const hero1 = {id: 12, name:"ada"};
const resolvers = {
  Query: {
    description: () => `This is the API for a simple blogging application`,
    hero: () => hero1
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`Server ready up ${url}`)
});