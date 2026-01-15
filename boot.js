// BOOT script 12.01.2026

"use-strick"

let _is_boot_ = false

export const boot = function() {
	_is_boot_ = true

	// Screen requrments
	if(window.innerWidth < 300 && window.innerHeight < 300) _is_boot_ = false

	
	return _is_boot_
}