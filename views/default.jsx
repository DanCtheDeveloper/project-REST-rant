const React = require('react')
const currentYear = new Date().getFullYear()
const footerText = `Site Created By Daniel M. Contin © Daniel Contin 2023-${currentYear}`


function Def (html) {
    return (
        <html>
            <head>
                <title>RestRant!</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossOrigin="anonymous"
        ></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/places">Places</a>
                        </li>
                        <li>
                        <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <footer>{footerText}</footer>
        </html>
    )
}

module.exports = Def
