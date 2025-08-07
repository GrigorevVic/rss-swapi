# Star Wars Characters.

[deploy link](https://app.netlify.com/sites/grigorev-swapi/overview)

# PART 1. Class components. Error boundary.

## Application Requirements

1. Divide your page into at least two sections/components. The smaller section should be at the top, and the larger section should be at the bottom.
2. In the top section, place a _Search_ input and a "Search" button. The _Search_ component should look for a previously saved search term in the local storage (LS). If there isn't any, leave the input empty.
3. The bottom section should be used for displaying search results (name and a small description).
4. By default, the application makes a call to the selected API to get a list of items using the search term from the input (only the first page). If the input is empty, make a call to get all items.
5. When the user modifies the _Search_ input and clicks the "Search" button, the application makes a call to the API with the newly provided search term (the search term should not have any trailing spaces; process the input) to get the results (only the first page).
6. The provided search term should be saved to the LS. If the value exists, overwrite it.
7. If your application makes a request to the server API, this should be visible to the user. Implement a Spinner, Skeleton, Loading Bar, Blurring Content, or any other appropriate method in your UI to indicate this.
8. If the request didn't succeed (status code **4xx** or **5xx**), show the meaningful message. You can use [ModResponse](https://chromewebstore.google.com/detail/modresponse-mock-and-repl/bbjcdpjihbfmkgikdkplcalfebgcjjpm) or similar, to test this functionality.
9. Wrap the application in an error boundary to catch errors. Report an error to the console and show a fallback UI (use respective methods for this). Create a button that will throw an error on click to test the functionality.

## Technical Requirements

1. Create a separate branch for this task. Branch name: "class-components".

2. Pick a RESTfull api which supports search and pagination (pagination might be referred as _offset_ and _limit_ params). E.g. https://pokeapi.co/, for Star Wars fans https://swapi.dev/api, for Star Trek fans https://stapi.co/api-documentation (OpenApi spec can be checked here https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml), or you can select another one complying with the requirements.

3. All logical parts should be set into separate components such as CardList, Card, Search, Header, Main etc.

4. **Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.**

# PART 2. React Routing. Tests.

## Application Requirements

1. Add pagination:
   - implement pagination for your existing item list (search results).
   - display the current page in the browser URL using query parameters (e.g. ?page=2, e.g /search/2).
   - the pagination component should appear after receiving the list of all items.
2. Main page displays search results. On item click page should be split into 2 section:
   - left section will continue to display search results.
   - right section should display details using Router Outlet (show loading indicator while making an additional call for details, add control for closing the section, also section should be closed when user clicks on the left section).
   - reflect in the url that "Details" section has been opened for the selected item (e.g. /?frontpage=2&details=1).

## Technical Requirements

1. Create a separate branch for this task from the previous task's branch (class-components). Branch name: "hooks-and-routing".
2. All components must be changed to **functional components**, except the **Error Boundary** component, as error boundaries in React still need to be the class component.
   - Implement custom hook to restore search query from the local storage (LS). Use respective React lifecycle hook as a basis.
3. All logic should be split into components:
   - If you need an access either to the component's lifecycle or the state **use hooks**.
   - All data should be stored in the **component's state**.
4. Add routing to your application using **React Router**. Use [SPA (non-SSR)](https://reactrouter.com/start/framework/rendering#client-side-rendering) mode.
5. Add a 404 page when user navigates to non-existing route.
6. Add and configure a test runner: Jest or Vitest. Test runner should show the test coverage.
   - You should aim to reach at least 70% of the test coverage without testing App.tsx (coverage for App.tsx must be 0%).
   - Include in coverage only tsx files.
   ```
    coverage: {
      include: ['**/*.tsx'],
      exclude: ['**/node_modules/**', '**/*.test.tsx', '**/*.spec.tsx', 'src/__tests__/setup.ts'],
    }
   ```
7. Add a testing library: React Testing Library. You should add tests for the several scenarios keeping in mind that mocked data should be used instead of real API calls.
8. Tests for the Card List component:
   - Verify that the component renders the specified number of cards.
   - Check that an appropriate message is displayed if no cards are present.
9. Tests for the Card component:
   - Ensure that the card component renders the relevant card data.
   - Validate that clicking on a card opens a detailed card component.
   - Check that clicking triggers an additional API call to fetch detailed information.
10. Tests for the Detailed Card component:
    - Check that a loading indicator is displayed while fetching data.
    - Make sure the detailed card component correctly displays the detailed card data.
    - Ensure that clicking the close button hides the component.
11. Tests for the Pagination component:
    - Make sure the component updates URL query parameter when page changes.
12. Tests for the Search component:
    - Verify that clicking the Search button saves the entered value to the local storage.
    - Check that the component retrieves the value from the local storage upon mounting.
13. Lastly, update Husky to run tests on the pre-push hook, ensuring that tests are automatically executed before any code is pushed.

# PART 3. Redux. Redux Toolkit, RTK Query. Context api.

## Application Requirements

1. Selected items (Redux):
   - Each item on the dashboard should have a checkbox, information about which items have been selected should be stored in the store;
   - When user navigates to the next page, and then goes back, previously selected items should be shown (if there were any);
   - When user unselects an item, it should be removed from the store;
2. Downloading selected items (Redux):
   - When at least 1 item has been selected, the flyout element should appear at the bottom;
   - The flyout element should contain number of selected elements (e.g. "3 items are selected") and 2 buttons: "Unselect all" and "Download";
   - When "Unselect all" button is clicked, all the selected items should be unselected and the flyout should be removed from the page;
   - When "Download" button is clicked, you should save the list of selected items (e.g. name, description, details url, any other useful information) to the .csv file, name should contain the number of selected items (e.g. if you've selected "episode" endpoint of the Star Trek api and selected 15 items, the name might be "15_episodes.csv")
3. Custom theme (Context API):
   - Add button/radio buttons/dropdown on top of the application for theme selection;
   - User should have an option to select one of the 2 themes (e.g. light or dark);
   - Selected theme should affect the appearance of the whole application

## Technical requirements

1. Create a separate branch for this task from the previous branch task. Branch name: "app-state-management".
2. Redux Integration:
   - Integrate Redux into your application. You'll need to set up the Redux store and reducers using Redux Toolkit.
3. RTK Query integration:
   - RTK Query Implementation: Use Redux Toolkit Query (RTK Query) to make API calls and cache the results. This will modify your previous API call implementation;
   - Use RTK Query to show whether the data is being loaded. Avoid prop-drilling, if it is required to show indicator in child component, put the respective flag in the store;
   - Items returned for the current page should be stored in the store;
   - Currently selected item details should be stored in the store.
4. Context API:
   - Add context to control the application theme (light or dark).
5. Test Updates
   - Update your tests to accommodate the changes introduced by Redux and RTK Query.
   - Test the functionality related to Redux state and API calls.

# PART 4. Next.js. Server Side Rendering

## Technical requirements

1. Create a separate branch for this task from the previous branch task. Branch name: "nextjs-ssr-pages-api".
2. Next.js Pages Api Integration:
   - Migrate your application from vite to next.js by using Pages folder API.
   - React-router should be removed. You must use file-based routing provided by next.js (Pages Api).
   - You may need to adapt some existing libraries to work with next.js if necessary.
3. Next.js App Router Api Integration:
   - Create a separate branch for this point from "nextjs-ssr-pages-api" branch. Branch name: "nextjs-ssr-app-router-api".
   - You must use file-based routing provided by next.js (App Router)
   - [Migrate from Pages Api to App Router](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration).
4. [Optional] React Router 7 Integration:
   - Create a separate branch for this point from the previous branch task. Branch name: "react-router-ssr".
   - [Update routing](https://reactrouter.com/start/framework/routing)
   - Migrate your application to SSR with React Router 7: data fetching should be done via loaders on the server-side

## Application Requirements

1. Application in each branch should function in accordance to the requirements provided in the previous modules, if they do not contradict with the new requirements provided in this module.
2. All the tests should pass, test coverage should be >= 70%.
