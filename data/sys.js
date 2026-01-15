// Not long save

const values = {
	
}

export const set_values = function(updated_values) { // Its responsible to add or update values
	values = {
		...values,
		...updated_values
	}
}

export const get_values = {
	...values
}