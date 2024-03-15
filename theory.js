// useEffect() =>React Hook which tells react to run some code
// 1.when component re-renders
// 2.when component mounts
// 3. when state changes
// any one  from above

// syntax
// useEffect(function,[dependencies])
// dependency array is optional field

// 1. useEffect(()=>{}) => function runs on every re-render including mounting
// 2.useEffect(()=>{},[]) => function runs on mounting of component only
// 3. useEffect(()=>{},[x,y])

// rule
// 1.function inside useEffect cannot be asynchronous

// use cases
// 1. event listeners
// 2.DOM manipulation
// 3.Real time updates
// 4.fetching data from api
// 5.Clean up when a component unmounts
