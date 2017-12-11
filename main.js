import { Connect, SimpleSigner } from 'uport-connect'
import kjua from 'kjua'

const uport = new Connect('OmniPort', {
  clientId: '2p1G3gh8jdkPAdGGMr7Un9zBJdLvs2ZQrgQ',
  signer: SimpleSigner('9cd6bcb4398975b73edb8e9af716924779bdf45a3036e34cd228979a6135d68a')
})

// const web3 = uport.getWeb3()
// export { web3, uport, MNID }

window.login = () => {

  // only allow button click once
  document.querySelectorAll('.loginBtn')[0].disabled = true

  uport.requestCredentials({
    requested: ['name', 'avatar', 'phone', 'country'],
    notifications: true,
    (uri) => {
      const qr = kjua({
        text: uri,
        fill: '#000000',
        size: 400,
        back: 'rgba(255, 255, 255, 1)'
      })

      // create wrapping link for mobile touch
      let aTag = document.createElement('a')
      aTag.href = uri

      // nest QR in <a> and inject
      aTag.appendChild(qr)
      document.querySelector('#kqr').appendChild(aTag)

      console.log(aTag)
    })
  }).then((userProfile) => {
        console.log(userProfile)
  })
}




// // Libraries
// import { Connect, SimpleSigner } from 'uport-connect'
// import kjua from 'kjua'

// // uPort object creation
// // Keys are from the app manager
// const uport = new Connect('uPort Demo', {
//   clientId: '0x2bede7ae69a9aa7684c373ae33fb21162e565e52',
//   signer: SimpleSigner('d2942f08d12611429c0ab9ea39eeda128253553d356b4c9f9f17f95e141cafc8')
// })

// // Simple button onclick handler
// window.loginBtn = () => {
  
//   // Only allow button click once
//   document.querySelectorAll('.loginBtn')[0].disabled = true;
  
//   // uport based login with
//   // specific credential requests
//   // notifcations
//   // custom QR
//   // Clickable as a link for mobile
//   uport.requestCredentials({
//     requested: ['name', 'avatar', 'phone', 'country'],
//     notifcations: true },
//     (uri) => {
      
//       const qr = kjua({
//         text: uri,
//         fill: '#0619ac',
//         size: 300,
//         back: 'rgba(255,255,255,1)'
//       })

//       // Create wrapping link for mobile touch
//       let aTag = document.createElement('a')
//       aTag.href = uri

//       // Nest QR in <a> and inject
//       aTag.appendChild(qr)
//       document.querySelector('#kqr').appendChild(aTag)
    
//       console.log(aTag)
//     }).then((userProfile) => {
//     // Do something after they have disclosed credentials
//     console.log(userProfile)
//   })

// }