# Learning React

@parcel
- dev builds
- local server
- HMR = hot module replacement
- caching -faster builds
- bundling
- image optimization
- minification
- compressing
- constent hashing
- code splitting
- differential bundling
- diagnostics
- Error handling
- way to host ur app on https
  -Tree shaking -->remove unused code or minify it (some code which you or not using)

- now we do not want to give parcel index.html as for executing what we can do is update the package.json scripts and include start and another for both dev or production and give these commands there so that after we just need to give npm run start/build(name of that script) and prjct runs successfully . or we can use a shortcut npm start only for start (not for production).

- React.createElement -->Object -->which is converted into the HTML Element with the help of render we do to render it on the page or we can say when we render it on the page until then it is an object..

- JSX

- babel

- React components -->class & functional

- functional -->start with Capital letter then ()={...}

- To render functional component use <nameofthecomponent />

- Component composition --> Component inside another component.

- component using function keyword

- Props-> properties

- config driven ui

- map --> no need to write the same component many times use map

- pass key with each item of the map
- do not use index as keys as is not recomended by the react devs(unique id is best if u have).but if unique key is not available then use index it is better to have something than nothing..
- two types of export/import --> default and named exports/imports (default for only one and named for multiple)

- Hooks -->hooks are utitlity functions which gives us lot more power(mainly used are useState and useEffect) 
- useState --> whenever a state variable changes/updates react re renders the component (it keeps the ui sync with the data.)
- useEffect() -->another imp hook which takes two arguments (callback function,[dependency array])-->the callback funciton here will be called once the component is rendered and then the code inside the callback function will be executed..
- fecthing actual data from swiggy api instead of using dummy data and then passing it to the useState hook 
- optional channing(?)
- reconcilation algo(react fibre)
- virtual dom 
- actual dom 
- diff algo
- Monolith and microservice arch.
- Shimmer effect.
- conditional redering.
- why we even need useState()
- how it works 
- how it is better than the normal variable..
- what powers does it have which makes it this powerfull.