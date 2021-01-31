module.exports.home=function(req,res){
   // return res.end('<h1>Express up for codeial</h1>');
   return res.render('home',{
       title:'Hello'
   })

}