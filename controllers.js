/* In this javascript file you can add Javascript data to show */

function UsersController () {

	/* here add data, in this case a list [...] with objects {..:..,.} <- json */
	this.list = [
		{
			name: 'Peter',
			email: 'peter@hotmail.com',
			age: 43,
		},
		{
			name: 'Bart',
			email: 'eatmy@shorts.com',
			age: 11,
		},
		{
			name: 'Fry',
			email: 'outof@atime.com',
			age: 1031,
		},
	];

	// just to write less, get the first (so you can see angular magic)
	this.current = this.list[0]; 

}