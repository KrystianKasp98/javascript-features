module.exports = `
query {
  movies { # root field
    title # payload - in this case it's only field
  }
}

query {
  movie(id: 1) {
    title
  }
}

query {
  movie(id: 1) {
    # Comment ouh! 
    title
  }
}

query {
  movie(id: 1) {
    # Comment ouh! 
    title
    director {
      name
    }
  }
}

query {
  movie(id: 1) {
    # Comment ouh! 
    title
    duration(unit:SECONDS)
    director {
      name
    }
  }
}

query {
  movie(id: 1) {
    # Comment ouh! 
    title
    duration_in_sec:duration(unit:SECONDS)
    duration_in_min:duration(unit:MINUTES)
    director {
      name
    }
  }
}

query fetchMovies {
  movies {
    title
  }
}
Variables
query fetchMovies($movieID:ID!) {
  movie(id: $movieID) {
    title
  }
}

{
  "movieID": 2
}

Default variables
query fetchMovies($movieID:ID! = 1)

Fragments 
query {
  movie(id: 1) {
    ...comparisonFields
  }
}

fragment comparisonFields on Movie {
  title
}

Directives
query fetchMovies($movieID:ID! $withDirector:Boolean = false) {
  movie(id: $movieID) {
    title
    director @include(if: $withDirector) {
      name
    }
  }
}

Meta fiedls
__typename
`;
