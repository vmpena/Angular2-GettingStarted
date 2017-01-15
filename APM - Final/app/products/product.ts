/* Example of a slightly more complex data model with
 * both a custom data type and an array of custom data types.
 *
 * Demonstrates the use of Typescript interfaces and how
 * Angular can properly map the JSON data source to these types
 * thus allowing for strong typing and Intellisense in the
 * product detail pages. */

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

