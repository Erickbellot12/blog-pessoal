import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { JwtModule } from "@nestjs/jwt";
import { UsuarioModule } from "src/usuario/usuario.module";
import { PassportModule } from "@nestjs/passport"
import { jwtConstants } from "./constants/constants";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategy/local.strategy";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { AuthController } from "./controllers/auth.controller";
import { UsuarioService } from "src/usuario/service/usuario.service";



@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '24h'},
        }),
    ],
    providers: [UsuarioService,AuthService, Bcrypt, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt],
})
export class AuthModule {}
