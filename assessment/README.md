# Assessment

Your goal is to make a project with React. Load some JSON, display components, use state, and use Array.map.

## Challenges 

### Challenge 1

Create a React Project. 

I should be able to run your project with `npm start` or `yarn start`. 

### Challenge 2 

Create a component to display a heading in the page you are creating. The heading should display the following. 

- FEW 1.2 Final Assessment
- {Your name}

Name this component "Heading" and save it to a file named: Heading.js.

Display this component in `App.js`.

### Challenge 3

Import the `metal.json`. You can do this by adding the file to your src directory and using: 

`import data from './metal.json'`

Thie JSON file contains an array of objects, each of which describes a metal band. 

Display the number of bands at the top of the page. Display the count something like: 

- Bands: {#}

The number of bands is the length of the array of bands in the json file. 

### Challenge 4

List all the bands. Make a `<Band>` Component that will display the following: 

- {band_name}
- Formed: {formed}
- {origin}
- Fans: {fans}

This component should accept the information above as props.

You need to create an instance of this component for each band in the array, and display these in the App.js. 

Use `Array.map()` to transform the array of bands objects into an array of `<Band>` components. Dipslay this array in your `App` component. 

### Challenge 5

Make a `<Like>` component. This component will track a like count. It will have two buttons, one button to increase the count, and the other to decrease the count, it should also display the count.

This component will increment by one with each count and do this with state.

### Challenge 6 

Add the `<Like>` component to the `<Band>` component. Each band should show a number of likes and have buttons to increase or decrease the count. 

### Challenge 7

Style your Components. Create a stylesheet for each of the components you created and link that to the component. 

Alternatively you can style your components using inline styles and a JS style Object.

You don't have to spend much time on styling. Add enough styles where I can tell that you styled the components.

### Challenge 8

Not all of the bands are still together. The band objects have a `"split"` property. If the value is `'-'` the band is still together, otherwise the value is the year the band split up. 

Your goal is to only display the `<Like>` component for bands that have NOT split. For bands that have split display the year they split in place of the `<Like>` Component. 

### Challenge 9

Count the number of unique countries in the array of bands. Each band has an `"origin` property that is the countery where they originated. Your goal is to count the number of unique countries and the number of bands from each country. 

Make an object where the key/property is the country/origin and the value is the number of bands from that country. 

It should look something like this when you're done:

Brazil: 1
Finland: 7
France: 1
Germany: 4
Norway: 4
Poland: 1
Portugal: 1
Sweden: 7
Switzerland: 1
The Netherlands: 1
USA: 16
United Kingdom: 6

You can follow these steps: 

- Make an empty object
- for each band in the band array 
  - check if the band_name is a property on your object
  - if not add that band_name as a key with a value of 1
  - If the band_name is a key add 1 to the value

Display the number of countries at the top of your page. 

### Challenge 10 

Display a list of all countries. Show the name and number of bands from that country. 

- {Country_Name} {Number_of_bands}

### Challenge 11

The country list could be better. Your goal is to display the number of bands who originated in each country along with the total number of fans of all bands from that country.

Display this in a list:

- {country_name}
  - {number_of_bands}
  - {number_of_total_fans}
