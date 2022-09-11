import React from "react";
import Footer from '../pages/Shared/Footer';

const Blogs = () => {
  return (
    <div className="bg-red-100 pt-3">
      <h2 className="text-center text-xl font-bold my-3">Blogs</h2>
      <div className="flex flex-col justify-center items-center">
        <div class="card w-96 bg-neutral text-neutral-content my-3">
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              How will you improve the performance of a React Application?
            </h2>
            <p>
              There is many ways to optimize React apps.
              <ul>
                <li>Keeping component state local where necessary</li>
                <li>
                  Memoizing React components to prevent unnecessary re-renders
                </li>
                <li>Using Immutable Data Structures</li>
                <li>Dependency optimization</li>
                <li>Throttling and Debouncing Event Action in JavaScript</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card w-96 bg-neutral text-neutral-content my-3">
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              There are four main types of state we need to properly manage in
              your React apps:
              <ul>
                <li>Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card w-96 bg-neutral text-neutral-content my-3">
          <div class="card-body items-center text-center">
            <h2 class="card-title">How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. </p>
          </div>
        </div>
        <div class="card w-96 bg-neutral text-neutral-content my-3">
          <div class="card-body items-center text-center">
            <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p>In the array i will use find method and in find method i will run a function which will return a element which includes the search value.. </p>
          </div>
        </div>
        <div class="card w-96 bg-neutral text-neutral-content my-3">
          <div class="card-body items-center text-center">
            <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
