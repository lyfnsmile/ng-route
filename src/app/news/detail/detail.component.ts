import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class newsDetailComponent implements OnInit{
    title = 'app works!';
    constructor(private route: ActivatedRoute){}

    ngOnInit(){
        let newsId = +this.route.snapshot.params['id'];
        console.log(newsId)
    }
}
