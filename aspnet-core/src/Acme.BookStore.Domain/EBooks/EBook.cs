using Acme.BookStore.Ebooks;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Domain.Entities.Auditing;

namespace Acme.BookStore.EBooks
{
    public class EBook : AuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }

        public EBookType Type { get; set; }

        public DateTime PublishDate { get; set; }

        public float Price { get; set; }
    }
}
