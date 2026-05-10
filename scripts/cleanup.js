// Cleanup script - removes temp files
import {rmSync,existsSync} from 'fs'
const dirs=['dist','.cache','tmp']
dirs.forEach(d=>{if(existsSync(d)){rmSync(d,{recursive:true});console.log('removed',d)}})
