import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as multer from 'multer';
import { extname } from 'path';

@Injectable()
export class FileUploadInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const storage = multer.diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + '_' + file.originalname)
      },
    });

    const upload = multer({ storage }).single('image');

    return from(
      new Promise<void>((resolve, reject) => {
        upload(request, response, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      })
    ).pipe(
      switchMap(() => next.handle())
    );
  }
}
