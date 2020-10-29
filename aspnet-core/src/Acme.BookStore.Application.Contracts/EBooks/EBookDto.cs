using Acme.BookStore.Ebooks;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.EBooks
{
    public class EBookDto : AuditedEntityDto<Guid>
    {
        public string Name { get; set; }

        public EBookType Type { get; set; }

        public DateTime PublishDate { get; set; }

        public float Price { get; set; }
    }
}
