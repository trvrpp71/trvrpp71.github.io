function createNode(element){
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}

const sec = document.getElementById('towns');
fetch('../support/towndata.js')
.then(resp)=> resp.json())
.then(function(data){
    let towns=data.results;
    return towns.map(function(town) {
        let h2= createNode('h2'),
            p = createNode('p'),
            span = createNode('span');
        span.innerHTML = ${town.name}
        append(p, span);
    })
})
