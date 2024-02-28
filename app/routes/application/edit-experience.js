module.exports = router => {


router.post ('/application/edit-experience/years-of-experience', (req,res) => {
   
    res.redirect('/application/edit-experience/expertise')
    
    
    
})

router.post ('/application/edit-experience/expertise', (req,res) => {
   
    res.redirect('/application/edit-experience/start-date')
    
    
    
})

router.post ('/application/edit-experience/start-date', (req,res) => {
   
    res.redirect('/application/edit-experience/check-experience')
    
    
    
})


router.post ('/application/edit-experience/check-experience', (req,res) => {
   
    res.redirect('/application/')
    
    
    
})









}