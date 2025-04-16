import { ContentType } from '../enums';

export interface DataItem {
  type: ContentType;
  content: string;
  source: string;
}
