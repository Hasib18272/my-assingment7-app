What is JSX, and why is it used?
JSX is a JavaScript syntax extension that lets you write HTML-like UI code inside JavaScript.
It gets compiled into regular JavaScript function calls that create UI elements.
It’s used because it makes React component code more readable and tightly couples UI with logic.

What is the difference between State and Props?

Props (properties) are read-only inputs passed from parent to child. A child can’t change its props.

State is internal, mutable data owned by a component. The component can change it via setters.

Props = external/configuration, State = internal/behavior that changes over time.

What is the useState hook and how it works?

useState is a React Hook that lets functional components store and update state.

It returns an array: current state value and a setter function.

When the setter runs, React re-renders the component with the new state.

How to share state between components in React?

Common ways:

Lift state up

Move shared state to the closest common parent.

Pass it down via props to children.

Context API

Good for global/shared data (theme, auth, language).

Avoids “prop drilling.”

State management libraries

Like Redux, Zustand, Recoil, Jotai.

Used when state becomes large/complex across many parts.

How is event handling done in React?

Events use camelCase (e.g., onClick, onChange).

You pass a function reference, not a string.

React uses a synthetic event system (cross-browser consistent).
