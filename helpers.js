// api key - lIirjgMfGs9v0ZfWrauv1VDdCRvgD1YS

import axios from 'axios'

export async function allVenue(){
    const {data} = await axios.get('https://app.ticketmaster.com/discovery/v2/venues?apikey=lIirjgMfGs9v0ZfWrauv1VDdCRvgD1YS&countryCode=US')
     return data
}

export async function searchVenue(searchVenueTerm) {
  const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/venues?keyword=${searchVenueTerm}&apikey=lIirjgMfGs9v0ZfWrauv1VDdCRvgD1YS&countryCode=US`);
  return data._embedded.venues;
}

  
export async function singleVenue(venueId) {
  const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/venues/${venueId}?&apikey=lIirjgMfGs9v0ZfWrauv1VDdCRvgD1YS&countryCode=US`);
  return data;
}
