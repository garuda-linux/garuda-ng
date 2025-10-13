import { Injectable, ResourceRef } from '@angular/core';
import { BlogData } from './interfaces';

@Injectable()
export abstract class AbstractDiscourseService {
  abstract getDiscourseNews(): ResourceRef<BlogData[]>;
}
