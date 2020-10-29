import type { EBookType } from '../ebooks/ebook-type.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateEBookDto {
  name: string;
  type: EBookType;
  publishDate: string;
  price: number;
}

export interface EBookDto extends AuditedEntityDto<string> {
  name: string;
  type: EBookType;
  publishDate: string;
  price: number;
}
