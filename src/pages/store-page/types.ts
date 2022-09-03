export type RentalSpecs = string[];

// {
//   power?: string,
//   digDepth?: string,
//   weight?: string,
//   ratedOperatingCapacity?: string,
//   shoeWidth?: string,
//   bucketCapacity?: string,
//   rating?: string,
//   frequency?: string,
//   voltage?: string
// }

export interface RentalCategory {
  id: number,
  title: string
}

export interface RentalItem {
  id: number,
  title: string,
  rentalCategoryId: number,
  rentalCategory: RentalCategory,
  specs: RentalSpecs,
  img: string,
}
