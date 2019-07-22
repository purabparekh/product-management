export interface ICategory {
    id: number;
    name: string;
}

/**
 * Class to hold the details of each category
 */
export class Category {
    id: number;
    name: string;

    constructor(category: ICategory) {
        this.id = category.id;
        this.name = category.name;
    }
}
