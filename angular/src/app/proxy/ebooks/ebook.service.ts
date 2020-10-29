import type { CreateUpdateEBookDto, EBookDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EBookService {
  apiName = 'Default';

  create = (input: CreateUpdateEBookDto) =>
    this.restService.request<any, EBookDto>({
      method: 'POST',
      url: `/api/app/eBook`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/eBook/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, EBookDto>({
      method: 'GET',
      url: `/api/app/eBook/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<EBookDto>>({
      method: 'GET',
      url: `/api/app/eBook`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateEBookDto) =>
    this.restService.request<any, EBookDto>({
      method: 'PUT',
      url: `/api/app/eBook/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
