import { OrderItem } from 'sequelize/types';

interface filters{
    limit: number|undefined,
    offset: number|undefined,
    order: any,
    where: {}
};

interface whereValuesInterface {[index: string]: number|string};

class QueryFilter{
    public buildFilters(pk: string, queryAtt: string[]): filters{
        let size, page, sort, order, filterField, filterValue;
        let whereValues: whereValuesInterface = {};

        if(queryAtt){
            [size, page, sort, order, filterField, filterValue] = queryAtt;
        }
        if(filterField && filterValue){
            whereValues[filterField] = filterValue
        }

        (size)? size = parseInt(size) : size = 5;
        (page)? page = parseInt(page) : page = 0;
        (sort)? sort = sort : sort = pk;
        (order)? order = order : order = 'ASC';

        console.log(size, page, sort, order, filterField, filterValue);

        return {
            limit: size,
            offset: page*size,
            order: [[sort, order] as OrderItem],
            where: {
                ...whereValues
            }
        };
    }
};

export default QueryFilter;