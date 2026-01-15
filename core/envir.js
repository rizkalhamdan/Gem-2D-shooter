export const envir = function() {
	var bd = document.body

	var st = document.createElement('link')
	st.rel = 'stylesheet'
	st.href = '/assets/envir.css'
	bd.appendChild(st)

	
	var gz = document.createElement("section")
	gz.classList.add("gz")
	
	bd.appendChild(gz)
}