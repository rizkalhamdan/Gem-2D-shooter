import { boot } from "/boot.js"
import { fail } from "/system/fail.js"
import { envir } from "/core/envir.js"



let _boot_ = boot()

if(!_boot_) fail("System cannot continu run, boot not stable!");

if(_boot_) envir()