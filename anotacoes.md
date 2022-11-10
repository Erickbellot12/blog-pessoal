npm i --save @nestjs/passport passport passport-local

npm i --save-dev @types/passport-local

npm i --save @nestjs/jwt passport-jwt

npm i --save-dev @types/passport-jwt

token sempre vem do HEADER

Instalação de swagger: npm i --save @nestjs/swagger swagger-ui express
-criar um arquivo de configuração, onde todas as informacoes irao permanecer
-juntar essa função para nosso app
-startar swagger na api

colocar dentro da main: 
const config = new DocumentBuilder();
.setTitle('nome do projeto');
.setDescription('colocar descrição');
.setContact('Colocar contatos. Ex: contatos da generation');
.setVersion('1.0');
.addBearerAuth();
.build();

agora, falta startar:

const document = SwaggerModule.createDocument(app, config) "Colocar app porcausa do app module, e config do documento criado"

e para startar:

SwaggerModule.setup('/swagger', app, document).

depois de startado, precisamos organizar a forma que irar aparecer a tipagem no Swagger:
-Para começar, colocar @ApiProperty() nas entities guardar os schemas no swagger. Em caso de relações (OneToMany, por exemplo), tomar cuidado com a dependência circular (loop). Para evitar, colocamos propriedades dentro do Api. @ApiProperty({type:() => Postagem});

-Colocar nos controllers @ApiTags('Usuarios (alterada conforme a necessidade)')
-E para terminar, ir para AppController para redirecionar o usuario que for acessar o swagger. Apagamos tudo dentro da classe, deixando a classe vazia. Colocar dentro da classe: 

@ApiExcludeEndpoint()
@Get()
async redirect (@Res() resposta:any){
    return resposta.redirect('/swagger')
}

E, depois, ir em AppModule e colocar na area de Controllers, a classe AppController.

Não esquecer de aturorizar e proteger os controladores. Colocar nos controladores @ApiBearerAuth()

serviço de nuvens:
render,
paas,
saas (kkkkkkkkkk)
iaas

quando fazer as alterações no pACKAGEJASON, mexer em Script, adicionando:
...
...
...
...
...

logo após, atualizar o banco de dados (main). Porém, antes, baixar os seguintes pacotes:
npm i --save @nestjs/config
npm i --save pg

Logo após, comentar o banco local (mysql na main)
Em seguida:

TypeOrmModule.forRoot({
    type:'postgres',
    url: process.env.DATABASE_URL,
    logging: false,
    dropSchema: false,
    ssl: {
        rejectUnauthorized: false
    },
    synchronize: true,
    autoLoadEntities: true
}),








