const validateCourseMiddleware = (req,res,next)=>{
    const {title , instructor} = req.body
    if(!title||!instructor){
        return res.status(400).send({
            success: false,
            message: "Enter both Title and Instructor"
        })
    }
    next()
};
module.exports = validateCourseMiddleware