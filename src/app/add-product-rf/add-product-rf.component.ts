import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl,Validators} from '@angular/forms';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-add-product-rf',
  templateUrl: './add-product-rf.component.html',
  styleUrls: ['./add-product-rf.component.css']
})
export class AddProductRFComponent implements OnInit {

produits : any [] = [{}] ;

myForm = new FormGroup ({

  product : new FormGroup ({ 

  idProduit:new FormControl ('',Validators.required),
  code:new FormControl ('',[Validators.required,Validators.pattern('[a-zA-Z-0-9]{8}')]),
  libelle:new FormControl ('',[Validators.required , Validators.minLength(3)]),
  prixUnitaire:new FormControl ('',[Validators.required , Validators.pattern('[1-9][0-9]*')])
})

 ,
 detailsProduct:new FormGroup({    

  idDetailProduit:new FormControl ('',Validators.required),
  dateCreation:new FormControl ('',Validators.required),
  dateDerniereModif:new FormControl ('',Validators.required),
  categorie:new FormControl('',Validators.required)
      })
}); 



  constructor() { }

  ngOnInit(): void {
  }


  idProduitt = this.myForm.get('product.idProduit')?.value ; 


addProduct () {

this.produits.push( {
  idProduit: this.myForm.get('product.idProduit')?.value,
  code:this.myForm.get('product.code')?.value,
  libelle:this.myForm.get('product.libelle')?.value,
  prixUnitaire:this.myForm.get('detailsProduct.prixUnitaire')?.value,
  idDetailProduit:this.myForm.get('detailsProduct.prixUnitaire')?.value,
  dateCreation:this.myForm.get('detailsProduct.prixUnitaire')?.value,
  dateDerniereModif:this.myForm.get('detailsProduct.prixUnitaire')?.value,
  categorie:this.myForm.get('detailsProduct.prixUnitaire')?.value 
} )

}

}



