# swapper

A simple swapi consumer with filtering and sorting capabilities.

For this small app I created a couple of components to help me fetch and display data from the swapi.dev api.

![image](https://user-images.githubusercontent.com/15310054/97092537-a3fc4580-163c-11eb-86eb-0eac8dd27f05.png)

### Home

This component is a route component view where the main action lives. It uses the `Pagination` and `Table` component to display data from the api. On the `created` life cycle hook data are being fetched from the API and stored in the store.

### Table

The table component accepts an array of people to display. It uses a default configuration for modular headers and with a quick mapping of data it represents the ones we want. In this component I used a couple of functions and actions to store and manipulate data such as filtering and sorting. I injected combined data from `/people` and `/planet` endpoint to better organize and sort the table. I tried to reduce the amount of calls by filtering the array and make only the required calls (there is one more thing that the `fetchPlanetData` action should do to improve that but for simplicity I only focued on the initial data).

After that I call the `/planet` endpoint to fetch the Planet names and details which I save on the store for the `Modal` component. This is because I wanted to save calls from the API and have a centralized store on my app.

### Pagination

The pagination component is not that modular as it accepts only the number of pages (which are calculated from the `count` of the original request to the API) and with a couple of functions it creates the pagination button which fetch data from the API. I tried to make as fewer calls as I could as this could highly improve performance.

### Modal

This component is a hidden modal by default. It uses slots for modular data and applications. When the user clicks the planet name the modal accepts the incoming data which are saved on the store and displays the data on the center of the screen


### Header and Footer

Simple components just for styling. There is also a mobile friendly menu on `header` component but there are no active links other than the home one.

### Sorting and filtering

The input field on the landing page is responsible for filtering the current page. As the user types the table data responds accordingly.

For sorting I used an initialization function which determines the column and the data that are about to be sorted. Then using computed propreties the data are beeing manipulated based on the type. For that I had to create 2 guards to ensure that numerical values will be sorted. I also converted the data to a more human readable one.

For any questions or suggestions please don't hesitate to contact me or just open a new PR.
