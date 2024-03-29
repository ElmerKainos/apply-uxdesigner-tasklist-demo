//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const flash = require('connect-flash')

router.use(flash())

router.all('*', (req, res, next) => {

      res.locals.flash = req.flash('success')
      next()

})

router.post ('/has-account', (req,res) => {
if (req.session.data.new.hasAccount == 'No') {
      res.redirect('/can-apply')

} else {


 res.redirect('/email')



}


})

router.post ('/can-apply', (req,res) => {
    if (req.session.data.new.canApply == 'No') {
          res.redirect('/noteligible')
    
    } else {
    
    
     res.redirect('/email')
    
    
    
    }
    
    
    })
router.post ('/email', (req,res) => {
      res.redirect('/code')
      
      
      
 })
router.post ('/code', (req,res) => {
            req.session.data.user ={ }
            res.redirect('/application')
            
            
            
 })

 router.get ('/account/sign-out', (req,res) => {
     delete  req.session.data.user
      res.redirect('/has-account')
      
      
      
})





require('./routes/application/show')(router)
require('./routes/application/check')(router)
require('./routes/application/edit-personal-details')(router)
require('./routes/application/edit-experience')(router)
require('./routes/application/edit-evidence')(router)
        

