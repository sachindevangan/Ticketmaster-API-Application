//Here you will import route files and export them as used in previous labs

import VenueRoutes from "./venues.js";

const constructorMethod = (app) =>{
    app.use("/",VenueRoutes);

    app.use("*",(req,res) => {
        res.status(404)
        res.render('error', {keywords: 'Page not found'})
    }) ;
};

export default constructorMethod;