# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
   The onClick event occurs. As this happens the reducer hook is put into efffect. With this, the dispatch function is called, using the addOne reducer function, changing the state and re-rendering the component/page.

- The user presses the 1 button.
- ...

- TotalDisplay shows the total plus 1.
