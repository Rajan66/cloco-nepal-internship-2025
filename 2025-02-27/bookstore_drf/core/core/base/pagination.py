from rest_framework.pagination import PageNumberPagination

class BookCategoryPagination(PageNumberPagination):
    page_size=5 # default page_size = 5
    page_size_query_param = 'page_size' # query : /?page_size=10
    max_page_size = 3 # limits the number of items shown when client requests using page_size query


class StandardPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10