using Acme.BookStore.EntityFrameworkCore;
using Xunit;

namespace Acme.BookStore
{
    [CollectionDefinition(BookStoreTestConsts.CollectionDefinitionName)]
    public class BookStoreApplicationCollection : BookStoreEntityFrameworkCoreCollectionFixtureBase
    {

    }
}
