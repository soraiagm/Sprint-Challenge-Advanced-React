- [ ] Why would you use class component over function components (removing hooks from the question)?
     class components have access to lifecycle methods and it can handle state that is already incorporated into class components.
- [ ] Name three lifecycle methods and their purposes.
     1. componentDidMount - is the birth  phase, whatever initial data you want to start with will be rendered here.
     2. componentDidUpdate - is the growth phase, this is where you can update or change data through setState.
     3. componentWillUnmount - is the death phase, where the component is removed from the screen. Any clean up can be done at this phase.
- [ ] What is the purpose of a custom hook?
     Cleans up your code or writing less code by writing reusable methods or functions. You can reuse your custom hook over and over.
- [ ] Why is it important to test our apps?
     1. Helps find any bugs in your code.
     2. Acts as a safety net when making changes to your code.
     3. Serves as documentation for the code.
     4. Avoids manual testing which can be expensive.
     5. Allows us to trust the code we write.