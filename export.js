async function loadScript(url) {
    let load = new Promise((resolve, reject) => {
        let s = document.createElement('script');
        s.src = url;
        s.onload = resolve;
        document.head.appendChild(s);
    });
    return load
};

async function getJSON(url="https://api.census.gov/data/2019/acs/acs5/variables.json"){
    return (await (await fetch(url)).json());
};

async function getVars(url="https://api.census.gov/data/2019/acs/acs5/variables.json"){
    return (await getJSON(url)).variables;
};

export {
    loadScript,
    getJSON,
    getVars
}