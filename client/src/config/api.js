import axios from "axios"

const WORKOUT_API_KEY = 'https://wger.de/api/v2/'
//  api info at https://wger.de/en/software/api

// public endpoints used for this app: exercise, exercise category

// ie... https://wger.de/api/v2/exercise/?language=2&limit=50
// language 2 is english
// limit is the max number of exercises retrieved in the results array from the api
// https://wger.de/api/v2/exercisecategory/
// gives a list of categorys that different exercises can be categorized as.
// ie... arms, legs, abs

const getworkouts = (workoutcount) => {
  axios.get(`https://wger.de/api/v2/exercise/?language=2&limit=${workoutcount}`)
  .then((data) => {
    let exercises = data.results
    console.log(exercises);
  })
}

console.log(getworkouts(50))

export default WORKOUT_API_KEY;