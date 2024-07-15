import server from "./server";
import colors from "colors"
import 'reflect-metadata';
import './sequelize';


server.set('port', 4000);

server.listen(server.get('port'), () =>{
    console.log( colors.magenta ('Estamos trabajndo sobre el puerto'), server.get('port'));
});