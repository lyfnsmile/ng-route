import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class newsListComponent implements OnInit {
    title = 'news list works!';
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        let size = +this.route.snapshot.queryParams['size'];
        let page = +this.route.snapshot.queryParams['page'];
        console.log(size, page)
    }

}
