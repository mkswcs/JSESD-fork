function handleScroll() {
    setTimeout(() => {
     window.scrollBy(0, -100);
   }, 500);
}

let ele = document.getElementsByClassName("ltx_page_main")[0];
let imgElement = document.createElement("img");
imgElement.setAttribute("src", "headerImage.png");
imgElement.setAttribute("alt", "banner");
imgElement.setAttribute("style", "width:100% !important;min-height:auto;");
ele.insertBefore(imgElement, ele.firstChild);

var docs = document.getElementsByClassName("ltx_note ltx_role_footnote");
let cnt = 0;
let footnotes = [];
let doc = docs[cnt];
while (cnt < docs.length) {
    footnotes.push(doc.id);
    let inner = doc.childNodes[1];
    let txt = inner.childNodes[0].textContent;
    txt = txt.replace(/  +/g, " ");
    txt = txt.replace(/\n/, " ");
    if (cnt > 9) footnotes.push(txt.slice(2));
    else footnotes.push(txt.slice(1));
    cnt++;
    doc.innerHTML = `<a href="#fn-${cnt}" onClick="handleScroll()">` + doc.innerHTML + "</a>";
    doc = docs[cnt];
}

if (footnotes.length > 0) {
    ele = document.getElementsByTagName("article")[0];
    let outer = document.createElement("div", { class: "footnotes-display" });
    let heading = document.createElement("h3");
    heading.appendChild(document.createTextNode("Footnotes"));
    outer.appendChild(heading);

    let j = 0;
    for (let i = 1; i < footnotes.length; i += 2) {
        let p = document.createElement("p");
        p.setAttribute("id", "fn-" + (j + 1));
        let newC = document.createTextNode( footnotes[i]);
        p.appendChild(newC);
        outer.appendChild(p);
        j++;
    }
    ele.appendChild(outer);
}
