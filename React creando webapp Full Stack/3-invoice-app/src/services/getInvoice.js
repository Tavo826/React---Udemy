import { invoice } from "../data/invoice"

export const getInvoice = () => {

    // let total = 0
    // invoice.items.forEach(item => {
    //     total += item.price * item.quantity
    // })

    // calculate the total of the invoice using reduce
    const total = calculateTotal(invoice.items)

    // return an invoice object clone with the total property
    return {...invoice, total}
}

export const calculateTotal = (items = []) => {
    return items.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)
}