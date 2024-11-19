import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtAuthGuard: JwtAuthGuard) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    await this.jwtAuthGuard.canActivate(context);
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user && user.role === 'admin';
  }
}
