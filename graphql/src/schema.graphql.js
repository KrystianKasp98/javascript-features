// define types for Query, String! means that type of returned value must be string 
// String without "!" allows to return null or string
module.exports = `
type Query {
  hello: String!
}
`;
