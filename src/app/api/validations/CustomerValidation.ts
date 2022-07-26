import { celebrate, Joi, Segments } from 'celebrate';



class CustomerValidation{

public CustomerCreateValidation = celebrate({[Segments.BODY]: Joi.object().keys({
        customer_id: Joi.number().required(),
        store_id: Joi.number().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        address_id: Joi.number().required(),
        address: Joi.string().required(),
        create_date: Joi.required(),
        last_update: Joi.required(),
        active: Joi.required(),
        
    })
})

public CustomerUpdateValidation = celebrate({[Segments.BODY]: Joi.object().keys({
        customer_id: Joi.number().required(),
        store_id: Joi.number().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        address_id: Joi.number().required(),
        address: Joi.string().required(),
        create_date: Joi.required(),
        last_update: Joi.required(),
        active: Joi.required(),

    }).min(1)

});
}
export default CustomerValidation;