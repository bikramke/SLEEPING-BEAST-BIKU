const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"heading h1"),
            React.createElement("h2",{},"heading h2")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h3",{},"i am tag h3"),
           React.createElement("h4",{},"i am tag h4")] 
    )]

);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
