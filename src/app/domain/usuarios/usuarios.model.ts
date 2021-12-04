import { Status } from "src/app/enums/Status.enum";
import { TipoUsuario } from "src/app/enums/TipoUsuario.enum";

export class Usuario  {

    nombre:string;
    login:string;
    password :string;
    tipo_usuario:TipoUsuario;
    status:Status;
}