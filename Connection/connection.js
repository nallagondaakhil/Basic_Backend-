var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'India@123',
        server: 'SRVBGR01BOKDBVL',
        database: 'I3_IC',
        
    });
 
    return conn;
};

module.exports = connect; //return functuion 