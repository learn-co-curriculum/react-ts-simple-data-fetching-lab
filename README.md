# React Simple Data Fetching Lab

## Learning Goals

- Use the `useEffect` hook to fetch data from an API and set state

## Introduction

The projects we've built so far in labs have all relied on hard-coded data files
supplied to you. While that works in sandbox practice apps, it would become hard
to scale up. Additionally, sometimes we want data that other people have already
compiled. This is where fetching becomes useful.

In this lab, you'll be using the `useEffect` hook to fetch data from an external
API. The API provides you with a random dog image every time you make a fetch
request to it. Your goal is to fetch that data and display it to the user.

## Deliverables

This lab contains starter code that sets up the React file structure required.
You'll notice upon running the project that TypeScript gives you an error saying
`App.tsx` cannot be compiled. This is because that file is completely empty. To
fix that error, create a basic `App` component and export it.

From there, your job is to:

- Use the `useEffect` hook in the `App` component. Inside the callback for
  `useEffect`, send a `fetch` request to
  `https://dog.ceo/api/breeds/image/random`, a free API that returns a random
  image of a dog.
- Display a `<p>` tag with the text of "Loading..." when the component is first
  rendered.
  - **Hint**: Or, in other words, _if_ there is no dog image to display, display
    text that says "Loading..." instead.
- After receiving a response from the API, show the dog image in an `<img>` tag,
  with the `alt` attribute set to "A Random Dog".

> **Hint**: While this lab focuses on the `useEffect` hook, consider - is it the
> only hook you need to use for this assignment? What other hook have we learned
> about that might be helpful here?

## Resources

- [React `fetch` with `useEffect` Example][react ajax]

[react ajax]:
  https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
