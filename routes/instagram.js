const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const superagent = require('superagent')

/*  This is a sample API route. */

router.get('/:username', function(req, res){

    const url = 'https://wwww.instagram.com/'+ req.params.username + '/?_a=1' 

    superagent.get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err){
        res.json({
          confirmation: 'fail',
          message: err.message
        })
        return
      }

      const user = response.body.user
      const feed = user.media.nodes

      let parsed = []
      feed.forEach((post, i) => {
        parsed.push({
          image: post.thumbnail_src,
          caption: post.caption
        })
      })

      res.json({
        feed: parsed
      })

      // res.json(response.body)
    })
})


module.exports = router
