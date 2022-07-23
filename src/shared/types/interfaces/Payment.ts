export interface PaymentInput{
    customer_id: number,
    staff_id: number,
    rental_id: number,
    amount: number,
    payment_date: string
};

export interface PaymentOutput{
    payment_id: number,
    customer_id: number,
    staff_id: number,
    rental_id: number,
    amount: number,
    payment_date: string
};