class Ticket {
    destination : string;
    price : number;
    status : string;
    constructor(d:string, p:number, s:string) {
        this.destination = d;
        this.price = p;
        this.status = s;
    }
}

function sortTickets(arr: string[], sortingParam: string): void {
    let tickets: Array<Ticket> = [];

    for (let ticket of arr) {
        let params: string[] = ticket.split("|");
        tickets.push(new Ticket(params[0], Number(params[1]), params[2]));
    }

    tickets.sort((a, b) => a[sortingParam].localeCompare(b[sortingParam]));

    console.log(tickets);
}

sortTickets([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'destination');