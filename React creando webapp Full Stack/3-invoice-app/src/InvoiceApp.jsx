import { useEffect, useState } from "react";
import { calculateTotal, getInvoice } from "./services/getInvoice";
import { InvoiceView } from "./components/InvoiceView";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { ListItemsView } from "./components/ListItemsView";
import { FormItemsView } from "./components/FormItemsView";
import { TotalView } from "./components/TotalView";

const invoiceInitial = {
    id: '0',
    name: '',
    client: {
        name: '',
        lastname: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: '',
        }
    },
    company: {
        name: '',
        fiscalNumber: '',
    },
    items: []
};

export const InvoiceApp = () => {

    const [counter, setCounter] = useState(4);
    const [ invoice, setInvoice ] = useState(invoiceInitial);
    const [items, setItemList] = useState([]);
    const [total, setTotal] = useState(0);
    const [activeForm, setActiveForm] = useState(false);

    const { id, name, client, company } = invoice;    

    useEffect(() => {
        const data = getInvoice()
        setInvoice(data)
        setItemList(data.items)
    }, [])

    useEffect(() => {
        setTotal(calculateTotal(items))
    }, [items])

    const handlerAddItems = ({product, price, quantity}) => {

        const newItem = {
            id: counter,
            product: product,
            price: Number(price),
            quantity: Number(quantity)
        };
    
        setItemList([...items, newItem]);
    
        setCounter(counter + 1);
    }

    const handlerDeleteItem = (id) => {

        setItemList(items.filter(item => item.id !== id));
    }

    const onActiveForm = () => {
        setActiveForm(!activeForm)
    }


    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Invoice App</div>
                    <div className="card-body">

                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView title='Client' client={client} />
                            </div>   

                            <div className="col">
                                <CompanyView title="Company" company={company} />
                            </div>
                        </div>         

                        <ListItemsView title='Items' items={items}  handlerDeleteItem={ id => handlerDeleteItem(id) } />
                        <TotalView total={total} />

                        <button 
                            className="btn btn-secondary"
                            onClick={onActiveForm}>
                            { !activeForm ? 'Agregar item' : 'Cerrar form' }
                        </button>
                        { !activeForm || <FormItemsView handler={(newItem) => handlerAddItems(newItem)}/> }
                                               
                    </div>
                </div>
            </div>            
        </>
    );
}