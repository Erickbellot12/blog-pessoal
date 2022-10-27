import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { Bcrypt } from '../bcrypt/bcrypt';

@Injectable()
export class AuthService {
    constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private bcrypt: Bcrypt
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const  buscaUsuario = await this.usuarioService.findByUsuario(username)

        if (!buscaUsuario) 
        throw new HttpException('usuario não encontrado!', HttpStatus.NOT_FOUND);

    const match = await this.bcrypt.compararSenhas(buscaUsuario.senha, password)
        if (buscaUsuario && match) {
           
            const { senha, ...result } = buscaUsuario;
            return result;
            }
            return null ;
        }
        async login(usuariologin: any) {
            const payload = {username: usuariologin.usuario, sub: "blogpessoal"};
       
            return {
                usuario: usuariologin.usuario,
                token:  `Bearer ${this.jwtService.sign(payload)}`,
            };
        }
    }

    
    
    
    
    
    
    
    
    
    