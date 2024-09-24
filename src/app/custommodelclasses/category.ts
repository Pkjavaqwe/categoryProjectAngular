export class Category {
    constructor(
        public categoryId=0, /**min max */
        public categoryName="asd",/**min max */
        public categoryStock="",/**min */
        public numberOfProducts="", /**max */
        public dateCteated="", /**req */
        public categoryImage:any=""
            
    ){}
}
