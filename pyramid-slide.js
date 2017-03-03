
printPyramid(5);

/*This is the comment I was asked to make*/
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *    ##
 *   ###
 *  ####
 * #####
 *######
 */

function printPyramid(height) {
    
var h = height;

// Loop through each layer of pyramid    
for(height; height>0; height -=1){
	
	// Define variables to hold spaces and bricks
    var space = "", brick = "";

    // Fill Spaces
    for(counter = 1; counter < height; counter += 1){
        space = space + " ";
    }
    
	// Fill Bricks
    for(counter = 0; counter <= h-space.length; counter += 1 ){
        brick = brick + "*";
	}

// Show the output    
console.log(space + brick); 
}
}