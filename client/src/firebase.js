import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase.initializeApp({
//   apiKey: 'AIzaSyBCum7jmnNv1L-2g36CRrBnZNeAbfPBM1Y',
//   authDomain: 'kealtimeranban.firebaseapp.com',
//   projectId: 'kealtimeranban'
// })

firebase.initializeApp({
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID
})

const db = firebase.firestore()
export default db
