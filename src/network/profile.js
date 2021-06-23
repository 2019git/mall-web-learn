import {profileData} from './data'

export function gainProfileData() {
  return new Promise((resolve, reject) => {
    resolve(profileData)
  })
}
