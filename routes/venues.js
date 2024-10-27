//Import express and express router as shown in lecture code and worked in previous labs
//You can make your axios calls to the API directly in the routes
import * as venueHelper from "../helpers.js";
import {Router} from "express";

const router = Router();

router.route('/').get(async (req, res) => {

  try {    
    const venues = await venueHelper.allVenue();
    res.render('../views/homepage', {venues: venues});
  } catch (error) {
    res.status(500).render('../views/error', {keywords: "error, server error, internal server error"});
  }
});

router.route('/searchvenues').post(async (req, res) => {
  const { searchVenueTerm } = req.body;

  if (!searchVenueTerm.trim()) {
    res.status(400).render('../views/error', {keywords: "you must enter a search term"});
    return;
  }

  try {
    const venues = await venueHelper.searchVenue(searchVenueTerm);
    if (venues.length > 0) {
      const context = { searchVenueTerm, venues: venues.slice(0, 10) };
      res.render('venueSearchResults', context);
    } else {
      const context = { searchVenueTerm };
      res.render('venueNotFound', context);
    }
  } catch (error) {
    res.status(500).render('../views/error', {keywords: "error, server error, internal server error"});
  }
});

router.route('/venuedetails/:id').get(async (req, res) => {
  const venueId = req.params.id;
  if (!venueId) {
    res.status(400).render('../views/error', {keywords: "Venue ID is required"});
    return;
  }

  const venue = await venueHelper.singleVenue(venueId);
  if (!venue) {
    res.status(404).render('../views/error', {keywords: "Venue not Found"});
    return;
  }
  let imageUrl;
  if (Array.isArray(venue.images) && venue.images.length > 0) {
    imageUrl = venue.images[0].url;
  }

  res.render('venueByID', { venue, imageUrl });
});

export default router;