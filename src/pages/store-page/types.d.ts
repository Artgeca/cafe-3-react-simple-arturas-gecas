export interface RentalSpecs {
  specs: string[];
}

export interface RentalCategory {
  rentalCategory: {
    id: number,
    title: string
  }
}

export interface RentalItem extends RentalSpecs, RentalCategory {
  id: number,
  title: string,
  rentalCategoryId: number,
  img: string,
  moreInfoBtn: boolean
}
