//Table data
let tables=[
    {
        location: "Row1 left",
        numberOfSeats: 2,
        reservedTime: new Date("April 2, 2021 11:15:00").toDateString(),
        endTime: new Date("April 2, 2021 12:00:00").toDateString()
    },
    {
        location: "Row1 left",
        numberOfSeats: 2,
        reservedTime: new Date("April 3, 2021 12:14:00").toDateString(),
        endTime: new Date("April 3, 2021 12:45:00").toDateString()
    },
    {
        location: "Row1 center",
        numberOfSeats: 6,
        reservedTime: new Date("April 2, 2021 10:15:00").toDateString(),
        endTime: new Date("April 2, 2021 11:00:00").toDateString()
    },
    {
        location: "Row2 left",
        numberOfSeats: 4,
        reservedTime: new Date("April 4, 2021 14:50:00").toDateString(),
        endTime: new Date("April 4, 2021 15:30:00").toDateString()
    },
    {
        location: "Row2 right",
        numberOfSeats: 6,
        reservedTime: new Date("April 1, 2021 13:40:00").toDateString(),
        endTime: new Date("April 1, 2021 14:50:00").toDateString()
    },
    {
        location: "Row3 left",
        numberOfSeats:8,
        reservedTime: new Date("April 3, 2021 14:15:00").toDateString(),
        endTime: new Date("April 3, 2021 15:00:00").toDateString()
    },
    {
        location: "Row3 right",
        numberOfSeats: 8,
        reservedTime: null,
        endTime: null
    }

]

const tableList = document.querySelector(".table-list"); 
const seats = document.querySelector('.seats');
const reservation = document.querySelector('.reservation');

//Function to show tables
function showTables(){
    tables.map(table=>{
        let newTable = document.createElement("div");
        newTable.setAttribute('class','table');
        if(table.reservedTime)
       { newTable.innerHTML = `
       <h3>Table</h3>
        <p>Location: ${table.location}</p>
        <p>Seats: ${table.numberOfSeats}</p>
        <p>Reservation date and time: ${table.reservedTime}-${table.endTime}</p>
        `
    }
    else{
        newTable.innerHTML = `
        <h3>Table</h3>
        <p>Location: ${table.location}</p>
        <p>Seats: ${table.numberOfSeats}</p>
        `
    }
        tableList.appendChild(newTable);
    })
}

showTables();

//Function to sort tables by numberOfSeats
function sortBySeats(){
    tableList.innerHTML='';
    tables.sort((a,b)=> {
        return a.numberOfSeats-b.numberOfSeats;
    });
    showTables();
}

//Function to sort tables by reservation
function sortByReservation(){
    tableList.innerHTML='';
    tables.sort((a,b)=>{
        let aTime = new Date(a.reservedTime);
        let bTime = new Date(b.reservedTime);
        return aTime - bTime;
    })
    showTables();
}

function filterTables(){
    if(seats.checked)
    sortBySeats();
    else if(reservation.checked)
    sortByReservation();
} 

setInterval(filterTables,1000);