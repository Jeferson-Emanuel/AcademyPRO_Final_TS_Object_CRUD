import { celebrate, Joi, Segments } from 'celebrate';

class RentalValidation{
    public RentalCreateValidation = celebrate({
        [Segments.BODY]: Joi.object().keys({
            rental_date: Joi.string().required(),
            inventory_id: Joi.number().required(),
            customer_id: Joi.number().required(),
            return_date: Joi.string(),
            staff_id: Joi.number().required()
        })
    });

    public RentalUpdateValidation = celebrate({
        [Segments.BODY]: Joi.object().keys({
            rental_date: Joi.string(),
            inventory_id: Joi.number(),
            customer_id: Joi.number(),
            return_date: Joi.string(),
            staff_id: Joi.number()
        }).min(1)
    });
}

export default RentalValidation;