function renderHeader(isHomePage) {
    const bodyDOM = document.body;
    const url = isHomePage ? '' : '.';
    const HTML = `<header>
                    <a href="${url}./">Home</a>
                    <a href="${url}./clicker/">Clicker</a>
                    <a href="${url}./list/">List</a>
                    <a href="${url}./chess/">Chess</a>
                </header>`;

    bodyDOM.insertAdjacentHTML('afterbegin', HTML);
}

export { renderHeader };