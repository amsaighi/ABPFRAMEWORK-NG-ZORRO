using Acme.BookStore.Books;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Acme.BookStore.EBooks
{
    public class EBookAppService :
      CrudAppService<
          EBook, //The Book entity
          EBookDto, //Used to show books
          Guid, //Primary key of the book entity
          PagedAndSortedResultRequestDto, //Used for paging/sorting
          CreateUpdateEBookDto>, //Used to create/update a book
        IEBookAppService //implement the IBookAppService
    {
        public EBookAppService(IRepository<EBook, Guid> repository)
            : base(repository)
        {

        }
    }
}
