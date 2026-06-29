# Web Development Project 4 - *🧪 Professor Oak's Discovery Lab*

Submitted by: **Hamza Munis**

This web app: **Is an interactive Pokémon research tool that randomly discovers Pokémon while allowing you to ban specific attributes like types, abilities, habitats, colors, and generations. Using the PokeAPI, the app filters out banned traits until it finds a suitable Pokémon, with a research log to revisit past discoveries and a containment zone to manage your ban list. It features a dynamic card-based UI with Pokémon-themed styling, hover tooltips, and a timeout modal when too many attributes are banned.**

Time spent: **16** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  -  [x] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_


The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously displayed  results from this session
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

- [x] **An aleart to prevent infinite loop upon banning too many attributes**
  - If too many attributes are banned, the next generation takes a longer and longer with each ban
  - If the timne gets too long, it could run in an infinite loop
  - An alert is sent preventing that loop, and that modal displays a message, a suggestion, and a button to close it

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

1. The biggest challenge was finding an API with a large enough dataset, as to avoid the repitition. There were some sample APIs given in the project description but I wanted to use my own so the search took a long time.

2. Learning how to use that API was another challenge because unlike the cap lab, I did not really know what attributes to put or how to exactly use the API to get the pokemon data and then verify if the data was consistent enough with all the pokemons (The code was not the issue, I knew how to incorporate the API itself).

3. One issue I encountered was extracting all the data for each pokemon because it took me a while to figure out that i would need to make 2 API calls, one general and one species, to get different data. for example some attributes like color, type were obtainable from the main API but getting the Attack, habitat etc was challenging because it was obtained from a sub-API or rather by adding .species in front of it.

4. When a user bans multiple traits (e.g., banning the "Normal" type, "Blue" color, and "Generation-i"), the app has to look for a clean match. If we simply fetched a single random item and skipped it if banned, the screen would go blank and force the user to click "Discover" repeatedly. I engineered an aggressive while loop directly inside our fetch handler. It automatically performs up to 30 rapid-fire automated retries behind the scenes until it hits a Pokémon that passes every single ban condition. We also added a safety threshold constraint (maxAttempts) so the app gracefully warns the user instead of hanging infinitely if they happen to ban almost everything.

5. Clicking an item in the research history log needed to pull a past item forward, but I had to ensure clicking an attribute instantly banished it from the pool, and clicking a ban badge immediately reinstated that category. I centralized the master states inside App.jsx and built deterministic state updater arrays (setBanList, setHistory, and setPokemon). By passing functional pointer callbacks (onAttributeClick, onRemoveItem, onHistoryItemClick) down into individual components, child elements can effortlessly dispatch layout-altering state updates back up to the parent. 

6. A big styling challenge I encountered was making the BanList and HistoryLog scrollable without making the pokemon entering the hidden overflow to soon or too late, like if too early, the overflow hid too early and for some reason while you could scroll to see more, there was extra space in the log. Same with the too late part where the pokemon scrolled but went outside the log box.

7. One last challenge I encouintered was making sure the tool tip (When hovering over a sprite (image of pokemon) in the history log its stats are displayed in a small box) showed while being scrolled or while the log was scrollable because the tool tip kept cutting off from the top or bottom or side of the container.


## License

    Copyright [2026] [Hamza Munis]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.