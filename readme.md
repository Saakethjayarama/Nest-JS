# Nest Js

- A Node.js Framework
- Build up on express js

# What's the point of this framework's framework

- Add some features like:-
  1.  Embraces TypeScript
  2.  Dependency Injection
  3.  Modularity
- More like backend written in angular

# Uses

- Can be used to build MVC apps or REST or GraphQL APIs

# Creating a project

```
npm i -g @nestjs/cli
nest new project-name
```

# Controllers

- controllers contain all the controllers
- Controllers are anotated using Controller from nestjs

# Providers

- Providers are the services or classes which can be injected into controllers and also into other providers to provide some functionalities.

- Anotations

1. Controller :- Controller
2. Get :- Request Type
3. Post :- Request Type
4. Patch :- Request Type
5. Delete :- Request Type
6. Put :- Request Type
7. Injectable :- Used for class that can be injected
8. Header :- Used to add header to response

# Notes

- Dependency Injection
- Content Type is set by nest js depending on the type of returned value
