import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "../auth/bcrypt/bcrypt";
import { UsuarioController } from "./controllers/usuario.controller";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./service/usuario.service";
@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [Bcrypt, UsuarioService],
    controllers: [UsuarioController],
    exports: [TypeOrmModule]
})
export class UsuarioModule {}