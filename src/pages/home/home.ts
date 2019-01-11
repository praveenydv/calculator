import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  i:any=0;
  total:any=0.0;
  sign:any="";
  currvalue:string="";

  value=""
 
   

  f(data){
  this.value= this.value  +  data;
   
   this.currvalue= this.currvalue  +  data;
    


  } 

 
   
  
 sum(){
 
   this.value=this.value + '+';

   this.total=this.total+parseFloat(this.currvalue);
   this.sign='+';
   this.currvalue="";
   this.i=1;

 }

subtract(){
  
   this.value=this.value + '-';
 
  if(this.i==0){
       this.total=this.total+parseFloat(this.currvalue);}
 else{
 
     if(this.sign=='+'){
           this.total=this.total+parseFloat(this.currvalue);}
 
    else if(this.sign=='-'){
           this.total=this.total-parseFloat(this.currvalue);}
   
    else if(this.sign=='*'){
           this.total=this.total*parseFloat(this.currvalue);}
 
    else if(this.sign=='/'){
          this.total=this.total /parseFloat(this.currvalue);}

     }

  this.sign='-';
  this.currvalue="";
  this.i=1;

 }

 multiply(){
 
   this.value=this.value + '*';
   
   if(this.i==0){
     this.total=this.total+parseFloat(this.currvalue);}
 
  else{
      if(this.sign=='+'){
           this.total=this.total+parseFloat(this.currvalue);}
 
    else if(this.sign=='-'){
           this.total=this.total-parseFloat(this.currvalue);}
   
    else if(this.sign=='*'){
           this.total=this.total*parseFloat(this.currvalue);}
 
    else if(this.sign=='/'){
          this.total=this.total /parseFloat(this.currvalue);}

          }
  
  this.sign='*';
  this.currvalue="";
  this.i=1;

 }


 divison(){
 
  this.value=this.value + '/';
 
 if(this.i==0){
     this.total=this.total+parseFloat(this.currvalue);}

 else{
  if(this.sign=='+'){
           this.total=this.total+parseFloat(this.currvalue);}
 
    else if(this.sign=='-'){
           this.total=this.total-parseFloat(this.currvalue);}
   
    else if(this.sign=='*'){
           this.total=this.total*parseFloat(this.currvalue);}
 
    else if(this.sign=='/'){
          this.total=this.total /parseFloat(this.currvalue);}

          }
  
  this.sign='/';
  this.currvalue="";
  this.i=1;
 }

 equal(){

   if(this.sign=='+'){
           this.total=this.total+parseFloat(this.currvalue);}
 
    else if(this.sign=='-'){
           this.total=this.total-parseFloat(this.currvalue);}
   
    else if(this.sign=='*'){
           this.total=this.total*parseFloat(this.currvalue);}
 
    else if(this.sign=='/'){
          this.total=this.total /parseFloat(this.currvalue);}

 
   this.value=this.value + '='+ this.total;
 }

point(){
         
         this.value=this.value + '.';
         this.currvalue= this.currvalue  + '.';}


reset(){

this.value="";
this.total=0.0;
this.currvalue="";
this.sign='';
this.i=0;
 
   }



  
}

 

