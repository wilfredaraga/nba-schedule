export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param)
  return product;
}

export function renderListWithTemplate(template, parentElement, list, clear = false){
    if(clear) parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML("afterbegin", list.map(template).join(""))
}

export function renderWithTemplate(templateFn, parentElement, data, callback){
    parentElement.innerHTML = templateFn;
    if(callback){
      callback(data)
    }
}

async function loadTemplate(path){
    const result = await fetch(path);
    const template = await result.text();
    return template;
  }
  
  export async function loadHeaderFooter(){
    const headerTemplate = await loadTemplate("./partials/header.html");
    const footerTemplate = await loadTemplate("./partials/footer.html");
  
    const headerElement = document.querySelector("#main-header");
    const footerElement = document.querySelector("#main-footer");
  
    renderWithTemplate(headerTemplate, headerElement)
    renderWithTemplate(footerTemplate, footerElement)
  }

  export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }