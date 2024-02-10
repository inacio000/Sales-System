export interface PaginationMetaType {
    itemPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
}

export interface PaginationType<T>{
    meta: PaginationMetaType;
    data: T
}