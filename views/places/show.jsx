const React = require('react')
const Def = require('../default')
const comments = require('../../models/comment.js')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? "Rant! :(" : "Rave! :)"}</h2>
              <h4>{c.content}</h4>
              <h3>
                <strong>- {c.author}</strong>
              </h3>
              <h4>Rating: {c.stars} ⭐️</h4> 
              <h2 className="recommend">{c.recommend ? 'Recommend! ✅' : 'Do not recommend 🚫'}</h2> 
            </div>
          )
        })
      }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} width={750} />
                        <h3>Located in {data.place.city}, {data.place.state} {" "}</h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <div>
                        <h4>Rating</h4>
                            <h3>Not Rated</h3>
                        </div>
                        <br />
                        <div>
                        <h2>Description</h2>
                            <h3>{data.place.showEstablished()}</h3>
                            <h4>Serving {data.place.cuisines}</h4>
                        </div>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                            Edit
                            </a>
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>     
                        <h2>Comments</h2>
                        {comments}
                    </div>
                </div> 
                <hr />

                <div className="reviewForm">
            <h2>Does {data.place.name} deserve a Rave 💖 or a Rant 🤬?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Your Name</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">⭐️ Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="col-sm-2">
                  <label class="form-check-label" htmlFor="rant" id="rant-checkbox">Rant?</label>
                  <br/>
                  <input type="checkbox" id="rant" name="rant" className="form-check-input" />
                </div>
                {/* <div className="form-group col-sm-2">
                  <label htmlFor="recommend">Recommend?</label>
                  <br/>
                  <input type="checkbox" id="recommend" name="recommend" className="form-check-input" />
                </div> */}
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>
            </div>       
            </main>
        </Def>
    )
}
module.exports = show
