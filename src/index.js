const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Query {
  description: String,
  hero: [Hero]
}

type Hero {
  id: Int,
  name: String
}
`
const heros = [{id: 12, name:"R2D2"},{id: 13, name:"BB8"}];
const resolvers = {
  Query: {
    description: () => `This is the API for a simple blogging application`,
    hero(root, args, context, info) {
      return heros.find(k => k.id === args.id);  
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`Server ready up ${url}`)
});