import { SortOrder, SortPipe } from '@abp/ng.core';
import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
export interface TableSortOptions {
    key: string;
    order: SortOrder;
}
export declare class TableSortDirective implements OnChanges {
    private abpTable;
    private sortPipe;
    private cdRef;
    abpTableSort: TableSortOptions;
    value: any[];
    readonly table: TableComponent | any;
    constructor(abpTable: TableComponent, sortPipe: SortPipe, cdRef: ChangeDetectorRef);
    ngOnChanges({ value, abpTableSort }: SimpleChanges): void;
}
