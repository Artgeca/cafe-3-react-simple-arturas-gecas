export interface RentalSpecs {
  specs?: string[];
}

export interface RentalCategory {
  rentalCategory: {
    id: string,
    title: string,
    type: string
  }
}

export interface RentalItem extends RentalSpecs, RentalCategory {
  id: string,
  title: string,
  rentalCategoryId: number,
  moreInfoBtn: boolean
  specs?: string[];
  img?: string,
}

export interface FormatedItem extends RentalItem {
  count?: number
}
