# RandomPasswordGenerator
A program can be used to help generate randomly created passwords that fit the users needs.

## Consideration
The CSS and HTML data was already provided so I just needed to create the JavaScript portion of this project. This project can be run by right-clicking anywhere on the HTML file and selecting "Open in Default Browser" or by going to "https://mmarsolek.github.io/RandomPasswordGenerator/". This program depends on user input to determine the length and available characters prior to generating it. 

## Challenges
One of the things that I had to take into consideration was figuring out how to iterate through the passwords requirements after I gather the user input and update the string of available characters. This was solved by adding an object of the gathered requirements into a second nested object. This means that each password requirement is now an individual object nested inside an object. This allows me to iterate through the main object and view the requirement status for each option. If the option is required, I can also retrieve the stored string of available data and add it to the string that will be returned. 
Another thing to take into consideration is the type of user input. I used two different types of popups including 'prompt' and 'confirm'. Confirm allows for a 'Yes' or 'No' style of input and prompt allows for typed user input. The confirm data was stored as a boolean the prompt data is stored as an int. 