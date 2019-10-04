const controller = require('./../controller/course-controller')
const passport = require('passport')


module.exports = (app) => {
    app.route('/courses')
        .get(controller.displayCourseForFaculty)
        .post(controller.addCourse)


    app.route('/student/courses')
        .get(controller.displayCourseForStudent)


    app.route('/student/courses/:id')
        .get(controller.registerCourse)


    app.route('/login')
        .post(passport.authenticate('local'),
            (req, res) => {
                res.send({ status: 'done' })
            })

}






