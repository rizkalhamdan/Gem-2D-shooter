export const fail = function(Err) {
	window.document.title = "System Failure!"
	window.document.body.innerHTML = "System Failure!"
	console.warn("System Failure!")

	console.log(String(Err))
}