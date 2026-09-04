const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'm an H1 tag"),
        React.createElement("h2", {}, "I'm an H2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'm an H3 tag"),
        React.createElement("h2", {}, "I'm an H4 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=NamasteReact.6bd02f5a.js.map
