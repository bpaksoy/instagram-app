const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const superagent = require('superagent')

/*  This is a sample API route. */

router.get('/:username', function(req, res){

    const url = 'https://wwww.instagram.com/14streety/?_a=1'

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
      res.json(response.body)
    })

  })


module.exports = router
