// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { CatsService } from './cats.service';

// @Injectable()
// export class CatOwnershipGuard implements CanActivate {
//   constructor(catsService: CatsService) {}
//   canActivate(
//     context: ExecutionContext
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     // const request = context.switchToHttp().getRequest();
//     new CatsService()
//     // return validateRequest(request);
//   }
// }

// const validateOwnership = async (elementId, userId, service) => {
//   const element = await service.findById(elementId);
//   if (element.owner != userId) {
//     throw new UnauthorizedException();
//   }
//    return true;
// };
