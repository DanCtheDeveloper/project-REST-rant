const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/burrito.jpg" alt="burrito"/>
                    </div>
                    <div>
                    Photo by <a href="https://unsplash.com/@ruyan75?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ruyan Ayten</a> on <a href="https://unsplash.com/photos/Dnq6EFxrbKo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
            </main>
        </Def>
    )
}

module.exports = home
