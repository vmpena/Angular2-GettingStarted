# Angular2-Getting Started
Materials for the ["Angular 2: Getting Started"](http://bit.ly/Angular2-GettingStarted) course on Pluralsight.

`APM - Start`: The starter files set up for use in VSCode, WebStorm, or other editors. Use this to code along with the course. (Updated for <i>Angular 2 final</i>)

`APM - Final`: The completed files. Use this to see the completed solution from the course. (Updated for <i>Angular 2 final</i>)

See the `README.md` file under each folder for details on installing and running the application.

If you have any problems installing or running this code, please see the ["Angular 2: Getting Started Problem Solver"](http://blogs.msmvps.com/deborahk/angular-2-getting-started-problem-solver/)

If that does not resolve your issue, please post to the [discussion board for the course](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/discussion)

NOTE: The installation was tested using node v6.5.0 and npm 3.10.6.

# Modified Data Types
The underlying Product data type was made slightly more complex by adding both a custom data type and an array of custom data types. The Product interface now has a "manufacturer" property of type IManufacturer as well as a "distributors" property which is an array of IDistributor types. 
```
export interface IManufacturer{
    name: string;
    country: string;
}

export interface IDistributor{
    name: string;
    country: string;
}

export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
    manufacturer: IManufacturer;
    distributors: IDistributor[];
}
```
The goal was to demonstrate how Angular properly maps incoming JSON data to a complex data type via the Observable .map function in the product-service component:
```
getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
    }
```
This allows for strong typing and Intellisense in the product-detail.component: 
```
{{product.manufacturer.name}}
```
or 
```
<div *ngFor='let distributor of product.distributors'>
  <div class='row'>
    <div class='col-md-3'>{{distributor.country}}</div>
    <div class='col-md-6'>{{distributor.name}}  </div>
  </div>
</div>
```
