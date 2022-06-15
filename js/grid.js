var Grid = {
    // create a grid of empty squares 5 wide and 3 tall
    // the grid is a 2d array of squares
    // each square is an object with the following properties:
    //   - letter: the letter in the square
    //   - is_used: whether or not the square has been used
    //   - is_valid: whether or not the square is a valid word
    //   - is_selected: whether or not the square is selected
    letter: "",
    is_used: false,
    is_valid: false,
    is_selected: false,
}

Grid.prototype.create_grid = function() {
    var grid = [];
    for (var i = 0; i < 3; i++) {
        grid.push([]);
        for (var j = 0; j < 5; j++) {
            grid[i].push(new Grid());
        }
    }
    return grid;
}

Grid.prototype.get_grid = function() {
    return this.grid;
}

Grid.prototype.check_if_grid_valid = function() {
    var grid = this.grid;
    var valid = true;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (!grid[i][j].is_valid) {
                valid = false;
            }
        }
    }
    return valid;
}

Grid.prototype.use_grid_space_for_letter = function(letter, i, j) {
    this.grid[i][j].letter = letter;
    this.grid[i][j].is_used = true;
}

Grid.prototype.game_logic = function(letter, i, j) {
    this.use_grid_space_for_letter(letter, i, j);
    this.check_if_grid_valid();
}