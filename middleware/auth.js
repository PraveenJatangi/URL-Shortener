const { getUser } = require("../service/storeCookies");

async function restricToLoggedInUserOnly(req, res, next) {  
    try {
        const userUid = req.cookies.uid;      
        if (!userUid) {
            return res.redirect('/login');
        }
        const user =  getUser(userUid);
        if (!user) {
            return res.redirect('/login');
        }
        req.user = user;
        next(); 
         // Ensuring proper middleware flow
    } catch (error) {
        console.error("Error in authentication middleware:", error);
        return res.status(500).send("Internal Server Error");
    }
}

async function checkAuth(req,res,next){ 
        const userUid = req.cookies.uid;
      const user =  getUser(userUid);
      req.user = user;
        next(); 
           
}
module.exports = { restricToLoggedInUserOnly,checkAuth };

