function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    
    domElement.innerHTML = reactElement.children
    /* Give props from react reactElement */
    for (const prop in reactElement.props) {
        /* check conditon if the child is also in the props just continue */
        if (prop === 'children') {
            continue;
        }
        /* Go in side the props and select props from reactElement and give value key prop */
        domElement.setAttribute(prop, reactElement.props[prop]) 

        container.appendChild(domElement)
        
    }
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
