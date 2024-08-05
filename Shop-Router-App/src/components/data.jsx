let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10.90",
        due: "12/05/1995"
    },
    {
        name: "yemi Adeyemo",
        number: 1990,
        amount: "$24.90",
        due: "11/04/1993"
    },
    {
        name: "Akeem Gbadebo",
        number: 1890,
        amount: "$10.90",
        due: "12/05/1913"
    },  {
        name: "ife damola",
        number: 1999,
        amount: "$10.90",
        due: "10/05/1995"
    },
];

export function getInvoices(){
return invoices;
}

export function getInvoice(number){
return invoices.find(invoice =>invoice.number === number)
}