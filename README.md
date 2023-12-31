Requirements: Part 1

1.) When the application loads, print the text, "Press any key to start the game."
2.) When the user presses the key, your code will randomly place two different ships in two separate locations on the board. Each ship is only 1 unit long (In the real game ships are 2+ in length).
3.) The prompt will then say, "Enter a location to strike ie 'A2' "
4.) The user will then enter a location. If there is a ship at that location the prompt will read, "Hit. You have sunk a battleship. 1 ship remaining."
5.) If there is not a ship at that location the prompt will read, "You have missed!"
6.) If you enter a location you have already guessed the prompt will read, "You have already picked this location. Miss!"
7.) When both of the battleships have been destroyed the prompt will read, "You have destroyed all battleships. Would you like to play again? Y/N"
8.) If "Y" is selected the game starts over. If "N" then the application ends itself.


Requirements: Part 2

Only go to this step when you have successfully finished part 1.

Now we are going to make the game a little more realistic.

1.) Rewrite the code so that we use letters A-J and numbers 1-10. This will create a 100-unit grid.
2.) If you haven't already, create a function that builds the grid. This function will take a single number argument to build the grid accordingly. 
(i.e. buildGrid(3) will create a 3x3 grid (9 units), buildGrid(5) will create a 5x5 grid (25 units) buildGrid(10) creates a 10x10 (100 units), etc). 
3.) The computer will now place multiple ships in this format:
     1.) One two-unit ship
     2.) Two three-unit ships
     3.) One four-unit ship
     4.) One five-unit ship
4.) Keep in mind that your code cannot place two ships on intersecting paths
5.) Ship placement should be random (horizontally and vertically placed) and not manually placed by you in the code
6.) Ships must be placed within the grid boundaries
7.) The game works as before, except now, all ships must be destroyed to win


Requirements: Part 3 

(Optional, but will take your skills to a whole new level).
Instead of just printing "hit" or "miss" when you take a turn, have a GUI-based grid appear in the terminal. Use "O" for your misses and use "X" for your hits. After every turn, the grid will reprint with the proper data.

Requirements: Part 4 

Multiplayer (Optional)
Modify the game so you can play against the computer. When the game starts it will automatically position your ships. The computer will then position its own ships.

After you attack and the regular printouts appear, the computer will then attack. It will tell you if you have been hit or missed. The game continues on until someone wins.

Only print the grid for your team on each turn.

Tips:
Break down the project into small, solvable steps. i.e.:
What information about the game should be stored? What kind of variable will it be stored in? (i.e. grid, ships, etc)
What game setup must be set up before a user can take a turn?
What actions can a player take?
What kind of functionality does the game have? Can this functionality be packaged into different functions? (i.e. functions for creating the grid, placing ships, user attack, etc.)
Avoid large functions. A function should be able to perform a single objective effectively. This helps isolate bugs to specific functions and makes your code more readable, modular, and reusable.

