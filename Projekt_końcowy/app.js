const year = [
    {name: 'January',
    days: 31,
},
    {name: 'February',
    days: 31,
},
    {name: 'March',
    days: 31,
},
    {name: 'April',
    days: 31,
},
    {name: 'May',
    days: 31,
},
    {name: 'June',
    days: 31,
},
    {name: 'July',
    days: 31,
},
    {name: 'August',
    days: 31,
},
    {name: 'September',
    days: 31,
},
    {name: 'October',
    days: 31,
},
    {name: 'November',
    days: 31,
},
    {name: 'December',
    days: 31,
}
];
let days = "";

for(let i = 1; i <= 31; i++) {
    days += `<div>${i}</div>`;
}
console.log(days);
