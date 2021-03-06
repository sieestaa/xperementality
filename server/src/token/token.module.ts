import { Module } from '@nestjs/common';
import { TokenService } from './token.service'
import { TokenRepository } from './token.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { JwtStrategy } from './jwt.strategy';
import { TokenController } from './token.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TokenRepository]),
    JwtModule.register({
      secret: jwtConstants.secret,
    }),  
  ],
  providers: [TokenService, JwtStrategy],
  exports: [TokenService],
  controllers: [TokenController]
})
export class TokenModule {}
