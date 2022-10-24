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
  setDeleteClicked?: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenEditModal?: React.Dispatch<React.SetStateAction<boolean>>,
  setEditRentalId?: React.Dispatch<React.SetStateAction<string | null>>,
}

export interface FormatedItem extends RentalItem {
  count?: number
}

export interface RentalItemFetch {
  title: string,
  rentalCategoryId: number,
  specs?: string[];
  img?: string,
}
