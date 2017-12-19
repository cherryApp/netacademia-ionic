import { NgModule } from '@angular/core';
import { ShowDatePipe } from './show-date/show-date';
import { TicketSearchPipe } from './ticket-search/ticket-search';
@NgModule({
	declarations: [ShowDatePipe,
    TicketSearchPipe],
	imports: [],
	exports: [ShowDatePipe,
    TicketSearchPipe]
})
export class PipesModule {}
