import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';

@Component({
  selector: 'app-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.scss']
})
export class AutocompleteSearchComponent implements OnInit {
  search: string = "";
   nodata = [{
    location:"No Data found"
  }];
  selectWardata :any= [];

  constructor(private warService:CallApiService) { }
searchfromInput :any= [];

  ngOnInit(): void {
  }

  toggleCollapseCloses(){

  }

  searchDropdown(event) {
this.selectWardata= [];
  
    this.warService.searchLocation(event).subscribe(data=>{
      console.log(data, 'sdhvsdvsdvsdvs');
      var temp:any =data;
      if(temp.length>0){
        this.searchfromInput=data;
     this.searchfromInput=  this.searchfromInput.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i);

      }else{
        this.searchfromInput= this.nodata;

     
      }
     

    

      

    });


  
  }

  showData(value){
    this.searchfromInput= [];
    let obj={
      location:value
    }
    this.warService.getwarInfo(obj).subscribe(data=>{
      this.selectWardata = data['result'];  
      this.search= '';


    })

  }

}
