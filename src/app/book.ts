import {Category} from './category';
import {Status} from './status';

export interface Book {
  id?: number;
  title: string;
  authors: string;
  category?: Category;
  status?: Status;
}
