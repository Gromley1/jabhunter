import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { locationAttributesMapping } from '../location.model';

@Component({
    selector: 'app-location-details',
    templateUrl: './location-details.component.html',
    styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

    public locations$: Observable<Location[]>;

    constructor(private googleSheetsDbService: GoogleSheetsDbService,) {
        this.locations$ = this.googleSheetsDbService.getActive<Location>(
            environment.locations.spreadsheetId,
            environment.locations.worksheetId,
            locationAttributesMapping,
            "Active"
        );
    }

    public ngOnInit() {
        console.log('location details')
    }
}