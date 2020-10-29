using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Acme.BookStore.EBooks
{
    public interface IEBookAppService :
        ICrudAppService<
            EBookDto, 
            Guid,
            PagedAndSortedResultRequestDto, 
            CreateUpdateEBookDto> 
    {

    }
}
