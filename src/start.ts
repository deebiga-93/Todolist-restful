
let mongodb= require('./mongodb.ts')
let pgdb= require('./pg.ts')
if (process.argv[2] !== undefined) {
    
    switch (process.argv[2]) {
        case 'mongodbdb':
            mongodb(function() {
                process.exit()
            });
            break
        case 'migratedata':
            pgdb(function() {
                process.exit()
            });
            break
        default:
            console.log(process.argv[2] + " not found. Try 'createdb' or 'migratedata' ")
            break            
    }
}   
else
    console.log("No method stated. Try 'node start.js createdb' or 'node start.js migratedata' ")
module.exports= function(){
    let MigrationIsrunning=false;
    if(MigrationIsrunning){
        console.log('Migration script is still running')
        MigrationIsrunning = true
        return
    }
    MigrationIsrunning = true
    console.log('start')

    }
    console.log(console.error())
    

